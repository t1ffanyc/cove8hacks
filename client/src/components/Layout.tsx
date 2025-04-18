// wrap all pages with a navbar
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";

export default function Layout() {
    return (
        <div className='min-h-screen bg-white'>
            <Navbar />
            <main className='p-6'>
                <Outlet />
            </main>
        </div>
    );
}
