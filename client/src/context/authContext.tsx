/* PROVIDE AN AUTH CONTEXT FOR THE APP */
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
} from "react";
import { useQuery, useQueryClient } from "react-query";
import {
    fetchCurrentUser,
    refreshToken,
    signIn as signInAPI,
    signUp as signUpAPI,
    signOut as signOutAPI,
} from "../api/axios";

// define types and context
interface User {
    _id: string;
    name: string;
    email: string;
}
interface AuthProviderProps {
    children: ReactNode;
}
interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (name: string, email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// provide an auth context that wraps the app, fetching the current user and exposing signin/signup/signout functions
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const qc = useQueryClient();

    // try to fetch current user
    const {
        data: user,
        isLoading,
        refetch,
    } = useQuery<User | null>("me", fetchCurrentUser, {
        staleTime: 5 * 60 * 1000,
    });

    // on mount, try to refresh access token, and then fetch current user
    useEffect(() => {
        refreshToken()
            .then(() => refetch())
            .catch(() => {
                console.log("Not logged in, unable to refresh access token");
            });
    }, [refetch]);

    const signIn = useCallback(
        async (email: string, password: string) => {
            await signInAPI(email, password);
            await refetch();
        },
        [refetch]
    );

    const signUp = useCallback(
        async (name: string, email: string, password: string) => {
            await signUpAPI(name, email, password);
            await signIn(email, password);
        },
        [signIn]
    );

    const signOut = useCallback(async () => {
        await signOutAPI();
        qc.clear();
        await refetch();
    }, [qc, refetch]);

    // children can access the current user, whether its loading, and signin/signup/signout functions
    const val = useMemo(
        () => ({ user: user || null, isLoading, signIn, signUp, signOut }),
        [user, isLoading, signIn, signUp, signOut]
    );

    return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
};

// provide easy access to auth context
export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be in AuthProvider");
    return ctx;
};
