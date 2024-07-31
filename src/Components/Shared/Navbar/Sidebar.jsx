import { RxCross2 } from "react-icons/rx";
import { FaCaretRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Sidebar({ setIsSidebar }) {
    return (
        <div className="bg-[#111111] w-4/5">
            <div>
                <div className="bg-black flex items-center justify-between">
                    <h1 className="text-white text-sm uppercase font-bold py-2 pl-3">
                        Sidebar
                    </h1>

                    <button onClick={() => setIsSidebar(false)} className="">
                        <RxCross2 className="text-white text-lg mr-4" />
                    </button>
                </div>

                <hr />

                <h1 className="text-white text-sm px-3 py-3 bg-black font-bold">
                    প্রধান মেনু
                </h1>

                <div>
                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/autoDeposit"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full border-b"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b"
                        }
                    >
                        ভেল্কি অটো ডিপোজিট এজেন্ট
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full border-b"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b"
                        }
                    >
                        হোম পেইজ
                    </NavLink>

                    <button className="flex items-center gap-1 p-2 text-gray-300 border-b border-dashed w-full">
                        সাধারন প্রশ্ন উত্তর{" "}
                        <FaCaretRight className="text-[#C00] rotate-45" />{" "}
                    </button>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/proxyLink"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b border-dashed pl-4"
                        }
                    >
                        ভেল্কি প্রক্সী লিঙ্ক
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/accountCreate"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b border-dashed pl-4"
                        }
                    >
                        ভেল্কিতে একাউন্ট খুলবেন?
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/agentNewNumber"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b border-dashed pl-4"
                        }
                    >
                        এজেন্ট এর নতুন নাম্বার
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/phoneNumberSearch"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block pl-4 border-b"
                        }
                    >
                        ফোন নাম্বার সার্চ করুন
                    </NavLink>

                    <button className="flex items-center gap-1 p-2 text-gray-300 border-b border-dashed w-full">
                        এজেন্ট লিষ্ট{" "}
                        <FaCaretRight className="text-[#C00] rotate-45" />{" "}
                    </button>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/agentVerify"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b border-dashed pl-4"
                        }
                    >
                        এজেন্ট কে ভেরিফাই করুন
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/masterAgent"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b border-dashed pl-4"
                        }
                    >
                        মাষ্টার এজেন্ট লিষ্ট
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/superAgent"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b border-dashed pl-4"
                        }
                    >
                        সুপার এজেন্ট লিষ্ট
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/subAdmin"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b border-dashed pl-4"
                        }
                    >
                        সাব এডমিন লিষ্ট
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/siteAdmin"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b border-dashed pl-4"
                        }
                    >
                        সাইট এডমিন লিষ্ট
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/CustomerService"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full pl-4 border-b border-dashed"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block border-b pl-4"
                        }
                    >
                        কাস্টমার সার্ভিস লিষ্ট
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/community"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block"
                        }
                    >
                        ভেল্কি কমিউনিটি
                    </NavLink>

                    <NavLink
                        onClick={() => setIsSidebar(false)}
                        to={"/forum"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#C00] p-2 text-gray-300 overflow-hidden block w-full"
                                : "bg-transparent p-2 text-gray-300 overflow-hidden block"
                        }
                    >
                        ভেল্কি ফোরাম
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    setIsSidebar: PropTypes.func,
};

export default Sidebar;
