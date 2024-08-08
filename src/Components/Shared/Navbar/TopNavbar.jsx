import { NavLink } from "react-router-dom";

function TopNavbar() {
	return (
		<>
			<div className="flex w-full justify-between bg-[#F8F8F8] py-3 items-center">
				<div>
					<NavLink
						to={"/"}
						className={({ isActive }) =>
							isActive
								? "bg-white border-b border-b-white py-4 px-10 text-[#333] font-bold text-xs"
								: "bg-transparent border border-t-0 py-4 px-10 hover:bg-black hover:text-white transition-all border-b-0 ease-in font-bold text-xs"
						}
					>
						<button>ভেল্কি</button>
					</NavLink>
					{/* 
                    <NavLink
                        to={"/community"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-white border-b border-b-white py-4 px-10 text-[#333] font-bold text-xs"
                                : "bg-transparent border border-t-0 py-4 px-10 hover:bg-black hover:text-white transition-all border-b-0 ease-in font-bold text-xs"
                        }
                    >
                        <button>ভেল্কি কমিউনিটি</button>
                    </NavLink>

                    <NavLink
                        to={"/forum"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-white border-b border-b-white py-4 px-10 text-[#333] font-bold text-xs"
                                : "bg-transparent border border-t-0 py-4 px-10 hover:bg-black hover:text-white transition-all border-b-0 ease-in font-bold text-xs"
                        }
                    >
                        <button>ভেল্কি ফোরাম</button>
                    </NavLink> */}
				</div>

				<div>
					<NavLink
						to={"/CustomerService"}
						className={"text-[#c00] p-4 hover:bg-[#E5E5E5]"}
					>
						<button>কাস্টমার সার্ভিস</button>
					</NavLink>
				</div>

				<div>
					<NavLink
						to={"/authentication"}
						className={"text-[#c00] p-4 hover:bg-[#E5E5E5]"}
					>
						<button>Login</button>
					</NavLink>
				</div>
			</div>

			<hr className="-mt-[2px] p-0 h-[1px] bg-[#E5E5E5]" />
		</>
	);
}

export default TopNavbar;
