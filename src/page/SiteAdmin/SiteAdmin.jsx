import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

function SiteAdmin() {
	const [admins, setAdmins] = useState([]);
	useEffect(() => {
		axios
			.get("/allAdmins")
			.then((res) => setAdmins(res.data))
			.catch(() => toast.error("Somthing went wrong!"));
	}, []);

	return (
		<>
			<Helmet>
				<title>সাইট এডমিন লিষ্ট - Velki Agents</title>
			</Helmet>

			<div className="p-4">
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
						VELKI SITE ADMIN LIST
					</h1>

					{/* table */}
					<table className="w-full">
						<thead>
							<tr className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm">
								<th>ID NO</th>
								<th>Name</th>
								<th>TELG</th>
								<th>WHTS</th>
								<th>PHONE NUMBER</th>
							</tr>
						</thead>

						<tbody>
							{admins?.map((admin, id) =>
								id % 2 === 0 ? (
									<tr
										key={id}
										className="text-center border bg-[#EFEFEF] h-[5vh] font-semibold"
									>
										<td>{admin?.admin_id}</td>

										<td>{admin?.username}</td>

										<td>
											<a
												href={`https://t.me/${admin?.tele_number}`}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center justify-center w-full"
											>
												<FaTelegram className="text-blue-500 text-xl block" />
											</a>
										</td>

										<td>
											<a
												href={`https://wa.me/${admin?.wp_number}`}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center justify-center w-full"
											>
												<FaWhatsapp className="text-green-600 text-[22px] text-center" />
											</a>
										</td>

										<td>
											<a
												href={`https://wa.me/${admin?.phn_number}`}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#C00] hover:underline"
											>
												{admin?.phn_number}
											</a>
										</td>
									</tr>
								) : (
									<tr
										key={id}
										className="text-center border bg-[#FFF6F3] h-[5vh] font-semibold"
									>
										<td>{admin?.admin_id}</td>

										<td>{admin?.username}</td>

										<td>
											<a
												href={`https://t.me/${admin?.tele_number}`}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center justify-center w-full"
											>
												<FaTelegram className="text-blue-500 text-xl block" />
											</a>
										</td>

										<td>
											<a
												href={`https://wa.me/${admin?.wp_number}`}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center justify-center w-full"
											>
												<FaWhatsapp className="text-green-600 text-[22px] text-center" />
											</a>
										</td>

										<td>
											<a
												href={`https://wa.me/${admin?.phn_number}`}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#C00] hover:underline"
											>
												{admin.phn_number}
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

export default SiteAdmin;
