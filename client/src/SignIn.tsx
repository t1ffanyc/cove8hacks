/* TEMPORARY SIGNIN COMPONENT */
import React, { useState } from "react";
import { useAuth } from "context/authContext";

export default function SignIn() {
    const { signIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            console.log("Successfully signed in");
            // TODO: redirect to protected page
        } catch (e: any) {
            console.log("Successfully signed in");
            setErr(e.response?.data?.message || "Error signing in");
        }
    };

    return (
        <form onSubmit={onSubmit}>
            {err && <p style={{ color: "red" }}>{err}</p>}
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type='submit'>Sign In</button>
        </form>
    );
}
