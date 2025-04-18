import { useAuth } from "context/authContext";
import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  return (
    <nav className="px-4 py-4 shadow-lg bg-white">
      <div className="grid grid-cols-3 items-center max-w-7xl mx-auto">
        {/* our logo in the top left */}
        <div className="flex items-center">
          <span className="w-8 h-8 rounded-full bg-black block"></span>
          <p className="ml-3 font-semibold">cove8hacks</p>
        </div>

        {/* main buttons */}
        <ul className="flex justify-end items-center gap-20 text-gray-700 font-medium">
          <li><Link to='/'><button>home</button></Link></li>
          <li><Link to='*'><button>about</button></Link></li>
          <li><Link to='*'><button>contact</button></Link></li>
        </ul>

        {/* login and sign up buttons */}
        <div className="flex justify-end items-center gap-3">
        {user ? (
            <>
              <Link to="/settings">
                <button className="px-4 py-2">Settings</button>
              </Link>
              <button
                onClick={() => {
                  signOut();
                }}
                className="px-4 py-2 bg-red-200 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <button className="px-4 py-2">Login</button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-red-200 rounded-lg">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}