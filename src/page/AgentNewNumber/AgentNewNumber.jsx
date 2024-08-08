import { Helmet } from "react-helmet";
import pic from "../../assets/agent/agentNewOrOldNum.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function AgentNewNumber() {
	const [datas, setDatas] = useState([]);
	useEffect(() => {
		axios
			.get("/newOldNumbers")
			.then((res) => setDatas(res.data))
			.catch(() => toast.error("Something went wrong!"));
	}, []);
	return (
		<>
			<Helmet>
				<title>এজেন্ট এর নতুন নাম্বার - Velki Agents</title>
			</Helmet>

			<div className="p-4">
				{/* Title */}
				<h1 className="text-3xl md:text-5xl font-medium ">
					এজেন্টের এর নতুন পুরাতন নাম্বার
				</h1>

				{/* banner */}
				<div className="my-10 relative">
					<img src={pic} className="w-full" alt="" />
					<button className="border border-gray-500 bg-white px-2 hover:bg-[#c00] hover:text-white transition-all ease-in absolute top-0 left-0 text-sm hover:border-transparent">
						Pages
					</button>
				</div>

				{/* content */}
				<div>
					{/* heading */}
					<h1 className="font-bold mb-2">
						দয়া করে একটু নির্দেশনা গুলো পড়ে নিনঃ
					</h1>

					{/* content */}
					<div className="space-y-1 border-l-4 px-4">
						<p className="text-gray-800 font-medium">
							**প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন
							ভেল্কি সাইটঃ VELKI.COM
						</p>

						<p className="text-gray-800 font-medium">
							**হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা
							লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না।
						</p>

						<p className="text-gray-800 font-medium">
							**এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে - আপনি একাউন্টে
							ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে
							কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড
							আপনি কাউকেই দিবেন না - সে যেই হউক না কেন।
						</p>

						<p className="text-gray-800 font-medium">
							**সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি
							এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার ভেল্কি নিবে
							না।
						</p>

						<p className="text-gray-800 font-medium">
							**প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে –
							এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু
							এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য
							জানা জরুরী।
						</p>

						<p className="text-gray-800 font-medium">
							**এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর
							নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসাপ
							নাম্বার আসবে - তাকে অভিযোগ করতে হবে।
						</p>
					</div>
				</div>

				{/* old number and new number list is here */}
				<div>
					{/* Title */}
					<h1 className="text-black text-center my-3 text-xl md:text-3xl font-bold">
						VELKI MASTER AGENT LIST
					</h1>

					{/* table */}
					<table className="w-full">
						<thead>
							<tr className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm">
								<th>OLD ID</th>
								<th>NEW ID</th>
								<th>OLD NUMBER</th>
								<th>NEW NUMBER</th>
							</tr>
						</thead>

						<tbody>
							{datas.map((data, id) =>
								id % 2 === 0 ? (
									<tr
										key={id}
										className="text-center border bg-[#EFEFEF] h-[5vh] font-semibold"
									>
										<td className="line-through text-[#C00]">
											{data.role === "site_admin"
												? data.old_admin_id
												: data.role === "sub_admin"
												? data.old_agent_id
												: data.role === "super_agent"
												? data.old_agent_id
												: data.role === "master_agent"
												? data.old_agent_id
												: data.old_customer_service_id}
										</td>
										<td>
											{data.role === "site_admin"
												? data.admin_id
												: data.role === "sub_admin"
												? data.agent_id
												: data.role === "super_agent"
												? data.super_agent_id
												: data.role === "master_agent"
												? data.master_agent_id
												: data.customer_service_id}
										</td>
										<td className="line-through text-[#C00] cursor-default">
											{data.old_wp_number}
										</td>
										<td className="text-[#C00] hover:underline">
											<a
												href={`https://wa.me/${data.wp_number}`}
												target="_blank"
												rel="noopener noreferrer"
											>
												{data.wp_number}
											</a>
										</td>
									</tr>
								) : (
									<tr
										key={id}
										className="text-center border bg-[#FFF6F3] h-[5vh] font-semibold"
									>
										<td className="line-through text-[#C00]">
											{data.role === "site_admin"
												? data.old_admin_id
												: data.role === "sub_admin"
												? data.old_agent_id
												: data.role === "super_agent"
												? data.old_agent_id
												: data.role === "master_agent"
												? data.old_agent_id
												: data.old_customer_service_id}
										</td>
										<td>
											{data.role === "site_admin"
												? data.admin_id
												: data.role === "sub_admin"
												? data.agent_id
												: data.role === "super_agent"
												? data.super_agent_id
												: data.role === "master_agent"
												? data.master_agent_id
												: data.customer_service_id}
										</td>
										<td className="line-through text-[#C00] cursor-default">
											{data.old_wp_number}
										</td>
										<td className="text-[#C00] hover:underline">
											<a
												href={`https://wa.me/${data.wp_number}`}
												target="_blank"
												rel="noopener noreferrer"
											>
												{data.wp_number}
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

export default AgentNewNumber;
