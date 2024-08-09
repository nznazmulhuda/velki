import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SuperAgent({ user }) {
	const [subAdminId, setSubAdminId] = useState(user?.sub_admin_id || "");
	const [superAgentId, setSuperAgentId] = useState(
		user?.super_agent_id || "",
	);
	const [wpNumber, setWpNumber] = useState(user?.wp_number || "");
	const [phnNumber, setPhnNumber] = useState(user?.phn_number || "");
	const [complainNumber, setComplainNumber] = useState(
		user?.complain_number || "",
	);
	const navigate = useNavigate();

	const update = (e) => {
		e.preventDefault();
		const updateSubAdminId = subAdminId;
		const updateSuperAgentId = superAgentId;
		const updateWpNumber = wpNumber;
		const updatePhnNumber = phnNumber;
		const updateComplainNumber = complainNumber;
		const updateData = {
			updateSubAdminId,
			updateSuperAgentId,
			updateWpNumber,
			updatePhnNumber,
			updateComplainNumber,
		};

		// Update user data with the new data and call the API to update it
		axios
			.put(`/updateSuperAgent?id=${user._id}`, updateData)
			.then((res) => {
				if (res.data.matchedCount > 0) {
					toast.success("Sub Admin updated successfully!");
					navigate("/findUser");
				} else {
					toast.error("Something went wrong. Please try again!");
				}
			})
			.catch((err) => toast.error(err.response.data));
	};

	const handleDelete = (id) => {
		axios
			.delete(`/deleteSuperAgent?id=${id}`)
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
						<label>Sub_admin Id:</label>
						<input
							required
							type="text"
							name="sub_admin_id"
							placeholder="Sub-admin id number"
							defaultValue={subAdminId}
							onChange={(e) => setSubAdminId(e.target.value)}
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
							defaultValue={superAgentId}
							onChange={(e) => setSuperAgentId(e.target.value)}
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

					{/* Phone number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Complain number:</label>
						<input
							required
							type="text"
							name="complain_number"
							placeholder="Complain number"
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

SuperAgent.propTypes = {
	user: PropTypes.object,
};

export default SuperAgent;
