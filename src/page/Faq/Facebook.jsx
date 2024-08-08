import { Helmet } from "react-helmet";
import pic from "../../assets/faq/facebookLink.jpg";

function Facebook() {
	return (
		<>
			<Helmet>
				<title>
					ভেল্কির ফেইসবুক গ্রুপ লিঙ্ক কোন টা? - Velki Agents
				</title>
			</Helmet>

			<div className="p-4">
				{/* Title */}
				<h1 className="text-3xl md:text-5xl font-semibold ">
					ভেল্কির ফেইসবুক গ্রুপ লিঙ্ক কোন টা?
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
						<p className="text-gray-950 font-semibold text-lg mb-3">
							ফেসবুক লিঙ্ক
						</p>

						<ul className="space-y-2 md:space-y-3">
							<li className="text-gray-800 font-semibold mt-2">
								ভেল্কির ১ টাই অফিসিয়াল ফেসবুক পেইজ আছে যেটা তে
								আপনি লাইক দিয়ে রাখতে পারেনঃ
							</li>

							<li className="text-gray-800 font-semibold my-2">
								পেইজ লিঙ্ক হলঃ
								<a
									href="https://www.facebook.com/velkisupport"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#C00] hover:underline"
								>
									https://www.facebook.com/velkisupport
								</a>
							</li>

							<li className="text-gray-800 font-semibold">
								ভেল্কির ১ টাই অফিসিয়াল ফেসবুক গ্রুপ আছে যে টা তে
								আপনি জয়েন করতে পারেনঃ
							</li>

							<li className="text-gray-800 font-semibold my-2">
								ফেইসবুক গ্রুপ হলঃ
								<a
									href="https://www.facebook.com/groups/velki.live"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#C00] hover:underline"
								>
									https://www.facebook.com/groups/velki.live
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Facebook;
