import { Helmet } from "react-helmet";
import ProxyPic from "../../assets/agent/addaccount.jpg";

function ProxyLink() {
    return (
        <>
            <Helmet>
                <title>ভেল্কি প্রক্সী লিঙ্ক - Velki Agents</title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {/* left content */}
                <div className="md:col-span-3 p-4">
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-medium ">
                        ভেল্কি প্রক্সি লিঙ্ক
                    </h1>

                    <button className="border border-gray-500 hover:bg-[#c00] hover:text-white px-2 text-sm transition-all ease-in hover:border-transparent mt-8">
                        Velki FAQ
                    </button>

                    {/* Proxy links */}
                    <div className="flex items-center justify-end flex-col mt-6">
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c00] text-sm md:text-2xl hover:underline transition-all ease-in"
                        >
                            ভেল্কি সাইটের প্রক্সী লিঙ্কঃ www.wickspin24.live
                        </a>

                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c00] text-sm md:text-2xl hover:underline transition-all ease-in"
                        >
                            ভেল্কি সাইটের প্রক্সী লিঙ্কঃ www.adhmor365.live
                        </a>
                    </div>

                    <hr className="my-6" />

                    {/* download android apps */}
                    <div className="flex items-center justify-center flex-col">
                        <h1 className="text-black font-bold text-lg md:text-2xl">
                            ANROID APP LINKS: এন্ড্রয়েড এপ ডাউনলোড করতে এই লিঙ্ক
                            এ ক্লিক করুন
                        </h1>

                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c00] text-sm md:text-2xl hover:underline transition-all ease-in font-bold mt-2"
                        >
                            ডাউনলোড ভেল্কি সাইটের এন্ড্রয়েড এপ
                        </a>
                    </div>
                </div>

                {/* Right content */}
                <div className="md:col-span-1">
                    <img
                        src={ProxyPic}
                        className="bg-[#F8F8F8] p-6 border border-t-0 border-r-0 border-[#E5E5E5] -mt-4"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default ProxyLink;
