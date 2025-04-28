import React, { useState } from 'react';
import { Link } from 'react-router';
import { useAuth } from 'context/authContext';


const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [err, setErr] = useState<string | null>(null);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        signIn(email, password);
        console.log("Successfully signed in");

    } catch (e: any) {
        setErr(e.response?.data?.message || "Error signing in");
    }
  };

  return (
    <div>
      <header></header>

      <div className="w-[360px] pt-[8%] mx-auto">
        <div
          className="
            relative z-[1]
            bg-white max-w-[360px]
            mx-auto mb-[100px]
            p-[55px]
            rounded-[40px]
            text-center
            shadow-[0_0_20px_0_rgba(0,0,0,0.2),_0_5px_5px_0_rgba(0,0,0,0.24)]
          "
        >
          <form onSubmit={handleSubmit} className="flex flex-col">
            {err && <p className="text-red-500 mb-4">{err}</p>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="
                w-full bg-gray-200
                text-sm font-sans
                outline-none border-0
                mb-4 p-4
              "
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="
                w-full bg-gray-200
                text-sm font-sans
                outline-none border-0
                mb-4 p-4
              "
            />

            <button
              type="submit"
              className="
                w-full bg-[#d0effc] text-[#969595]
                text-sm font-sans uppercase
                outline-none border-0
                p-4
                transition-all duration-300 ease cursor-pointer
                hover:brightness-90
              "
            >
              Login
            </button>

            <p className="mt-4 text-[#b3b3b3] text-xs">
              Not registered?{' '}
              <Link
                to="/signup"
                className="cursor-pointer text-blue-500 underline"
              >
                Make an account!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
