import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SiteAdmin from "../../Components/Update/SiteAdmin";
import SubAdmin from "../../Components/Update/SubAdmin";
import SuperAgent from "../../Components/Update/SuperAgent";
import MasterAgent from "../../Components/Update/MasterAgent";
import Customer from "../../Components/Update/Customer";

function UpdateUser() {
	const { id } = useParams();

	const { data } = useQuery({
		queryKey: ["user"],
		queryFn: async () =>
			axios.get(`/user?id=${id}`).then((res) => res.data),
	});

	return (
		<>
			<div>
				{/* title */}
				{data && (
					<h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold my-4">
						Update{" "}
						<span className="text-[#C00] hover:underline cursor-pointer">
							{data?.role
								?.split("_")
								.join(" ")
								.slice(0, 1)
								.toUpperCase() +
								data?.role?.split("_").join(" ").slice(1)}
						</span>
					</h1>
				)}

				{/* form */}
				{data?.role === "site_admin" ? (
					<SiteAdmin user={data} />
				) : data?.role === "sub_admin" ? (
					<SubAdmin user={data} />
				) : data?.role === "super_agent" ? (
					<SuperAgent user={data} />
				) : data?.role === "master_agent" ? (
					<MasterAgent user={data} />
				) : (
					<Customer user={data} />
				)}
			</div>
		</>
	);
}

export default UpdateUser;
