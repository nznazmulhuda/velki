import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

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

		// api call
		axios
			.post("/add_sub_admin", subUser)
			.then((res) => {
				if (res.data.insertedId) {
					toast.success("New admin added successfully!");
					form.reset();
				} else {
					toast.error("Failed to add new admin!");
					form.reset();
				}
			})
			.catch((e) => toast.error(e.response.data));
	};
	return (
		<>
			<div className="p-4">
				<form
					onSubmit={register}
					className="border p-6 rounded-md flex flex-col space-y-4"
				>
					{/* agent id */}
					<div className="flex flex-col w-full space-y-1">
						<label>Agent Id:</label>
						<input
							required
							type="number"
							name="agent_id"
							placeholder="Agent id number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* whatsapp number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Whatsapp number:</label>
						<input
							required
							type="number"
							name="wp_number"
							placeholder="Whatsapp number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* Phone number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Phone number:</label>
						<input
							required
							type="number"
							name="phn_number"
							placeholder="Phone number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					<button
						type="submit"
						className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-lg font-medium mx-auto px-4"
					>
						Add Sub-Admin
					</button>
				</form>
			</div>
		</>
	);
}

export default SubAdmin;
