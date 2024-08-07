/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function FindUser() {
	const [addRole, setAddRole] = useState("admin");
	const [error, setError] = useState("");
	const [user, setUser] = useState(null);
	const [under, setUnder] = useState([]);
	const [underData, setUnderData] = useState([]);
	const [underAgents, setUnderAgents] = useState([]);

	const handleRole = (e) => {
		e.preventDefault();
		setAddRole(e.target.value);
		setError("");
		setUser(null);
		setUnder([]);
		setUnderData([]);
	};

	const handleFind = (e) => {
		e.preventDefault();

		if (addRole === "admin") {
			const username = e.target.username.value;

			// api call
			axios
				.get(`/find_user?role=${addRole}&username=${username}`)
				.then((res) => {
					setError("");
					setUser(res.data);
					setUnder(res.data.sub_admins);
					e.target.reset();
				})
				.catch((err) => {
					toast.error(err.message);
					setError(err.response.data);
					setUser(null);
				});
		} else {
			const idOrPhoneNumber = e.target.idOrPhoneNumber.value;

			// api call
			axios
				.get(
					`/find_user?role=${addRole}&idOrPhoneNumber=${idOrPhoneNumber}`,
				)
				.then((res) => {
					setError("");
					setUser(res.data);
					setUnder(
						addRole === "super_agent"
							? res.data.master_agents
							: addRole === "sub_admin"
							? res.data.super_agents
							: [],
					);
					e.target.reset();
				})
				.catch((err) => {
					toast.error(err.response.data);
					setError(err.response.data);
					setUser(null);
				});
		}
	};

	useEffect(() => {
		for (const user of under) {
			axios
				.get(`/allUsers?id=${user}`)
				.then((res) => {
					setUnderData((prev) => [...prev, res.data]);
				})
				.catch((err) => {
					console.error(err);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [under]);

	useEffect(() => {
		addRole === "admin"
			? setUnderAgents(user?.sub_admins || [])
			: addRole === "sub_admin"
			? setUnderAgents(user?.super_agents || [])
			: setUnderAgents(user?.master_agents || []);
	}, [addRole, user]);

	return (
		<>
			<div className="p-4">
				{/* select form */}
				<form
					onChange={handleRole}
					className="text-center text-lg md:text-xl font-semibold"
				>
					{/* select role */}
					<label htmlFor="role">Find: </label>
					<select
						name="role"
						defaultValue="admin"
						className="text-[#C00] ml-2 outline-none border px-2 py-1 rounded-md cursor-pointer"
					>
						<option value="admin">Site-Admin</option>
						<option value="sub_admin">Sub Admin</option>
						<option value="super_agent">Super Agent</option>
						<option value="master_agent">Master Agent</option>
						<option value="customer_service">
							Customer Service
						</option>
					</select>
				</form>

				{/* dynamic title  */}
				<div className="text-center">
					<h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#C00] cursor-pointer hover:underline transition-all ease-linear my-2 md:my-4">
						{addRole === "admin"
							? "Find Site Admin"
							: addRole === "sub_admin"
							? "Find Sub Admin"
							: addRole === "super_agent"
							? "Find Super Agent"
							: addRole === "master_agent"
							? "Find Master Agent"
							: "Find Customer Service"}
					</h1>
				</div>

				{/* find form */}
				<form
					onSubmit={handleFind}
					className="border p-6 rounded-md flex flex-col space-y-4"
				>
					{addRole === "admin" ? (
						<div className="flex flex-col w-full space-y-1">
							<label htmlFor="id_no">Username:</label>
							<input
								required
								name="username"
								type="text"
								placeholder="Enter username"
								className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
							/>
						</div>
					) : (
						<div className="flex flex-col w-full space-y-1">
							<label htmlFor="id_no">
								ID NO or Phone Number:
							</label>
							<input
								required
								name="idOrPhoneNumber"
								type="number"
								placeholder="Enter id no or phone number"
								className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
							/>
						</div>
					)}

					<button
						type="submit"
						className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-lg font-medium mx-auto px-4"
					>
						Find{" "}
						{
							<span className="">
								{addRole === "admin"
									? "site admin"
									: addRole === "sub_admin"
									? "sub admin"
									: addRole === "super_agent"
									? "super agent"
									: addRole === "master_agent"
									? "master agent"
									: "customer service"}
							</span>
						}
					</button>
				</form>

				<hr className="my-4" />

				{/* error */}
				{error && (
					<h1 className="text-center text-xl md:text-2xl font-bold">
						{error}
					</h1>
				)}

				{user && (
					<>
						{/* find details title */}
						<h1 className="text-sm md:text-lg lg:text-xl font-bold text-[#C00] cursor-pointer hover:underline transition-all ease-linear my-2 md:my-4 text-center">
							{addRole === "admin"
								? "Site Admin"
								: addRole === "sub_admin"
								? "Sub Admin"
								: addRole === "super_agent"
								? "Super Agent"
								: addRole === "master_agent"
								? "Master Agent"
								: "Customer Service"}
						</h1>

						{/* find users details */}
						<table className="w-full">
							<thead>
								<tr className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm">
									<th>ID NO</th>
									<th>AGENT</th>
									<th>APP</th>
									<th>PHONE NUMBER</th>
									<th>Update</th>
								</tr>
							</thead>

							<tbody>
								<tr className="text-center border bg-[#EFEFEF] h-[5vh] text-xs md:text-sm">
									<td>
										{addRole === "admin"
											? user?.username
											: addRole === "sub_admin"
											? user?.agent_id
											: addRole === "super_agent"
											? user?.super_agent_id
											: addRole === "master_agent"
											? user?.master_agent_id
											: user?.customer_service_id}
									</td>

									<td>
										{addRole === "admin"
											? "Site Admin"
											: addRole === "sub_admin"
											? "Sub Admin"
											: addRole === "super_agent"
											? "Super Agent"
											: addRole === "master_agent"
											? "Master Agent"
											: "Customer Service"}
									</td>

									<td className="relative">
										<a
											href={`http://wa.me/${user?.wp_number}`}
											target="_blank"
											rel="noopener noreferrer"
											className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
										>
											<FaWhatsapp className="text-green-600 text-sm md:text-lg" />
										</a>
									</td>

									<td className="relative">
										<a
											href={`https://wa.me/${user?.phn_number}`}
											target="_blank"
											rel="noopener noreferrer"
											className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C00] hover:underline"
										>
											{user?.phn_number}
										</a>
									</td>

									<td>
										<Link
											to={`/update/${user?._id}`}
											className="text-[#C00] hover:underline"
										>
											Edit
										</Link>
									</td>
								</tr>
							</tbody>
						</table>

						{addRole === "master_agent" ||
							addRole === "customer_service" || (
								<>
									<hr className="my-4" />

									{/* find users under agent title */}
									<h1 className="text-sm md:text-xl text-center font-semibold text-[#000000c5] my-2 mt-4">
										{addRole === "admin"
											? "সাইট এডমিন "
											: addRole === "sub_admin"
											? "সাব এডমিন"
											: "সুপার এজেন্ট"}{" "}
										{addRole === "admin"
											? user?.username
											: addRole === "sub_admin"
											? user?.agent_id
											: user?.super_agent_id}{" "}
										এর অধীনে সর্বমোট{" "}
										{addRole === "admin"
											? "সাব এডমিন"
											: addRole === "sub_admin"
											? "সুপার এজেন্ট"
											: "মাষ্টার এজেন্ট"}{" "}
										আছে {underAgents.length} জন
									</h1>

									<hr className="my-4" />

									{/* find users under agents */}
									<table className="w-full">
										<thead>
											<tr className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm">
												<th>ID NO</th>
												<th>AGENT</th>
												<th>APP</th>
												<th>PHONE NUMBER</th>
												<th>Update</th>
											</tr>
										</thead>

										<tbody>
											{underData.map((agent, id) =>
												id % 2 === 0 ? (
													<tr
														key={id}
														className="text-center border bg-[#EFEFEF] h-[5vh] text-xs md:text-sm"
													>
														<td>
															{addRole === "admin"
																? agent?.agent_id
																: addRole ===
																  "sub_admin"
																? agent?.super_agent_id
																: agent?.master_agent_id}
														</td>

														<td>
															{agent?.role ===
															"super_agent"
																? "সুপার"
																: agent?.role ===
																  "sub_admin"
																? "সাব"
																: "মাষ্টার"}
														</td>

														<td className="relative">
															<a
																href={`https://wa.me/${agent?.wp_number}`}
																target="_blank"
																rel="noopener noreferrer"
																className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
															>
																<FaWhatsapp className="text-green-600 text-sm md:text-lg" />
															</a>
														</td>

														<td>
															<a
																href={`https://wa.me/${agent?.phn_number}`}
																target="_blank"
																rel="noopener noreferrer"
																className="text-[#C00] hover:underline"
															>
																{
																	agent?.phn_number
																}
															</a>
														</td>

														<td>
															<Link
																to={`/update/${agent?._id}`}
																className="text-[#C00] hover:underline"
															>
																Edit
															</Link>
														</td>
													</tr>
												) : (
													<tr
														key={id}
														className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm"
													>
														<td>
															{addRole === "admin"
																? agent?.agent_id
																: addRole ===
																  "sub_admin"
																? agent?.super_agent_id
																: agent?.master_agent_id}
														</td>

														<td>
															{agent?.role ===
															"super_agent"
																? "সুপার"
																: agent?.role ===
																  "sub_admin"
																? "সাব"
																: "মাষ্টার"}
														</td>

														<td className="relative">
															<a
																href={`https://wa.me/${agent?.wp_number}`}
																target="_blank"
																rel="noopener noreferrer"
																className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
															>
																<FaWhatsapp className="text-green-600 text-sm md:text-lg" />
															</a>
														</td>

														<td>
															<a
																href={`https://wa.me/${agent?.phn_number}`}
																target="_blank"
																rel="noopener noreferrer"
																className="text-[#C00] hover:underline"
															>
																{
																	agent?.phn_number
																}
															</a>
														</td>

														<td>
															<Link
																to={`/update/${agent?._id}`}
																className="text-[#C00] hover:underline"
															>
																Edit
															</Link>
														</td>
													</tr>
												),
											)}
										</tbody>
									</table>
								</>
							)}
					</>
				)}
			</div>
		</>
	);
}

export default FindUser;
