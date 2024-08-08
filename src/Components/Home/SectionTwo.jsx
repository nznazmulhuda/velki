import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MastersCard from "./MastersCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function SectionTwo() {
	const [masters, setMasters] = useState([]);
	useEffect(() => {
		axios
			.get("/randomMasterHome")
			.then((res) => setMasters(res.data))
			.catch(() => toast("Something went wrong!"));
	}, []);
	return (
		<div>
			{/* title */}
			<h1 className="text-black text-xl md:text-2xl p-4 font-bold">
				Random Master Agent
			</h1>

			<hr />

			{/* master agent list */}
			<div className="p-4 bg-[#E5E5E5] ">
				<Link>
					<button className="rounded py-1 px-2 flex items-center bg-[#C00] transition-all ease-in text-white font-semibold gap-1">
						Master agent <FaArrowRight />
					</button>
				</Link>
			</div>

			<hr />

			{/* Cards section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{masters.map((master, id) => (
					<MastersCard
						key={master._id}
						date={master.date.split(",")[0]}
						id={master.master_agent_id}
						masterPath="/"
						wpNumber={master.wp_number}
						masterSerial={id + 1}
					/>
				))}
			</div>

			<hr />
		</div>
	);
}

export default SectionTwo;
