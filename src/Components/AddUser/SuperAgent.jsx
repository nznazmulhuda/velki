import axios from "axios";
import toast from "react-hot-toast";

function SuperAgent() {
	// register new user
	const register = (e) => {
		e.preventDefault();
		const form = e.target;
		const sub_admin_id = form.sub_admin_id.value;
		const super_agent_id = form.super_agent_id.value;
		const wp_number = form.wp_number.value;
		const phn_number = form.phn_number.value;
		const complain_number = form.complain_number.value;
		const date = new Date().toLocaleString();
		const master_agents = [];
		const role = "super_agent";
		const old_under_id = "";
		const old_agent_id = "";
		const old_wp_number = "";
		const old_phn_number = "";

		const superAgent = {
			sub_admin_id,
			super_agent_id,
			role,
			wp_number,
			phn_number,
			master_agents,
			date,
			old_under_id,
			old_agent_id,
			old_wp_number,
			old_phn_number,
			complain_number,
		};

		// api call
		axios
			.post("/add_super_agent", superAgent)
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
					{/* Sub_admin id*/}
					<div className="flex flex-col w-full space-y-1">
						<label>Sub_admin Id:</label>
						<input
							required
							type="text"
							name="sub_admin_id"
							placeholder="Sub-admin id number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* agent id */}
					<div className="flex flex-col w-full space-y-1">
						<label>New Super Agent Id:</label>
						<input
							required
							type="text"
							name="super_agent_id"
							placeholder="Super agent id number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* whatsapp number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Whatsapp number:</label>
						<input
							required
							type="text"
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
							type="text"
							name="phn_number"
							placeholder="Phone number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* Phone number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Complain number:</label>
						<input
							required
							type="text"
							name="complain_number"
							placeholder="Complain number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					<button
						type="submit"
						className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-lg font-medium mx-auto px-4"
					>
						Add Super Agent
					</button>
				</form>
			</div>
		</>
	);
}

export default SuperAgent;
