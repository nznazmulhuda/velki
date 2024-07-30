import { NavLink } from "react-router-dom";

function DownNavbar() {
    return (
        <div>
            <hr className="bg-[#c00] h-[2px] m-[5px] p-0" />

            <div className="w-[70%] mx-auto">
                <NavLink
                    to={"/autoDeposit"}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-black text-white transition-all ease-in font-medium text-lg border-x border-[#E5E5E5] py-2 px-4"
                            : "text-black font-medium text-lg bg-transparent hover:bg-black hover:text-white transition-all ease-in border-x border-[#E5E5E5] py-2 px-4"
                    }
                >
                    ভেল্কি অটো ডিপোজিট এজেন্ট
                </NavLink>

                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-black text-white transition-all ease-in font-medium text-lg border-x border-[#E5E5E5] py-2 px-4"
                            : "text-black font-medium text-lg bg-transparent hover:bg-black hover:text-white transition-all ease-in border-x border-[#E5E5E5] py-2 px-4"
                    }
                >
                    হোম পেইজ
                </NavLink>

                <button className="bg-transparent text-black transition-all ease-in font-medium text-lg border-x border-[#E5E5E5] py-2 px-4 hover:bg-black hover:text-white">
                    সাধারন প্রশ্ন উত্তর
                </button>

                <button className="bg-transparent text-black transition-all ease-in font-medium text-lg border-x border-[#E5E5E5] py-2 px-4 hover:bg-black hover:text-white">
                    এজেন্ট লিষ্ট
                </button>
            </div>

            <hr className="bg-[#c00] h-[2px] -m-[2px] p-0" />
        </div>
    );
}

export default DownNavbar;
