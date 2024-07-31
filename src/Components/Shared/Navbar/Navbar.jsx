import DownNavbar from "./DownNavbar";
import MidNavbar from "./MidNavbar";
import TopNavbar from "./TopNavbar";
import { MdMenu } from "react-icons/md";
import NavbarImage from "../../../assets/NavbarRes.jpg";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Navbar() {
    const [isSidebar, setIsSidebar] = useState(false);
    return (
        <>
            {/* pc and laptop navbar */}
            <div className="hidden md:flex">
                <div className="w-full">
                    <TopNavbar />
                    <MidNavbar />
                    <DownNavbar />
                </div>
            </div>

            {/* Responsive navbar */}
            <div className="flex md:hidden flex-col mb-5 relative top-0 bg-white">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsSidebar(true)}
                            className="p-4 hover:bg-[#E5E5E5] border-r"
                        >
                            <MdMenu size={18} />
                        </button>

                        <img src={NavbarImage} className="w-20" alt="" />
                    </div>

                    <div>
                        <NavLink
                            to={"/CustomerService"}
                            className={
                                "text-[#c00] p-4 hover:bg-[#E5E5E5] text-sm"
                            }
                        >
                            কাস্টমার সার্ভিস
                        </NavLink>
                    </div>
                </div>

                <hr className="h-[4px] bg-[#c00] w-full m-0 p-0" />

                <div className={`${isSidebar ? "flex" : "hidden"}`}>
                    <div className="absolute top-0 w-full">
                        <Sidebar setIsSidebar={setIsSidebar} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
