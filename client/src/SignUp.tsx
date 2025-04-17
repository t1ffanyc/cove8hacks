/* TEMPORARY SIGNUP COMPONENT */
import React, { useState } from "react";
import { useAuth } from "context/authContext";

export default function SignUp() {
    const { user, signUp } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signUp(name, email, password);
            console.log("Successfully signed up");
            // TODO: redirect or show success message
        } catch (e: any) {
            console.error("Error signing up");
            setErr(e.response?.data?.message || "Error signing up");
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                {err && <p style={{ color: "red" }}>{err}</p>}
                <input
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                <button type='submit'>Sign Up</button>
            </form>
            <p> The user is currently... {user ? JSON.stringify(user) : 'Not logged in'}</p>
        </div>
    );
}
