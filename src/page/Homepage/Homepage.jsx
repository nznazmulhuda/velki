import Home from "../../assets/Home/homepage.jpg";
import { IoHome, IoSettings } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BiLogoWhatsappSquare } from "react-icons/bi";

function Homepage() {
	return (
		<>
			<div className="bg-[#FFC812]">
				<div className="w-full mb-2 md:mb-3 lg:mb-4">
					<img src={Home} alt="" className="w-full md:h-[40vh]" />
				</div>

				<div className="bg-[#D4D4D4] border border-[#FAFAFA] flex items-center justify-center mb-2 md:mb-3 lg:mb-4">
					<Link
						to={"/home"}
						className="text-[#444444] text-[11px] md:text-xl lg:text-3xl hover:text-[#FF9900] hover:bg-[#444444] transition-all ease-in flex items-center gap-1 font-medium py-1 md:py-1 border-r-2 px-2 md:px-4 uppercase"
					>
						<IoHome />
						Home
					</Link>

					<Link
						to={"/CustomerService"}
						className="text-[#444444] text-[11px] md:text-xl lg:text-3xl hover:text-[#FF9900] hover:bg-[#444444] transition-all ease-in flex items-center gap-1 font-medium py-1 md:py-1 border-r-2 px-2 md:px-4 uppercase"
					>
						<FaQuestionCircle />
						Customer Service
					</Link>

					<Link
						to={"/agentNewNumber"}
						className="text-[#444444] text-[11px] md:text-xl lg:text-3xl hover:text-[#FF9900] hover:bg-[#444444] transition-all ease-in flex items-center gap-1 font-medium py-1 md:py-1 px-4 uppercase"
					>
						<IoSettings />
						Old/New
					</Link>
				</div>

				<div className="bg-[#D4D4D4] border border-[#FAFAFA] flex items-center justify-center mb-2">
					<Link
						to={"/siteAdmin"}
						className="text-[#444444] text-[11px] md:text-xl lg:text-3xl hover:text-[#FF9900] hover:bg-[#444444] transition-all ease-in flex items-center gap-1 font-medium py-1 uppercase md:py-1 px-4"
					>
						<IoSettings />
						admin
					</Link>

					<Link
						to={"/superAgent"}
						className="text-[#444444] text-[11px] md:text-xl lg:text-3xl hover:text-[#FF9900] hover:bg-[#444444] transition-all ease-in flex items-center gap-1 font-medium py-1 uppercase md:py-1 px-4"
					>
						<IoSettings />
						super
					</Link>

					<Link
						to={"/masterAgent"}
						className="text-[#444444] text-[11px] md:text-xl lg:text-3xl hover:text-[#FF9900] hover:bg-[#444444] transition-all ease-in flex items-center gap-1 font-medium py-1 uppercase md:py-1 px-4"
					>
						<IoSettings />
						master
					</Link>
				</div>

				{/* quice master agent number */}
				<div className="p-2 md:p-4">
					<div className="bg-[#393939] rounded">
						{/* header */}
						<div className="text-[#EFEFEF] uppercase md:text-xl lg:text-3xl flex items-center gap-2 font-bold bg-[#292929] rounded-b p-3 mb-4">
							<BsFillInfoCircleFill className="text-[#3594CA] bg-white rounded-full" />
							QUICK MASTER AGENT NUMBER:
						</div>

						{/* down content */}
						<div className="flex items-center justify-center w-[80%] lg:w-[20%] mx-auto">
							<div className="border border-[#FF9933] mb-4 w-full">
								{/* content */}
								<div className="bg-[#FBFEDF] p-2">
									<div className="bg-[#CCCCCC]">
										<div className="flex items-center justify-between px-2 font-semibold md:text-xl lg:text-3xl md:mb-2 lg:mb-4">
											<h1>Agent id:</h1>
											<h1 className="text-[#FF6600]">
												2422
											</h1>
										</div>

										<div className="flex items-center justify-between mt-1 px-2 font-semibold md:text-xl lg:text-3xl ">
											<h1>
												<BiLogoWhatsappSquare className="text-green-500 text-xl md:text-2xl lg:text-3xl" />
											</h1>
											<h1 className="text-[#FF6600]">
												123456789
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* কিভাবে একাউন্ট খুলবেনঃ */}
				<div className="p-2 md:p-4">
					<div className="bg-[#393939] rounded">
						{/* header */}
						<div className="text-[#EFEFEF] uppercase md:text-xl lg:text-3xl flex items-center gap-2 font-bold bg-[#292929] rounded-b p-3">
							<BsFillInfoCircleFill className="text-[#3594CA] bg-white rounded-full" />
							কিভাবে একাউন্ট খুলবেনঃ
						</div>

						{/* down content */}
						<div className="flex items-center justify-center mx-auto p-2 md:p-4">
							<div className="border border-[#FF9933] mb- w-full">
								{/* content */}
								<div className="bg-[#FBFEDF] p-2 md:p-4">
									<div className="bg-[#FBFEDF] p-2">
										<p className="text-lg md:text-xl text-center">
											ভেল্কি তে একাউন্ট করতে হলে আপনার
											এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে।
											এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং
											উইথড্র করতে হবে। আপনি যে এজেন্ট এর
											কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব
											সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট
											কে টাকা দিবেন এবং কিভাবে তার সাথে
											লেনদেন করবেন তার বুঝতে হলে আপনার
											নিম্বের তথ্য গুলো পড়া জরুরী।
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* এজেন্ট লিস্টঃ */}
				<div className="p-2 md:p-4">
					<div className="bg-[#393939] rounded">
						{/* header */}
						<div className="text-[#EFEFEF] uppercase md:text-xl lg:text-3xl flex items-center gap-2 font-bold bg-[#292929] rounded-b p-3">
							<BsFillInfoCircleFill className="text-[#3594CA] bg-white rounded-full" />
							এজেন্ট লিস্টঃ
						</div>

						{/* down content */}
						<div className="flex items-center justify-center mx-auto p-2 md:p-4">
							<div className="border border-[#FF9933] mb- w-full">
								{/* content */}
								<div className="bg-[#FBFEDF] p-2 md:p-4">
									<div className="bg-[#FBFEDF] p-2">
										<p className="text-lg md:text-xl text-center">
											একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট
											লিস্ট এ ক্লিক করুন। এজেন্ট লিষ্ট এর
											এজেন্ট দের সাথে ইউজার দের শুধু মাত্র
											হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে
											হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে
											যোগাযোগ করলে বা লেনদেন করলে তা
											গ্রহনযোগ্য হবে না। হোয়াটসাপ এ
											যোগাযোগ করতে হলে এজেন্ট লিস্টে
											হোয়াটসাপ আইকন উপরে ক্লিক করুন অথবা
											ফোন নাম্বার টি মোবাইলে সেভ করে তাকে
											হোয়াটসাপ এ মসেজ পাঠাতে পারবেন।
											হোয়াটসাপ এপ টি আপনার মোবাইলে আগে
											থেকেই থাকতে হবে। না থাকলে গুগুল প্লে
											থেকে ইন্সটল করে নিন। <br />
											<a
												href="https://www.youtube.com/watch?v=qw1CVt43VKw"
												className="text-blue-700 underline"
											>
												অনলাইন মাষ্টার এজেন্ট লিস্টঃ
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* কিভাবে একাউন্ট খুলবেনঃ */}
				<div className="p-2 md:p-4">
					<div className="bg-[#393939] rounded">
						{/* header */}
						<div className="text-[#EFEFEF] uppercase md:text-xl lg:text-3xl flex items-center gap-2 font-bold bg-[#292929] rounded-b p-3">
							<BsFillInfoCircleFill className="text-[#3594CA] bg-white rounded-full" />
							কিভাবে একাউন্ট খুলবেনঃ
						</div>

						{/* down content */}
						<div className="flex items-center justify-center mx-auto p-2 md:p-4">
							<div className="border border-[#FF9933] mb- w-full">
								{/* content */}
								<div className="bg-[#FBFEDF] p-2 md:p-4">
									<div className="bg-[#FBFEDF] p-2">
										<p className="text-lg md:text-xl text-center">
											<a
												href="#"
												className="text-blue-700 underline"
											>
												অনলাইন সুপার এজেন্ট লিস্টঃ
											</a>{" "}
											সুপার এজেন্ট রা, ইউজার একাউন্ট এবং
											মাষ্টার এজেন্ট একাউন্ট খুলে দিতে
											পারেন। কোন সুপার এজেন্ট এর নামে
											অভিযোগ থাকলে - সরাসরি এডমিন কে
											জানাতে হবে। উপরে মেনু তে এডমিন লিষ্ট
											দেয়া আছে। <br />
											<a
												href="#"
												className="text-blue-700 underline"
											>
												অনলাইন মাষ্টার এজেন্ট লিস্টঃ
											</a>{" "}
											অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার
											একাউন্ট একাউন্ট খুলে দিতে পারেন। কোন
											মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে
											- সরাসরি সুপার এজেন্ট এর কাছে অভিযোগ
											করতে হবে। <br />
											<a
												href="#"
												className="text-blue-700 underline"
											>
												বিস্তারিত জানতে এই লিঙ্ক এ ক্লিক
												করুন।
											</a>{" "}
											<br />
											লোকাল মাষ্টার এজেন্ট লিস্টঃ লোকাল
											মাষ্টার এজেন্ট রা, শুধু ইউজার
											একাউন্ট একাউন্ট খুলে দিতে পারেন।
											কিন্তু তাদের সাথে লেনদেন প্রতিটি
											ইউজার কে নিজ দায়িত্বে লেনদেন করতে
											হবে। তাদের নামে কোন অভিযোগ কারো কাছে
											করা যাবে না। <br />
											<br />
											লোকাল মাষ্টার এজেন্টঃ এই সব এজেন্ট
											সাধারনত – নিজের এলাকায় বা পরিচিত
											দের সাথে লেনদেন করে । যারা আগে বাজি
											ধরিয়ে দিত, তাদের কেই মুলত লোকাল
											এজেন্ট দেয়া হয়েছে। লোকাল এজেন্ট রা
											অনলাইনে আসে না এবং তারা তাদের পরিচয়
											গোপন রাখতে চায়। লোকাল এজেন্ট দের
											সাথে অনলাইনে কোন ভাবেই লেনদেন করবেন
											না, আর করে থাকলে তার দায়ভার পুরোটাই
											আপনার।
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Homepage;
