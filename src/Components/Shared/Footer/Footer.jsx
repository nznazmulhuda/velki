import FooterImage from "../../../assets/Footer.jpg";
import { FaCaretRight } from "react-icons/fa6";

function Footer() {
    return (
        <div className="bg-[#111] py-10 w-full md:max-w-[70%] mx-auto mt-10 rounded">
            <div className="hidden md:flex">
                <div className="relative">
                    <span className="relative inline-block">
                        <img
                            src={FooterImage}
                            alt="Footer image"
                            className="bg-[#222] p-5"
                        />
                        <FaCaretRight className="text-[#111] rotate-45 text-4xl absolute -bottom-3 -right-3" />
                    </span>
                    <div className="w-4 absolute top-1/2 -translate-y-1/2 bg-[#222] -left-4 h-full"></div>
                    <FaCaretRight className="text-[#C00] text-4xl absolute -top-6 rotate-45 -left-6" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
