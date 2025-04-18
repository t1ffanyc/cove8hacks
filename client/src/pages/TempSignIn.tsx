/* TEMPORARY SIGNIN COMPONENT */
import React, { useState } from "react";
import { useAuth } from "context/authContext";
import { useNavigate } from "react-router";

export default function TempSignIn() {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            console.log("Successfully signed in");
            navigate('/', { replace: true });

        } catch (e: any) {
            console.log("Successfully signed in");
            setErr(e.response?.data?.message || "Error signing in");
        }
    };

    return (
        <div>
        <h1> Temp Sign in page! </h1>
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
        </div>
    );
}
