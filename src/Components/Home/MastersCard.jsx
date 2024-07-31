import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import masterImage from "../../assets/agent/masterCard.jpg";

function MastersCard({ masterPath, masterSerial, date, id, wpNumber }) {
    return (
        <div className="border-r border-dashed border-gray-300 p-4">
            <div className="relative">
                <img src={masterImage} alt="" />
                <Link to={masterPath}>
                    <button className="border border-gray-600 rounded px-2 hover:bg-[#C00] hover:text-white transition-all ease-in absolute -translate-y-1/2 bg-gray-200">
                        Master Agent
                    </button>
                </Link>
            </div>

            <div className="mt-6">
                <Link
                    to={masterPath}
                    className="text-lg text-black hover:text-[#c00] transition-all ease-in font-bold"
                >
                    মাষ্টার এজেন্ট এর তথ্য {masterSerial}
                </Link>
                <p className="text-gray-500">Administrator {date}</p>
            </div>

            <div className="text-center mt-5 font-bold">
                <h1>মাষ্টার এজেন্ট আইডিঃ {id}</h1>
                <h1>
                    হোয়াটসঅ্যাপ নাম্বারঃ{" "}
                    <a
                        href={`https://wa.me/${wpNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C00] hover:underline transition-all ease-in ml-2"
                    >
                        {wpNumber}
                    </a>
                </h1>
            </div>
        </div>
    );
}

MastersCard.propTypes = {
    masterPath: PropTypes.string.isRequired,
    masterSerial: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    wpNumber: PropTypes.string.isRequired,
};

export default MastersCard;
