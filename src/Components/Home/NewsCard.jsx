import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function NewsCard({ pic, time, listName, listPath, agentPath }) {
    return (
        <div className="flex items-center p-4 gap-3">
            <div>
                <img src={pic} className="w-28" alt="" />
            </div>

            <div>
                <div className="flex items-center gap-3">
                    <button className="border px-2 text-sm transition-all ease-in hover:bg-[#C00] hover:text-white">
                        <Link to={agentPath}>Agent</Link>
                    </button>
                    <p className="text-sm text-gray-400">{time}</p>
                </div>

                <Link
                    to={listPath}
                    className="mt-2 hover:text-[#c00] transition-all text-sm font-semibold cursor-pointer"
                >
                    {listName}
                </Link>
            </div>
        </div>
    );
}

NewsCard.propTypes = {
    pic: PropTypes.string,
    time: PropTypes.string,
    listName: PropTypes.string,
    listPath: PropTypes.string,
    agentPath: PropTypes.string,
};

export default NewsCard;
