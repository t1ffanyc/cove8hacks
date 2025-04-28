/* TEMPORARY SIGNUP COMPONENT */
import React, { useState } from "react";
import { useAuth } from "context/authContext";
import { useNavigate } from "react-router";

export default function TempSignUp() {
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signUp(name, email, password);
            console.log("Successfully signed up");
            navigate('/', { replace: true });
        } catch (e: any) {
            console.error("Error signing up");
            setErr(e.response?.data?.message || "Error signing up");
        }
    };

    return (
        <div>
            <h1>TEMP Signup page! (Maybe just change the form on the signin page instead of redirecting)</h1>
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
        </div>
    );
}
