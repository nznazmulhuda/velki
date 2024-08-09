import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SiteAdmin({ user }) {
	const navigate = useNavigate();
	const old_admin_id = user?.admin_id;
	const old_wp_number = user?.wp_number;
	const old_phn_number = user?.phn_number;
	const old_tele_number = user?.tele_number;
	const [admin_id, setAdminId] = useState(user?.admin_id || "");
	const [wp_number, setWpNumber] = useState(user?.wp_number || "");
	const [updateEmail, setUpdateEmail] = useState(user?.email || "");
	const [phn_number, setPhnNumber] = useState(user?.phn_number || "");
	const [tele_number, setTeleNumber] = useState(user?.tele_number || "");
	const [updateUsername, setUpdateUsername] = useState(user?.username || "");

	const update = (e) => {
		e.preventDefault();
		const updateValue = {
			username: updateUsername,
			email: updateEmail,
			admin_id,
			old_admin_id,
			wp_number,
			old_wp_number,
			tele_number,
			old_tele_number,
			phn_number,
			old_phn_number,
		};

		// update user data
		axios.put(`/updateAdmin?id=${user?._id}`, updateValue).then((res) => {
			if (res.data.matchedCount > 0) {
				toast.success("Sub Admin updated successfully!");
				navigate("/findUser");
			} else {
				toast.error("Something went wrong. Please try again!");
			}
		});
	};

	const handleDelete = (id) => {
		axios
			.delete(`/deleteAdmin?id=${id}`)
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
					{/* username */}
					<div className="flex flex-col w-full space-y-1">
						<label>Username:</label>
						<input
							required
							type="text"
							name="username"
							placeholder="Username"
							defaultValue={updateUsername}
							onChange={(e) => setUpdateUsername(e.target.value)}
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* Agent Id */}
					<div className="flex flex-col w-full space-y-1">
						<label>Admin Id:</label>
						<input
							required
							type="text"
							name="admin_id"
							placeholder="Admin id"
							defaultValue={admin_id}
							onChange={(e) => setAdminId(e.target.value)}
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* whatsapp number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Whatsapp no:</label>
						<input
							required
							type="text"
							name="wp_number"
							placeholder="Whatsapp number"
							defaultValue={wp_number}
							onChange={(e) => setWpNumber(e.target.value)}
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* Telegram number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Telegram no:</label>
						<input
							required
							type="text"
							name="tele_number"
							placeholder="Telegram Number"
							defaultValue={tele_number}
							onChange={(e) => setTeleNumber(e.target.value)}
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* Phone number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Phone no:</label>
						<input
							required
							type="text"
							name="phn_number"
							placeholder="Phone Number"
							defaultValue={phn_number}
							onChange={(e) => setPhnNumber(e.target.value)}
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* email */}
					<div className="flex flex-col w-full space-y-1">
						<label>Email:</label>
						<input
							required
							type="email"
							name="email"
							placeholder="Email"
							defaultValue={updateEmail}
							onChange={(e) => setUpdateEmail(e.target.value)}
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					<div className="flex items-center flex-wrap">
						<button
							type="submit"
							className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-xs md:text-lg font-medium mx-auto px-4"
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

SiteAdmin.propTypes = {
	user: PropTypes.object,
};

export default SiteAdmin;
