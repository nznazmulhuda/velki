import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";

function Dashboard() {
	const { logout, user } = useContext(AuthContext);
	const [admins, setAdmins] = useState({});
	const [subAdmins, setSubAdmins] = useState({});
	const [superAgents, setSuperAgents] = useState({});
	const [masterAgents, setMasterAgents] = useState({});
	const [customers, setCustomers] = useState({});
	const [editors, setEditors] = useState({});
	const [users, setUsers] = useState([]);

	// fetch data from api
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			await axios("/getAllAdmins")
				.then((res) => setAdmins(res.data))
				.catch((err) => toast.error(err.message));
			await axios("/sub_admin")
				.then((res) => setSubAdmins(res.data))
				.catch((err) => toast.error(err.message));
			await axios("/super_agent")
				.then((res) => setSuperAgents(res.data))
				.catch((err) => toast.error(err.message));
			await axios("/master_agent")
				.then((res) => setMasterAgents(res.data))
				.catch((err) => toast.error(err.message));
			await axios("/customer")
				.then((res) => setCustomers(res.data))
				.catch((err) => toast.error(err.message));
			await axios("/editorsList")
				.then((res) => setEditors(res.data))
				.catch((err) => toast.error(err.message));
			await axios("/editors")
				.then((res) => setUsers(res.data))
				.catch((err) => toast.error(err.message));
		} catch (error) {
			toast.error("Error fetching data:", error);
		}
	};

	const handlePassword = (e) => {
		e.preventDefault();
		const form = e.target;
		const oldPassword = form.old_password.value;
		const newPassword = form.new_password.value;
		const confirmPassword = form.confirm_password.value;

		const data = {
			password: oldPassword,
			hash: user.password,
		};

		if (newPassword === confirmPassword) {
			axios.post("/validatePassword", data).then((res) => {
				console.log(res.data);
				if (res.data.isValid === true) {
					axios
						.put("/changePassword", {
							newPassword,
							id: user._id,
						})
						.then(() => {
							toast.success("Password changed successfully.");
							form.reset();
						})
						.catch((err) => {
							toast.error(
								"Error changing password: ",
								err.message,
							);
						});
				} else {
					toast.error("Old password is incorrect.");
					form.old_password.value = "";
					return;
				}
			});
		} else {
			toast.error("Passwords do not match.");
			form.new_password.value = "";
			form.confirm_password.value = "";
			return;
		}
	};

	const deleteEditor = (id) => {
		axios
			.delete(`/editors?id=${id}`)
			.then(() => {
				toast.success("Editor deleted successfully.");
				fetchData();
			})
			.catch((err) => {
				toast.error("Error deleting editor: ", err.message);
			});
	};

	return (
		<>
			<div className="p-4">
				<h1 className="text-center mb-5 text-xl md:text-2xl lg:text-3xl font-bold text-[#C00] hover:underline cursor-pointer flex flex-col md:flex-row md:justify-center items-center gap-2">
					Dashboard{" "}
					<span
						onClick={logout}
						className="text-xs border py-1 px-4 rounded-md border-[#C00] hover:bg-[#C00] hover:text-white transition-all"
					>
						Logout
					</span>
				</h1>

				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
					<div className="border border-[#cc000030] rounded-md p-4">
						<h1 className="text-xl md:text-2xl font-bold">
							Total Admins:{" "}
							<span className="text-[#C00]">{admins.total}</span>
						</h1>
					</div>

					<div className="border border-[#cc000030] rounded-md p-4">
						<h1 className="text-xl md:text-2xl font-bold">
							Total Sub Admins:{" "}
							<span className="text-[#C00]">
								{subAdmins.total}
							</span>
						</h1>
					</div>

					<div className="border border-[#cc000030] rounded-md p-4">
						<h1 className="text-xl md:text-2xl font-bold">
							Total Super Agents:{" "}
							<span className="text-[#C00]">
								{superAgents.total}
							</span>
						</h1>
					</div>

					<div className="border border-[#cc000030] rounded-md p-4">
						<h1 className="text-xl md:text-2xl font-bold">
							Total Master Agents:{" "}
							<span className="text-[#C00]">
								{masterAgents.total}
							</span>
						</h1>
					</div>

					<div className="border border-[#cc000030] rounded-md p-4">
						<h1 className="text-xl md:text-2xl font-bold">
							Total Customer Services:{" "}
							<span className="text-[#C00]">
								{customers.total}
							</span>
						</h1>
					</div>

					<div className="border border-[#cc000030] rounded-md p-4">
						<h1 className="text-xl md:text-2xl font-bold">
							Total Editors:{" "}
							<span className="text-[#C00]">{editors.total}</span>
						</h1>
					</div>
				</div>

				<div className="flex w-full gap-4 mt-4 flex-col md:flex-row">
					<div className="w-full md:w-1/2">
						<h1 className="text-center mt-4 text-xl md:text-2xl font-bold">
							Change password
						</h1>

						<div className="p-4">
							<form
								onSubmit={handlePassword}
								className="border p-6 rounded-md flex flex-col space-y-4"
							>
								{/* oldpass */}
								<div className="flex flex-col w-full space-y-1">
									<label>Old Password:</label>
									<input
										required
										type="password"
										name="old_password"
										placeholder="Old Password"
										className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
									/>
								</div>

								{/* New Password */}
								<div className="flex flex-col w-full space-y-1">
									<label>New Password:</label>
									<input
										required
										type="password"
										name="new_password"
										placeholder="New Password"
										className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
									/>
								</div>

								{/* Confirm password */}
								<div className="flex flex-col w-full space-y-1">
									<label>Confirm Password:</label>
									<input
										required
										type="password"
										name="confirm_password"
										placeholder="Confirm password"
										className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
									/>
								</div>

								<button
									type="submit"
									className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-lg font-medium mx-auto px-4"
								>
									Change Password
								</button>
							</form>
						</div>
					</div>

					<div className="w-full md:w-1/2">
						<h1 className="text-center mt-4 text-xl md:text-2xl font-bold">
							All Editors
						</h1>

						<table className="w-full mt-4">
							<thead>
								<tr>
									<th className="h-[6vh] border text-center">
										Username
									</th>
									<th className="h-[6vh] border text-center">
										Action
									</th>
								</tr>
							</thead>

							<tbody>
								{users?.map((edit) => (
									<tr
										key={edit._id}
										className="text-center h-[8vh] md:h-[6vh]"
									>
										<td className="border font-semibold">
											{edit.username}
										</td>

										<td className="border font-semibold">
											<button
												onClick={() =>
													edit.username ===
														edit.username ||
													deleteEditor(edit._id)
												}
												className={`${
													edit.username ===
													user.username
														? "border py-1 px-4 rounded-md border-[#C00] bg-[#C00] text-white opacity-70 cursor-not-allowed"
														: "border py-1 px-4 rounded-md border-[#C00] text-[#C00] font-medium hover:bg-[#C00] transition-all hover:text-white"
												}`}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
