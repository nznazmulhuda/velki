import { FaWhatsapp } from "react-icons/fa";
import CustomerPic from "../../assets/agent/customerService.jpg";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function CustomerService() {
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		axios
			.get("/allCustomers")
			.then((res) => setCustomers(res.data))
			.catch(() => toast.error("Something went wrong!"));
	}, []);
	return (
		<>
			<Helmet>
				<title>কাস্টমার সার্ভিস লিষ্ট - Velki Agents</title>
			</Helmet>

			<div className="p-4">
				{/* banner */}
				<div className="my-10 relative -z-20">
					<img src={CustomerPic} className="w-full" alt="" />
					<button className="border border-gray-500 bg-white px-2 hover:bg-[#c00] hover:text-white transition-all ease-in absolute top-0 left-0 text-sm hover:border-transparent">
						Agent
					</button>
				</div>

				{/* Customers details is here */}
				<div>
					{/* Title */}
					<h1 className="text-black text-center my-3 text-xl md:text-3xl font-bold">
						VELKI CUSTOMER SERVICE LIST
					</h1>

					{/* header for each table */}
					<h1 className="text-sm md:text-xl text-center font-semibold text-[#000000c5] my-2 mt-4">
						ভেল্কিতে আপনি অটো ডিপোজিট এবং অটো উইথড্র আইডি খুলে নিতে
						পারবেন। বিস্তারিত জানতে কাস্টমার সার্ভিসে যোগাযোগ করুন
					</h1>

					{/* table */}
					<table className="w-full">
						<thead>
							<tr className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm">
								<th>ID NO</th>
								<th>TYPE</th>
								<th>WHTS</th>
								<th>PHONE NUMBER</th>
							</tr>
						</thead>

						<tbody>
							{customers.map((customer, id) =>
								id % 2 === 0 ? (
									<tr
										key={id}
										className="text-center border bg-[#EFEFEF] h-[5vh] text-xs md:text-sm"
									>
										<td>{customer.customer_service_id}</td>
										<td>{customer.type}</td>
										<td className="flex items-center justify-center mt-1">
											<a
												href={`https://wa.me/${customer.wp_number}`}
												target="_blank"
												rel="noopener noreferrer"
											>
												<FaWhatsapp className="text-green-600 text-sm md:text-lg" />
											</a>
										</td>
										<td>
											<a
												href={`https://wa.me/${customer.phn_number}`}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#C00] hover:underline"
											>
												{customer.phn_number}
											</a>
										</td>
									</tr>
								) : (
									<tr
										key={id}
										className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm"
									>
										<td>{customer.customer_service_id}</td>
										<td>{customer.type}</td>
										<td className="flex items-center justify-center mt-1">
											<a
												href={`https://wa.me/${customer.wp_number}`}
												target="_blank"
												rel="noopener noreferrer"
											>
												<FaWhatsapp className="text-green-600 text-sm md:text-lg" />
											</a>
										</td>
										<td>
											<a
												href={`https://wa.me/${customer.phn_number}`}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#C00] hover:underline"
											>
												{customer.phn_number}
											</a>
										</td>
									</tr>
								),
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default CustomerService;
