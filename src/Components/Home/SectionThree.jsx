import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProxyPic from "../../assets/agent/proxyLink.jpg";
import createAccount from "../../assets/faq/createAccount.jpg";
import facebookLink from "../../assets/faq/facebookLink.jpg";
import law from "../../assets/faq/law.jpg";
import lenden from "../../assets/faq/lenden.jpg";
import ovijog from "../../assets/faq/ovijog.jpg";
import wantAgent from "../../assets/faq/wantAgent.jpg";
import FaqCard from "./FaqCard";

function SectionThree() {
	return (
		<div>
			{/* title */}
			<h1 className="text-black text-xl md:text-2xl p-4 font-bold">
				FAQ
			</h1>

			<hr />

			{/* Faq title */}
			<div className="p-4 bg-[#E5E5E5] ">
				<Link>
					<button className="rounded py-1 px-2 flex items-center bg-[#C00] transition-all ease-in text-white font-semibold gap-1">
						VELKI FAQ <FaArrowRight />
					</button>
				</Link>
			</div>

			<hr />

			{/* banner */}
			<div className="p-4 relative">
				<div className="h-[23vh] overflow-hidden">
					<img src={ProxyPic} className="w-full -z-[100]" alt="" />
				</div>
				<button className="border border-gray-500 bg-gray-100 px-2 hover:bg-[#C00] hover:text-white absolute -translate-y-1/2 z-30 transition-all ease-in">
					VELKI FAQ
				</button>
			</div>

			{/* proxy links */}
			<div className="p-4">
				{/* title */}
				<h1 className="text-lg text-black hover:text-[#C00] cursor-pointer font-bold transition-all ease-in">
					ভেল্কি প্রক্সি লিঙ্ক
				</h1>

				{/* links */}
				<div className="flex flex-col items-center justify-center py-5">
					<a className="text-[#C00] text-sm md:text-2xl hover:underline transition-all ease-in cursor-pointer">
						ভেল্কি সাইটের প্রক্সী লিঙ্কঃ www.wickspin24.live
					</a>

					<a className="text-[#C00] text-sm md:text-2xl hover:underline transition-all ease-in cursor-pointer">
						ভেল্কি সাইটের প্রক্সী লিঙ্কঃ www.wickspin24.live
					</a>
				</div>
			</div>

			{/* faq cards section */}
			<div className="p-4">
				<FaqCard
					pic={lenden}
					title="ভেল্কি তে কিভাবে লেনদেন করবেন?"
					faqPath="/lenden"
				/>

				<FaqCard
					pic={createAccount}
					title="কিভাবে একাউন্ট খুলবেন?"
					faqPath="/accountCreate"
				/>

				<FaqCard
					pic={law}
					title="একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?"
					faqPath="/law"
				/>

				<FaqCard
					pic={facebookLink}
					title="ভেল্কির ফেইসবুক গ্রুপ লিঙ্ক কোন টা?"
					faqPath="/facebookGroup"
				/>

				<FaqCard
					pic={wantAgent}
					title="কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?"
					faqPath="/howToBeAgent"
				/>

				<FaqCard
					pic={wantAgent}
					title="কিভাবে আমি ভেল্কি তে অনলাইন মাষ্টার এজেন্ট হতে পারি?"
					faqPath="/howToBeMasterAgent"
				/>

				<FaqCard
					pic={ovijog}
					title="এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন?"
					faqPath="/ovijog"
				/>
			</div>
		</div>
	);
}

export default SectionThree;
