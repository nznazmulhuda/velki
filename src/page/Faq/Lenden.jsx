import { Helmet } from "react-helmet";
import pic from "../../assets/faq/lenden.jpg";

function Lenden() {
	return (
		<>
			<Helmet>
				<title>ভেল্কি তে কিভাবে লেনদেন করবেন? - Velki Agents</title>
			</Helmet>

			<div className="p-4">
				{/* Title */}
				<h1 className="text-2xl md:text-5xl font-medium ">
					ভেল্কি তে কিভাবে লেনদেন করবেন?
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
						বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিং এ কিভাবে
						লেনদেন করবেন?
					</h1>

					{/* content */}
					<div className="space-y-1 border-l-4 px-4">
						<p className="text-gray-800 font-medium">
							ইউজার যখন এজেন্ট কে টাকা পাঠাবে এবং এজেন্ট যখন ইউজার
							কে টাকা পাঠাবেঃ-
						</p>

						<ul className="list-disc pl-4 md:px-8">
							<li className="text-gray-800 font-medium">
								ইউজার যদি এজেন্টর বিকাশ পার্সোনাল এ টাকা পাঠায়
								১০ পয়েন্ট এর জন্য ক্যাশ ইন বা সেন্ড ম্যানি করবে
								১০২০ টাকা।
							</li>

							<li className="text-gray-800 font-medium">
								ইউজার যদি এজেন্টের বিকাশ এজেন্ট এ টাকা পাঠায় ১০
								পয়েন্টের জন্য ক্যাশ আউট করবে ১০০০ টাকা।
							</li>

							<li className="text-gray-800 font-medium">
								এজেন্ট যদি ইউজার এর বিকাশ পার্সোনাল এ টাকা পাঠায়
								১০ পয়েন্টের জন্য এজেন্ট ক্যাশ ইন করবে ১০০০ টাকা।
							</li>

							<li className="text-gray-800 font-medium">
								এজেন্ট যদি ইউজার এর বিকাশ এজেন্ট এ টাকা পাঠায় ১০
								পয়েন্ট এর জন্য ক্যাশ আউট করবে ৯৮০ টাকা।
							</li>
						</ul>
					</div>

					{/* heading */}
					<h1 className="font-bold mb-2 mt-8">
						বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিংএর সময়
						সীমাঃ-
					</h1>

					{/* content */}
					<div className="space-y-1 px-4">
						<ul className="list-disc pl-4 md:px-6">
							<li className="text-gray-800 font-medium">
								মোবাইল ব্যাংকিং এর সময় সকাল ৯ টা ৪৫ থেকে দুপুর ১
								টা পর্যন্ত, তার পরে দুপুর ৩ টা থেকে রাত ৯ টা ৪৫
								পর্যন্ত।
							</li>

							<li className="text-gray-800 font-medium">
								এই সময়ের বাইরে কোন ভাবেই কোন লেনদেন করা যাবে না।
								রাত ৯ টা ৪৫ এর পরে কেউ যদি টাকা পাঠায় তার দায়
								ভার কোম্পানী নিবে না।
							</li>

							<li className="text-gray-800 font-medium">
								ডিপোজিট এবং উইথড্র তে ১৫ মিনিট থেকে ১ ঘন্টা সময়
								পর্যন্ত লাগতে পারে।
							</li>

							<li className="text-gray-800 font-medium">
								ইউজার দিনে ১ বার ডিপোজিট এবং ১ বার উইথড্র করতে
								পারবেন।
							</li>

							<li className="text-gray-800 font-medium">
								প্রতিবার টাকা পাঠানোর আগে – এজেন্ট কাছ থেকে
								বিকাশ নগদ রকেট নাম্বার চেয়ে নিবেন। এটা
								বাধ্যতামুলক।
							</li>
						</ul>
					</div>

					{/* heading */}
					<h1 className="font-bold mb-2 mt-8">
						ব্যাংকে কিভাবে এ কিভাবে লেনদেন করবেন?
					</h1>

					{/* content */}
					<div className="space-y-1 px-4">
						<ul className="list-disc pl-4 md:px-6">
							<li className="text-gray-800 font-medium">
								১ লাখ টাকা নিচে কোন এমাউন্ট ব্যাংকে ডিপোজিট বা
								উইথড্র করা যাবে না।
							</li>

							<li className="text-gray-800 font-medium">
								কোন ইউজার ব্যাংকে ডিপোজিট করলে আমাদের ডিপোজিট
								ভেরিফাই করতে ২ দিন পর্যন্ত সময় লাগতে পারে।
							</li>

							<li className="text-gray-800 font-medium">
								কোন ইউজার ব্যাংকে উইথড্র চাইলে – পরের দিন উইথড্র
								পাবেন এবং প্রতিলাখে ১০০০ টাকা উইথড্র চার্জ দিতে
								হবে।
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Lenden;
