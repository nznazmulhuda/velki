import Lottie from "lottie-react";
import ErrorLottie from "../../../assets/lottie/404Page.json";

function Error() {
    return (
        <>
            <div className="w-full h-[60vh] mt-10">
                <Lottie
                    animationData={ErrorLottie}
                    loop
                    className="w-full h-full"
                />
            </div>
        </>
    );
}

export default Error;
