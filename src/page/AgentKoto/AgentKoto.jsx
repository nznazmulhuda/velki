import { Helmet } from "react-helmet";
import pic from "../../assets/agent/agentKoto.jpg";

function AgentKoto() {
	return (
		<>
			<Helmet>
				<title>এজেন্ট কয় প্রকার? - Velki Agents</title>
			</Helmet>

			<div className="p-4">
				{/* Title */}
				<h1 className="text-3xl md:text-5xl font-semibold ">
					এজেন্ট কয় প্রকারঃ
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
						<p className="text-gray-950">
							<b>অনলাইন সুপার এজেন্টঃ: </b>সুপার এজেন্ট রা, ইউজার
							একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে দিতে পারেন।
							কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে - অভিযোগ বাটন
							এ ক্লিক করে সরাসরি সাব এডমিন কে জানাতে হবে। <br />
							<br /> <b>অনলাইন মাষ্টার এজেন্টঃ </b>অনলাইন মাষ্টার
							এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে
							পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে -
							অভিযোগ বাটন এ ক্লিক করে সরাসরি সুপার এজেন্ট এর কাছে
							অভিযোগ করতে হবে। বিস্তারিত জানতে এই লিঙ্ক এ ক্লিক
							করুন। <br />
							<br />
							<b>লোকাল মাষ্টার এজেন্টঃ </b>এই সব এজেন্ট সাধারনত –
							নিজের এলাকায় বা পরিচিত দের সাথে লেনদেন করে । যারা
							আগে বাজি ধরিয়ে দিত, তাদের কেই মুলত লোকাল এজেন্ট
							দেয়া হয়েছে। লোকাল এজেন্ট রা অনলাইনে আসে না এবং
							তারা তাদের পরিচয় গোপন রাখতে চায়। লোকাল এজেন্ট দের
							সাথে অনলাইনে কোন ভাবেই লেনদেন করবেন না, আর করে থাকলে
							তার দায়ভার পুরোটাই আপনার।
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default AgentKoto;
