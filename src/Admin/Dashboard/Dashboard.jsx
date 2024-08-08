import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";

function Dashboard() {
	const { logout } = useContext(AuthContext);
	const [admins, setAdmins] = useState({});
	const [subAdmins, setSubAdmins] = useState({});
	const [superAgents, setSuperAgents] = useState({});
	const [masterAgents, setMasterAgents] = useState({});
	const [customers, setCustomers] = useState({});

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
		} catch (error) {
			toast.error("Error fetching data:", error);
		}
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
				</div>
			</div>
		</>
	);
}

export default Dashboard;
