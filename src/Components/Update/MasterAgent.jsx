import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
	const [complainNumber, setComplainNumber] = useState(
		user?.complain_number || "",
	);
	const navigate = useNavigate();

	const update = (e) => {
		e.preventDefault();
		const updateData = {
			updateSuperAgentId,
			updateMasterAgentId,
			updateWpNumber,
			updatePhnNumber,
			complainNumber,
		};

		axios
			.put(`/updateMasterAgent?id=${user._id}`, updateData)
			.then((res) => {
				if (res.data.matchedCount > 0) {
					toast.success("Sub Admin updated successfully!");
					navigate("/findUser");
				} else {
					toast.error("Something went wrong. Please try again!");
				}
			})
			.catch((err) => toast.error(err.message));
	};

	const handleDelete = (id) => {
		axios
			.delete(`/deleteMasterAgent?id=${id}`)
			.then((res) => {
				if (res.data.deletedCount > 0) {
					toast.success("Sub Admin deleted successfully!");
					navigate("/findUser");
				} else {
					toast.error("Something went wrong. Please try again!");
				}
			})
			.catch((err) => toast.error(err.response.data));
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
							type="text"
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
							type="text"
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
							type="text"
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
							type="text"
							name="phn_number"
							placeholder="Phone number"
							defaultValue={updatePhnNumber}
							onChange={(e) => setUpdatePhnNumber(e.target.value)}
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
							placeholder="Phone number"
							defaultValue={complainNumber}
							onChange={(e) => setComplainNumber(e.target.value)}
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					<div className="flex items-center flex-wrap">
						<button
							type="submit"
							className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-lg font-medium mx-auto px-4"
						>
							Update {user?.role?.split("_").join(" ")}
						</button>

						<button
							onClick={() => handleDelete(user?._id)}
							type="button"
							className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-xs md:text-lg font-medium mx-auto px-4"
						>
							Delete this {user?.role?.split("_").join(" ")}
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

MasterAgent.propTypes = {
	user: PropTypes.object,
};

export default MasterAgent;
