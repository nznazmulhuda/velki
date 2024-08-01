import Lottie from "lottie-react";
import PropTypes from "prop-types";
import PageWorking from "../../../assets/lottie/pageUnderCons.json";
import { Helmet } from "react-helmet";

function PageStillWorking({ pageName }) {
    return (
        <>
            <Helmet>
                <title>{pageName} - Under Construction!</title>
            </Helmet>

            <div className="h-[50vh] w-full">
                <Lottie
                    animationData={PageWorking}
                    loop
                    className="w-full h-full"
                />
            </div>
        </>
    );
}

PageStillWorking.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default PageStillWorking;
