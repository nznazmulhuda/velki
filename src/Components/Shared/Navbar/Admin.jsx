import { NavLink } from "react-router-dom";

function Admin() {
	const links = [
		{
			title: "Dashboard",
			path: "/dashboard",
		},
		{
			title: "Add User",
			path: "/addUser",
		},
		{
			title: "Find User",
			path: "/findUser",
		},
	];
	return (
		<>
			<div className="md:p-4 rounded">
				<ul className="flex items-center justify-between md:justify-start md:gap-4 border p-4 flex-wrap text-xs md:text-sm lg:text-lg">
					{links.map((link) => (
						<li key={link.path}>
							<NavLink
								to={link.path}
								className={({ isActive }) =>
									isActive
										? "border border-[#C00] text-white bg-[#C00] py-1 px-3 rounded"
										: "border py-1 px-3 rounded text-black hover:text-white hover:bg-[#C00] hover:border-[#C00] transition-all ease-in"
								}
							>
								{link.title}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Admin;
