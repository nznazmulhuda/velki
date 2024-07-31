import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

function Layout() {
    return (
        <div>
            <Navbar />
            <div className="w-full md:max-w-[70%] mx-auto border-[1px] border-[#E5E5E5] py-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
