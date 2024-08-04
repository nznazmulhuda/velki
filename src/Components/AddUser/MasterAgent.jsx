function MasterAgent() {
	// register new user
	const register = (e) => {
		e.preventDefault();
		const form = e.target;
		const super_agent_id = form.super_agent_id.value;
		const master_agent_id = form.master_agent_id.value;
		const wp_number = form.wp_number.value;
		const phn_number = form.phn_number.value;
		const date = new Date().toLocaleString();
		const role = "master_agent";

		const subUser = {
			super_agent_id,
			master_agent_id,
			role,
			wp_number,
			phn_number,
			date,
		};
		console.log(subUser);
	};
	return (
		<>
			<div>
				<form onSubmit={register}>
					{/* Sub_admin id*/}
					<div>
						<label>Super agent Id:</label>
						<input
							required
							type="number"
							name="super_agent_id"
							placeholder="Super agent id number"
							className="border border-[#cc000021] rounded-md px-2 py-1 w-[80%] outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* agent id */}
					<div>
						<label>New Master Agent Id:</label>
						<input
							required
							type="number"
							name="master_agent_id"
							placeholder="Master agent id number"
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

					<button type="submit">Add Super Agent</button>
				</form>
			</div>
		</>
	);
}

export default MasterAgent;
