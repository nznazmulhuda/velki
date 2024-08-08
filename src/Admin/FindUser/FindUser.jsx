/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

function FindUser() {
	const { pathname } = useLocation();
	const { user: loginUser } = useContext(AuthContext);
	const [addRole, setAddRole] = useState(
		pathname === "/subAdmin"
			? "sub_admin"
			: pathname === "/superAgent"
			? "super_agent"
			: pathname === "/masterAgent"
			? "master_agent"
			: pathname === "/findUser"
			? "admin"
			: "master",
	);
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
				<h1 className="text-center mb-3 text-sm md:text-lg lg:text-xl font-semibold">
					এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
				</h1>

				<div className="w-[90%] md:w-[60%] lg:w-[40%] mx-auto shadow border rounded p-2">
					{/* select form */}
					<form onChange={handleRole} className="mb-5">
						{/* select role */}
						<label htmlFor="role">Agent Type: </label>
						<select
							name="role"
							defaultValue={
								pathname === "/subAdmin"
									? "sub_admin"
									: pathname === "/superAgent"
									? "super_agent"
									: pathname === "/masterAgent"
									? "master_agent"
									: pathname === "findUser"
									? "admin"
									: "master"
							}
							className="w-full border p-1 pl-2 mt-1 rounded outline-none"
						>
							{pathname === "/findUser" ? (
								<>
									<option value="admin">সাইট এডমিন</option>
									<option value="sub_admin">সাব এডমিন</option>
									<option value="super_agent">
										সুপার এজেন্ট
									</option>
									<option value="master_agent">
										মাষ্টার এজেন্ট
									</option>
									<option value="customer_service">
										কাস্টমার সার্ভিস লিস্ট
									</option>
								</>
							) : (
								<>
									<option value="sub_admin">সাব এডমিন</option>
									<option value="super_agent">
										সুপার এজেন্ট
									</option>
									<option value="master_agent">
										মাষ্টার এজেন্ট
									</option>
								</>
							)}
						</select>
					</form>

					{/* find form */}
					<form onSubmit={handleFind} className="">
						{addRole === "admin" ? (
							<div className="flex flex-col w-full space-y-1">
								<label htmlFor="id_no">Username:</label>
								<input
									required
									name="username"
									type="text"
									className="border p-2 rounded outline-none w-full mt-1 text-xs md:text-sm"
								/>
							</div>
						) : (
							<div className="">
								<label htmlFor="id_no">Agent ID:</label>
								<input
									required
									name="idOrPhoneNumber"
									type="text"
									className="border p-1 pl-2 rounded outline-none w-full mt-1 text-xs md:text-sm"
								/>
							</div>
						)}

						<button
							type="submit"
							className="bg-[#48ac4d] hover:bg-[#45A049] py-2 px-4 rounded text-white my-2 transition-all"
						>
							Submit
						</button>
					</form>
				</div>

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
									{loginUser && <th>Update</th>}
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
											href={`https://wa.me/${user?.wp_number}`}
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

									{loginUser && (
										<td>
											<Link
												to={`/update/${user?._id}`}
												className="text-[#C00] hover:underline"
											>
												Edit
											</Link>
										</td>
									)}
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
												{loginUser && <th>Update</th>}
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

														{loginUser && (
															<td>
																<Link
																	to={`/update/${agent?._id}`}
																	className="text-[#C00] hover:underline"
																>
																	Edit
																</Link>
															</td>
														)}
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

														{loginUser && (
															<td>
																<Link
																	to={`/update/${agent?._id}`}
																	className="text-[#C00] hover:underline"
																>
																	Edit
																</Link>
															</td>
														)}
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
