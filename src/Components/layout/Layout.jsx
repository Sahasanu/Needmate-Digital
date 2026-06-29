import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="min-h-screen max-w-[1280px] mx-auto bg-[#faf8ff]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
