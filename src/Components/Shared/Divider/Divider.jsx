import PropTypes from "prop-types";

function Divider({ className }) {
    return (
        <div className={className}>
            <hr />
            <hr />
        </div>
    );
}

Divider.propTypes = {
    className: PropTypes.string,
};

export default Divider;
