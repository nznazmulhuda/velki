import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Links({ link, path }) {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive
                    ? "text-white bg-[#C00] p-2"
                    : "text-black bg-transparent hover:text-black hover:bg-gray-100 px-2 py-2"
            }
        >
            <button className="w-[89%] text-xs">{link}</button>
        </NavLink>
    );
}

Links.propTypes = {
    link: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default Links;
