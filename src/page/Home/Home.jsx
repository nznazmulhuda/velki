import { Link } from "react-router-dom";
import Spotlight from "../../Components/Home/Spotlight";
import AgentCard from "../../Components/Home/AgentCard";
import Divider from "../../Components/Shared/Divider/Divider";
import customerPic from "../../assets/agent/customerService.jpg";
import master from "../../assets/agent/master.jpg";
import superPic from "../../assets/agent/super.jpg";
import MoreNews from "../../Components/Home/MoreNews";
import NewsCard from "../../Components/Home/NewsCard";
import SubAdmin from "../../assets/agent/subAdmin.jpg";
import AgentList from "../../assets/agent/agentList.jpg";
import AgentKoto from "../../assets/agent/agentKoto.jpg";
import AddAccount from "../../assets/agent/addaccount.jpg";
import SectionTwo from "../../Components/Home/SectionTwo";
import SectionThree from "../../Components/Home/SectionThree";
import { Helmet } from "react-helmet";

function Home() {
	return (
		<>
			<Helmet>
				<title>ভেল্কি - Velki Agents</title>
			</Helmet>

			<div>
				{/* Section one */}
				<section className="flex w-full flex-col md:flex-row">
					{/* left content */}
					<div className="w-full md:w-[65%]">
						{/* left upper content */}
						<div>
							{/* Spot light */}
							<Spotlight />

							<div className="py-2 px-4">
								<button className="uppercase border p-[5px] hover:bg-[#C00] hover:text-white text-xs">
									Agent
								</button>

								<Link to={"/autoDeposit"}>
									<h1 className="text-black text-xl md:text-3xl font-bold mt-3 hover:text-[#C00] transition-all ease-in">
										ভেল্কি অটো ডিপোজিট এজেন্ট
									</h1>
								</Link>

								<div className="text-center space-y-1 py-8">
									<a
										href="https://www.youtube.com/watch?v=beMGA6aFT6k"
										target="_blank"
										className="text-[#C00] hover:underline transition-all ease-in cursor-pointer block"
									>
										ভেল্কি তে কিভাবে অটো ডিপোজিট করবেন তা
										জানতে{" "}
									</a>

									<a
										href="https://www.youtube.com/watch?v=beMGA6aFT6k"
										target="_blank"
										className="text-[#C00] hover:underline transition-all ease-in cursor-pointer blcok"
									>
										আপনি এই লিঙ্ক এ ক্লিক করে দয়া করে ভিডিও
										টি দেখে নিন
									</a>
								</div>

								<Link to={"/autoDeposit"}>
									<button className="border border-gray-300 w-full text-center py-1 text-sm text-gray-600 rounded bg-[#e5e5e546] hover:bg-[#e5e5e57c] hover:text-gray-700 transition-all ease-in">
										Read more …ভেল্কি অটো ডিপোজিট এজেন্ট
									</button>
								</Link>
							</div>
						</div>

						<Divider className="my-2" />

						{/* left down content */}
						<div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-3">
							<AgentCard
								pic={customerPic}
								path="/CustomerService"
								title="কাস্টমার সার্ভিস লিষ্ট"
								heading="VELKI CUSTOMER SERVICE LIST"
								agentPath="/CustomerService"
								readMore="কাস্টমার সার্ভিস লিষ্ট"
							/>

							<AgentCard
								pic={master}
								path="/masterAgent"
								title="মাস্টার এজেন্ট লিষ্টঃ"
								des="এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
**প্রতারনার হাত থেকে বাচতে সবার আগে"
								agentPath="/masterAgent"
								readMore="মাস্টার এজেন্ট লিষ্টঃ"
							/>

							<AgentCard
								pic={superPic}
								path="/superAgent"
								title="সুপার এজেন্ট লিষ্টঃ"
								des="এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
**প্রতারনার হাত থেকে বাচতে সবার আগে"
								agentPath="/superAgent"
								readMore="সুপার এজেন্ট লিষ্টঃ"
							/>
						</div>
					</div>

					{/* right content */}
					<div className="w-full md:w-[35%] mt-5 md:mt-0 border-l">
						{/* more news */}
						<div>
							{/* More news title */}
							<MoreNews />

							{/* Cards section */}
							<NewsCard
								pic={SubAdmin}
								time={"02 January 2024"}
								agentPath={"/subAdmin"}
								listName={"সাব এডমিন লিষ্টঃ"}
								listPath={"/subAdmin"}
							/>

							<NewsCard
								pic={AgentKoto}
								time={"31 August 2021"}
								agentPath={"/allAgentType"}
								listName={"এজেন্ট কয় প্রকারঃ"}
								listPath={"/allAgentType"}
							/>

							<NewsCard
								pic={AgentList}
								time={"31 August 2021"}
								agentPath={"/masterAgent"}
								listName={"এজেন্ট লিস্টঃ"}
								listPath={"/masterAgent"}
							/>

							<NewsCard
								pic={AgentKoto}
								time={"02 January 2024"}
								agentPath={"/siteAdmin"}
								listName={"সাইট এডমিন লিস্ট"}
								listPath={"/siteAdmin"}
							/>
						</div>

						<Divider />

						<div>
							<img
								src={AddAccount}
								className="w-full p-4"
								alt=""
							/>
						</div>
					</div>
				</section>

				<hr />

				{/* section two */}
				<SectionTwo />

				{/* section three */}
				<SectionThree />
			</div>
		</>
	);
}

export default Home;
