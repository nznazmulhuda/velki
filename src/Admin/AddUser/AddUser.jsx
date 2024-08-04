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
	console.log(addRole);
	return (
		<>
			<div className="p-4">
				<form onChange={handleRole}>
					{/* select role */}
					<label htmlFor="role">Role:</label>
					<select name="role" defaultValue="site_admin">
						<option value="site_admin">Site-Admin</option>
						<option value="sub_admin">Sub-Admin</option>
						<option value="super_agent">Super Agent</option>
						<option value="master_agent">Master Agent</option>
					</select>
				</form>

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
