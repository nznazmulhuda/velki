import { Helmet } from "react-helmet";
import masterPic from "../../assets/agent/master.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FindUser } from "../../Admin";
import axios from "axios";
import { useState, useEffect } from "react";

function MasterAgent() {
	const [datas, setDatas] = useState([]);
	const [masters, setMasters] = useState([]);

	useEffect(() => {
		axios.get("getAllMasterAgents").then((res) => {
			setDatas(res.data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		datas.forEach((superAgent) => {
			superAgent.master_agents.forEach((masterAgent) => {
				axios
					.get(`/getMasterAgentById?id=${masterAgent}`)
					.then((res) => setMasters([...masters, res.data]))
					.catch((e) => console.log(e));
			});
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [datas]);
	console.log(datas);

	return (
		<>
			<Helmet>
				<title>মাষ্টার এজেন্ট লিষ্ট - Velki Agents</title>
			</Helmet>

			<div className="p-4">
				<FindUser />

				{/* banner */}
				<div className="my-10 relative -z-20">
					<img src={masterPic} className="w-full" alt="" />
					<button className="border border-gray-500 bg-white px-2 hover:bg-[#c00] hover:text-white transition-all ease-in absolute top-0 left-0 text-sm hover:border-transparent">
						Agent
					</button>
				</div>

				{/* content */}
				<div>
					{/* heading */}
					<h1 className="font-bold mb-2">
						এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে
						নিন!!
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

				{/* table */}

				{/* old number and new number list is here */}
				<div>
					{/* Title */}
					<h1 className="text-black text-center my-3 text-xl md:text-3xl font-bold">
						VELKI MASTER AGENT LIST
					</h1>

					{datas?.map((data) => (
						<div key={data._id}>
							{/* header for each table */}
							<h1 className="text-sm md:text-xl text-center font-semibold text-[#000000c5] my-2 mt-4">
								সাব এডমিন {data.sub_admin_id} এর অধীনে সুপার
								এজেন্ট {data.super_agent_id} এর অধীনে সর্বমোট
								মাস্টার এজেন্ট আছে {data.master_agents.length}{" "}
								জন
							</h1>

							{/* table */}
							<table className="w-full">
								<thead>
									<tr className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm">
										<th>ID NO</th>
										<th>AGENT</th>
										<th>APP</th>
										<th>PHONE NUMBER</th>
										<th>COMPLAIN</th>
									</tr>
								</thead>

								<tbody>
									{masters?.map((agent, id) =>
										id % 2 === 0 ? (
											<tr
												key={id}
												className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm"
											>
												<td>
													{agent?.master_agent_id}
												</td>
												<td>মাষ্টার</td>
												<td className="relative">
													<a
														href={`http://wa.me/${agent.wp_number}`}
														target="_blank"
														rel="noopener noreferrer"
														className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
													>
														<FaWhatsapp className="text-green-600 text-sm md:text-lg" />
													</a>
												</td>
												<td>
													<a
														href={`http://wa.me/${agent.phn_number}`}
														target="_blank"
														rel="noopener noreferrer"
														className="text-[#C00] hover:underline"
													>
														{agent.phn_number}
													</a>
												</td>
												<td>
													<a
														href={`https://wa.me/01580507352`}
														target="_blank"
														rel="noopener noreferrer"
														className="text-[#C00] hover:underline"
													>
														অভিযোগ
													</a>
												</td>
											</tr>
										) : (
											<tr
												key={id}
												className="text-center border bg-[#EFEFEF] h-[5vh] text-xs md:text-sm"
											>
												<td>{agent.master_agent_id}</td>
												<td>মাষ্টার</td>
												<td className="relative">
													<a
														href={`http://wa.me/${agent.wp_number}`}
														target="_blank"
														rel="noopener noreferrer"
														className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
													>
														<FaWhatsapp className="text-green-600 text-sm md:text-lg" />
													</a>
												</td>
												<td>
													<a
														href={`http://wa.me/${agent.phn_number}`}
														target="_blank"
														rel="noopener noreferrer"
														className="text-[#C00] hover:underline"
													>
														{agent.phn_number}
													</a>
												</td>
												<td>
													<a
														href={`https://wa.me/01580507352`}
														target="_blank"
														rel="noopener noreferrer"
														className="text-[#C00] hover:underline"
													>
														অভিযোগ
													</a>
												</td>
											</tr>
										),
									)}
								</tbody>
							</table>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default MasterAgent;
