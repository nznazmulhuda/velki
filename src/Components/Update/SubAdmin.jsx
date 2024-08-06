import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-hot-toast";

function SubAdmin({ user }) {
	const [agentId, setAgentId] = useState(user?.agent_id || "");
	const [wpNumber, setWpNumber] = useState(user?.wp_number || "");
	const [phnNumber, setPhnNumber] = useState(user?.phn_number || "");

	const update = (e) => {
		e.preventDefault();
		const agent_id = agentId;
		const wp_number = wpNumber;
		const phn_number = phnNumber;
		const updateData = { agent_id, wp_number, phn_number };

		axios
			.put(`/updateSubAdmin?id=${user._id}`, updateData)
			.then((res) => {
				if (res.data.matchedCount > 0) {
					toast.success("Sub Admin updated successfully!");
				} else {
					toast.error("Something went wrong. Please try again!");
				}
			})
			.catch((err) => toast.error(err.message));
	};
	return (
		<>
			<div className="p-4">
				<form
					onSubmit={update}
					className="border p-6 rounded-md flex flex-col space-y-4"
				>
					{/* agent id */}
					<div className="flex flex-col w-full space-y-1">
						<label>Agent Id:</label>
						<input
							required
							type="text"
							name="agent_id"
							placeholder="Agent id number"
							defaultValue={agentId}
							onChange={(e) => setAgentId(e.target.value)}
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
							defaultValue={wpNumber}
							onChange={(e) => setWpNumber(e.target.value)}
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
							defaultValue={phnNumber}
							onChange={(e) => setPhnNumber(e.target.value)}
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					<button
						type="submit"
						className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-lg font-medium mx-auto px-4"
					>
						Update {user?.role?.split("_").join(" ")}
					</button>
				</form>
			</div>
		</>
	);
}

SubAdmin.propTypes = {
	user: PropTypes.object.isRequired,
};

export default SubAdmin;
