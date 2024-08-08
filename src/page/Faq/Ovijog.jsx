import { Helmet } from "react-helmet";
import pic from "../../assets/faq/ovijog.jpg";

function Ovijog() {
	return (
		<>
			<Helmet>
				<title>
					এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন? - Velki Agents
				</title>
			</Helmet>

			<div className="p-4">
				{/* Title */}
				<h1 className="text-2xl md:text-5xl font-medium">
					এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন?
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
					{/* content */}
					<div className="border-l-4 px-4">
						<p className="text-gray-950 font-semibold mb-1">
							এজেন্ট এর সাথে আপনার যে কোন ধরনের সমস্যা থাকতে পারে।
							তার কিছু উদাহরন নিম্নে দেয়া হলোঃ
						</p>

						<ul className="md:space-y-2 mb-4 md:mb-6">
							<li className="text-gray-800 font-semibold mt-2 text-[10px] md:text-[14px]">
								** এজেন্ট ঠিক মত ডিপোজিট বা উইথড্র দিচ্ছে না।
							</li>

							<li className="text-gray-800 font-semibold my-2 text-[10px] md:text-[14px]">
								** এজেন্ট এর সকাল ১০ টা থেকে রাত ১০ টা পর্যন্ত
								কাজ করার কথা। কিন্তু ঠিক মত করছে না।
							</li>

							<li className="text-gray-800 font-semibold text-[10px] md:text-[14px]">
								** এজেন্ট ডিপোজিট এর টাকা নিয়েছে কিন্তু ঠিক মত
								ডিপোজিট দিচ্ছে না।
							</li>

							<li className="text-gray-800 font-semibold text-[10px] md:text-[14px]">
								** আপনার আইডি লক হয়ে গেছে আনলক করছে না।
							</li>
						</ul>

						<p className="text-gray-950 font-semibold mt-4 text-[10px] md:text-[14px]">
							এই রকম নানা অভিযোগ আপনার থাকতে পারে এজেন্ট এর
							বিরুদ্ধে। এই অভিযোগ গুলো র সমস্যা সমাধান এর জন্য
							আপনাকে প্রথমে জানতে হবে আমাদের আপ লাইন গুলো কিভাবে
							কাজ করে এবং কার কাছে অভিযোগ করবেন।
						</p>
					</div>

					<p className="text-gray-950 font-semibold mb-1 mt-4 md:mt-8 text-[10px] md:text-[14px]">
						** মাষ্টার এজেন্ট এর বিরুদ্ধে অভিযোগ করতে হলে আপনাকে তার
						সুপার এজেন্টের কাছে অভিযোগ করতে হবে। যে কোন মাষ্টার
						এজেন্ট এর সুপার এজেন্ট কে তা বের করতে হলে আপনাকে
						এজেন্টের নামে র শেষে অভিযোগ বাটন এ ক্লিক করতে হবে।
						আপনাদের সুবিধার জন্য একটি ভিডিও দেয়া হলোঃ
						<br />
						<br />
					</p>

					<div>
						<iframe
							className="w-full h-[50vh]"
							src="https://www.youtube-nocookie.com/embed/hCe7oo7d5Qk?si=Fsfuk44apCSxw1u4"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>

					<p className="text-gray-950 font-semibold mb-1 mt-4 md:mt-8 text-[10px] md:text-[14px]">
						অভিযোগ বাটন এ ক্লিক অরলে অই মাষ্টার এজেন্ট এর সুপার
						এজেন্ট এর আইডি এবং তার নাম্বার দেখতে পারবেন। তখন আপনি অই
						সুপার এজেন্ট এর কাছে অই মাষ্টার এজেন্ট এর বিরুদ্ধে
						অভিযোগ করতে পারবেন। ঠিক সেই রকম ভাবে সুপার এজেন্ট এর
						নামে অভিযোগ করতে পারবেন। <br />
						<br />
						আপনি যদি কোন মাষ্টার এজেন্ট এর নামে অভিযোগ করতে চান –
						তাহলে তার সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে। যদি
						সুপার এজেন্ট এর নামে অভিযোগ করতে চান তাহলে এডমিন এর কাছে
						অভিযোগ করতে হবে। <br />
						<br />
						যদি আপনার অভিযোগের সমাধান সুপার এজেন্ট না দিতে পারে
						তাহলে আপনি কাস্টমার সার্ভিস এডমিন এর কাছে অভিযোগ করবেন।
						যদি তিনিও দিতে না পারে তাহলে সরাসরি এডমিন কাছে অভিযোগ
						করবেন।
					</p>
				</div>
			</div>
		</>
	);
}

export default Ovijog;
