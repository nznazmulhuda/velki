import { Helmet } from "react-helmet";
import pic from "../../assets/faq/wantAgent.jpg";
import { Link } from "react-router-dom";

function Master() {
	return (
		<>
			<Helmet>
				<title>
					কিভাবে আমি ভেল্কি তে অনলাইন মাষ্টার এজেন্ট হতে পারি? - Velki
					Agents
				</title>
			</Helmet>

			<div className="p-4">
				{/* Title */}
				<h1 className="text-3xl md:text-5xl font-semibold ">
					কিভাবে আমি ভেল্কি তে অনলাইন মাষ্টার এজেন্ট হতে পারি?
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
					<div className="space-y-1 border-l-4 px-4">
						<p className="text-gray-950 font-semibold">
							অনলাইন এজেন্ট হবার আগে আপনি লোকাল এজেন্ট হবার নিয়ম
							গুলো পড়ে নিনঃ
						</p>

						<Link to={"/howToBeAgent"}>
							লোকাল এজেন্ট হবার নিয়ম জানতে এই লিঙ্ক এ ক্লিক করুন –
						</Link>

						<ul className="space-y-2">
							<li className="text-gray-800 font-semibold mt-2">
								** অনলাইন এজেন্ট এর পয়েন্ট প্রাইস ফিক্সড ৯৩ টাকা
								করে।
							</li>

							<li className="text-gray-800 font-semibold my-2">
								** ২ লক্ষ টাকা জমা দিতে হবে, যা অফেরত যোগ্য।
							</li>

							<li className="text-gray-800 font-semibold">
								** যদি কোম্পানীর বিকাশ – নগদ এজেন্ট ব্যবহার করেন
								– তাহলে পয়েন্ট এর দাম হবে ৯৫ টাকা।
							</li>

							<li className="text-gray-800 font-semibold">
								** অনলাইন এজেন্ট কোন ভাবেই নিজে বেট ধরতে পারবেন
								না। যদি কোন ভাবে নিজে খেলেন, তাহলে অনতি বিলম্বে
								তাকে বাদ দেয়া হবে।
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Master;
