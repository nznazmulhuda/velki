import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";

function MasterAgent({ user }) {
	const [updateSuperAgentId, setUpdateSuperAgentId] = useState(
		user?.super_agent_id || "",
	);
	const [updateMasterAgentId, setUpdateMasterAgentId] = useState(
		user?.master_agent_id || "",
	);
	const [updateWpNumber, setUpdateWpNumber] = useState(user?.wp_number || "");
	const [updatePhnNumber, setUpdatePhnNumber] = useState(
		user?.phn_number || "",
	);

	const update = (e) => {
		e.preventDefault();
		const updateData = {
			updateSuperAgentId,
			updateMasterAgentId,
			updateWpNumber,
			updatePhnNumber,
		};

		axios
			.put(`/updateMasterAgent?id=${user._id}`, updateData)
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
					{/* Sub_admin id*/}
					<div className="flex flex-col w-full space-y-1">
						<label>Super agent Id:</label>
						<input
							required
							type="number"
							name="super_agent_id"
							placeholder="Super agent id number"
							defaultValue={updateSuperAgentId}
							onChange={(e) =>
								setUpdateSuperAgentId(e.target.value)
							}
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* agent id */}
					<div className="flex flex-col w-full space-y-1">
						<label>New Master Agent Id:</label>
						<input
							required
							type="number"
							name="master_agent_id"
							placeholder="Master agent id number"
							defaultValue={updateMasterAgentId}
							onChange={(e) =>
								setUpdateMasterAgentId(e.target.value)
							}
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
							defaultValue={updateWpNumber}
							onChange={(e) => setUpdateWpNumber(e.target.value)}
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
							defaultValue={updatePhnNumber}
							onChange={(e) => setUpdatePhnNumber(e.target.value)}
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

MasterAgent.propTypes = {
	user: PropTypes.object.isRequired,
};

export default MasterAgent;
