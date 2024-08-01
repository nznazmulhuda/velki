import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AgentCard({ pic, path, title, heading, des, agentPath, readMore }) {
    return (
        <div>
            <div className="mb-6">
                <img src={pic} alt="" />
                <Link to={agentPath}>
                    <button className="border border-gray-400 px-1 absolute -translate-y-1/2 bg-white rounded hover:bg-[#C00] hover:text-white transition-all ease-in text-sm">
                        Agent
                    </button>
                </Link>
            </div>

            <Link to={path} className="text-lg text-gray-900 font-bold mb-4 hover:text-[#C00] transition-all ease-in">
                {title}
            </Link>

            {/* Heading */}
            {heading && (
                <h1 className="text-2xl text-black font-bold text-center">
                    {heading}
                </h1>
            )}

            {/* description */}
            {des && <p className="text-sm text-gray-800">{des}</p>}

            <Link to={path}>
                <button className="border border-gray-700 bg-gray-200 w-full py-1 rounded text-gray-600 mt-4">
                    Read More...{readMore}
                </button>
            </Link>
        </div>
    );
}

AgentCard.propTypes = {
    pic: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    heading: PropTypes.string,
    des: PropTypes.string,
    agentPath: PropTypes.string.isRequired,
    readMore: PropTypes.string.isRequired,
};

export default AgentCard;
