import { useState } from "react";
import SiteAdmin from "../../Components/AddUser/SiteAdmin";
import SubAdmin from "../../Components/AddUser/SubAdmin";
import SuperAgent from "../../Components/AddUser/SuperAgent";
import MasterAgent from "../../Components/AddUser/MasterAgent";

function AddUser() {
	const [addRole, setAddRole] = useState("site_admin");
	const handleRole = (e) => {
		e.preventDefault();
		setAddRole(e.target.value);
	};
	return (
		<>
			<div className="p-4">
				<form
					onChange={handleRole}
					className="text-center text-lg md:text-xl font-semibold"
				>
					{/* select role */}
					<label htmlFor="role">Add type:</label>
					<select
						name="role"
						defaultValue="site_admin"
						className="text-[#C00] ml-2 outline-none border px-2 py-1 rounded-md cursor-pointer"
					>
						<option value="site_admin">Site-Admin</option>
						<option value="sub_admin">Sub Admin</option>
						<option value="super_agent">Super Agent</option>
						<option value="master_agent">Master Agent</option>
					</select>
				</form>

				<div className="text-center">
					<h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#C00] cursor-pointer hover:underline transition-all ease-linear my-2 md:my-4">
						{addRole === "site_admin"
							? "Add New Site Admin"
							: addRole === "sub_admin"
							? "Add New Sub Admin"
							: addRole === "super_agent"
							? "Add New Super Agent"
							: "Add New Master Agent"}
					</h1>
				</div>

				{/* for site admin */}
				{addRole === "site_admin" ? (
					<SiteAdmin />
				) : addRole === "sub_admin" ? (
					<SubAdmin />
				) : addRole === "super_agent" ? (
					<SuperAgent />
				) : (
					<MasterAgent />
				)}
			</div>
		</>
	);
}

export default AddUser;
