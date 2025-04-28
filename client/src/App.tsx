import "./App.css";
import { Routes, Route } from "react-router";
import { RequireAuth } from "components";
import TempSignUp from "pages/TempSignUp";
import Home from "pages/Home";
import RequireNoAuth from "components/RequireNoAuth";
import Layout from "components/Layout";
import NotFound from "pages/NotFound";
import LoginPage from "pages/Login";

export default function App() {
    return (
        <Routes>
                <Route element={<Layout />}>
                {/* public routes */}
                <Route element={<RequireNoAuth />}>
                    <Route path='/signin' element={<LoginPage />} />
                    <Route path='/signup' element={<TempSignUp />} />
                </Route>

                {/* routes that require auth */}
                <Route element={<RequireAuth />}>
                    <Route path='/' element={<Home />} />
                </Route>

                {/* Fallback */}
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}