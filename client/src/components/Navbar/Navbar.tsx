import { useAuth } from "context/authContext";
import { Link } from "react-router";

export default function Navbar() {
    const { user, signOut } = useAuth();

    const buttonBase = "px-4 py-2 rounded-lg transition-colors duration-200";
    const defaultHover = "hover:text-blue-600";
    const redHover = "hover:bg-red-300";

    return (
        <nav className='px-4 py-4 shadow-lg bg-white'>
            <div className='container flex items-center justify-between px-6 mx-auto'>
                {/* logo */}
                <Link to='/' className='flex items-center'>
                    <span className='w-8 h-8 rounded-full bg-black block' />
                    <p className='ml-3 font-semibold'>cove8hacks</p>
                </Link>

                {/* main buttons */}
                <ul className='flex items-center gap-8 text-gray-700 font-medium'>
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About" },
                        { to: "/contact", label: "Contact" },
                    ].map(({ to, label }) => (
                        <li key={label}>
                            <Link to={to}>
                                <button
                                    className={`${buttonBase} ${defaultHover}`}
                                >
                                    {label}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* auth buttons */}
                <div className='flex items-center gap-3'>
                    {user ? (
                        <>
                            <Link to='/settings'>
                                <button
                                    className={`${buttonBase} ${defaultHover}`}
                                >
                                    Settings
                                </button>
                            </Link>
                            <button
                                onClick={signOut}
                                className={`${buttonBase} bg-red-200 ${redHover}`}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/signin'>
                                <button
                                    className={`${buttonBase} ${defaultHover}`}
                                >
                                    Login
                                </button>
                            </Link>
                            <Link to='/signup'>
                                <button
                                    className={`${buttonBase} bg-red-200 ${redHover}`}
                                >
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

// export default function Navbar() {
//   const { user, signOut } = useAuth();

//   return (
//     <nav className="px-4 py-4 shadow-lg bg-white">
//       <div className="container flex items-center justify-between px-6 mx-auto">
//         {/* our logo in the top left */}
//         <div className="flex items-center">
//           <span className="w-8 h-8 rounded-full bg-black block"></span>
//           <p className="ml-3 font-semibold">cove8hacks</p>
//         </div>

//         {/* main buttons */}
//         <ul className="flex justify-end items-center gap-20 text-gray-700 font-medium">
//           <li><Link to='/'><button>home</button></Link></li>
//           <li><Link to='*'><button>about</button></Link></li>
//           <li><Link to='*'><button>contact</button></Link></li>
//         </ul>

//         {/* login and sign up buttons */}
//         <div className="flex justify-end items-center gap-3">
//         {user ? (
//             <>
//               <Link to="/settings">
//                 <button className="px-4 py-2">Settings</button>
//               </Link>
//               <button
//                 onClick={() => {
//                   signOut();
//                 }}
//                 className="px-4 py-2 bg-red-200 rounded-lg"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/signin">
//                 <button className="px-4 py-2">Login</button>
//               </Link>
//               <Link to="/signup">
//                 <button className="px-4 py-2 bg-red-200 rounded-lg">
//                   Sign Up
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
