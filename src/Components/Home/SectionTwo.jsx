import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MastersCard from "./MastersCard";

function SectionTwo() {
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
                <MastersCard
                    date="02 july 2024"
                    id="2025"
                    masterPath="/"
                    wpNumber="+8801580507352"
                    masterSerial="1"
                />

                <MastersCard
                    date="31 Augest 2021"
                    id="2028"
                    masterPath="/"
                    wpNumber="+8801580507352"
                    masterSerial="3"
                />

                <MastersCard
                    date="02 july 2024"
                    id="2044"
                    masterPath="/"
                    wpNumber="+8801580507352"
                    masterSerial="3"
                />

                <MastersCard
                    date="02 july 2024"
                    id="2555"
                    masterPath="/"
                    wpNumber="+8801580507352"
                    masterSerial="4"
                />
            </div>

            <hr />

            
        </div>
    );
}

export default SectionTwo;
