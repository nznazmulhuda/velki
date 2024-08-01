import Lottie from "lottie-react";
import LoadingLottie from "../../../assets/lottie/loading.json";

function Loading() {
    return (
        <div className="w-24 h-24 mx-auto">
            <Lottie animationData={LoadingLottie} loop />
        </div>
    );
}

export default Loading;
