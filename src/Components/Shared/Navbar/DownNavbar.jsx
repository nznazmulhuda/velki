import { NavLink } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa6";
import Links from "./Links";
import { useState } from "react";

function DownNavbar() {
    const [isCommon, setIsCommon] = useState(false);
    const [isCommon2, setIsCommon2] = useState(false);
    const links = [
        {
            path: "/proxyLink",
            title: "ভেল্কি প্রক্সী লিঙ্ক",
        },
        {
            path: "/accountCreate",
            title: "ভেল্কিতে একাউন্ট খুলবেন?",
        },
        {
            path: "/agentNewNumber",
            title: "এজেন্ট এর নতুন নাম্বার",
        },
        {
            path: "/phoneNumberSearch",
            title: "ফোন নাম্বার সার্চ করুন",
        },
    ];
    const agentLinks = [
        {
            path: "/agentVerify",
            title: "এজেন্ট কে ভেরিফাই করুন",
        },
        {
            path: "/masterAgent",
            title: "মাষ্টার এজেন্ট লিষ্ট",
        },
        {
            path: "/superAgent",
            title: "সুপার এজেন্ট লিষ্ট",
        },
        {
            path: "/subAdmin",
            title: "সাব এডমিন লিষ্ট",
        },
        {
            path: "/siteAdmin",
            title: "সাইট এডমিন লিষ্ট",
        },
        {
            path: "/CustomerService",
            title: "কাস্টমার সার্ভিস লিষ্ট",
        },
    ];

    return (
        <div className="mb-5">
            <hr className="bg-[#c00] h-[2px] mt-[5px] p-0 z-20 relative" />

            <div className="w-[70%] mx-auto flex items-center">
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

                <button
                    onClick={() => setIsCommon(!isCommon)}
                    className="bg-transparent text-black transition-all ease-in font-medium text-lg border-x border-[#E5E5E5] py-2 px-4 hover:bg-black hover:text-white flex items-center relative"
                >
                    <h1 className="w-full">সাধারন প্রশ্ন উত্তর</h1>

                    <FaCaretRight className="rotate-45 ml-1" />

                    <ul
                        className={`absolute top-10 left-0 outline-none bg-white border border-t-0 border-[#E5E5E5] w-full py-2 space-y-1 ${
                            isCommon ? "visible" : "hidden"
                        }`}
                    >
                        {links.map((link) => (
                            <li key={link.path}>
                                <Links link={link.title} path={link.path} />
                            </li>
                        ))}
                    </ul>
                </button>

                <button
                    onClick={() => setIsCommon2(!isCommon2)}
                    className="bg-transparent text-black transition-all ease-in font-medium text-lg border-x border-[#E5E5E5] py-2 px-4 hover:bg-black hover:text-white flex items-center relative"
                >
                    এজেন্ট লিষ্ট
                    <FaCaretRight className="rotate-45 ml-1" />
                    <ul
                        className={`absolute top-10 left-0 outline-none bg-white border border-t-0 border-[#E5E5E5] w-full py-2 space-y-1 ${
                            isCommon2 ? "visible" : "hidden"
                        }`}
                    >
                        {agentLinks.map((link) => (
                            <li key={link.path}>
                                <Links link={link.title} path={link.path} />
                            </li>
                        ))}
                    </ul>
                </button>
            </div>

            <hr className="bg-[#c00] h-[2px] -m-[2px] p-0 z-20 relative" />
        </div>
    );
}

export default DownNavbar;
