import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FaqCard({ pic, faqPath, title }) {
    return (
        <>
            <div className="flex items-center border-t border-dashed p-2">
                <div className="h-[8vh] overflow-hidden">
                    <img src={pic} className="w-16 md:w-44" alt="" />
                </div>

                <div className="flex flex-col ml-2">
                    <Link to={faqPath}>
                        <button className="border border-gray-400 text-gray-400 bg-white hover:bg-[#C00] hover:text-white transition-all ease-in text-sm px-2 font-semibold hover:border-transparent mb-2">
                            VELKI FAQ
                        </button>
                    </Link>

                    <Link
                        to={faqPath}
                        className="font-medium hover:text-[#C00] text-xs md:text-sm transition-all"
                    >
                        {title}
                    </Link>
                </div>
            </div>
        </>
    );
}

FaqCard.propTypes = {
    pic: PropTypes.string.isRequired,
    faqPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default FaqCard;
