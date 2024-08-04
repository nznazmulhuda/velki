import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function SubAdmin() {
	const { user } = useContext(AuthContext);
	// register new user
	const register = (e) => {
		e.preventDefault();
		const form = e.target;
		const agent_id = form.agent_id.value;
		const wp_number = form.wp_number.value;
		const phn_number = form.phn_number.value;
		const date = new Date().toLocaleString();
		const under_id = user._id;
		const role = "sub_admin";

		const subUser = {
			agent_id,
			role,
			wp_number,
			phn_number,
			date,
			under_id,
		};
		console.log(subUser);
	};
	return (
		<>
			<div>
				<form onSubmit={register}>
					{/* agent id */}
					<div>
						<label>Agent Id:</label>
						<input
							required
							type="number"
							name="agent_id"
							placeholder="Agent id number"
							className="border border-[#cc000021] rounded-md px-2 py-1 w-[80%] outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* whatsapp number */}
					<div>
						<label>Whatsapp number:</label>
						<input
							required
							type="number"
							name="wp_number"
							placeholder="Whatsapp number"
							className="border border-[#cc000021] rounded-md px-2 py-1 w-[80%] outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* Phone number */}
					<div>
						<label>Phone number:</label>
						<input
							required
							type="number"
							name="phn_number"
							placeholder="Phone number"
							className="border border-[#cc000021] rounded-md px-2 py-1 w-[80%] outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					<button type="submit">Add Sub-Admin</button>
				</form>
			</div>
		</>
	);
}

export default SubAdmin;
