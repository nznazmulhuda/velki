import { FaWhatsapp } from "react-icons/fa";
import CustomerPic from "../../assets/agent/customerService.jpg";

function CustomerService() {
    return (
        <div className="p-4">
            {/* banner */}
            <div className="my-10 relative -z-20">
                <img src={CustomerPic} className="w-full" alt="" />
                <button className="border border-gray-500 bg-white px-2 hover:bg-[#c00] hover:text-white transition-all ease-in absolute top-0 left-0 text-sm hover:border-transparent">
                    Agent
                </button>
            </div>

            {/* Customers details is here */}
            <div>
                {/* Title */}
                <h1 className="text-black text-center my-3 text-xl md:text-3xl font-bold">
                    VELKI CUSTOMER SERVICE LIST
                </h1>

                {/* header for each table */}
                <h1 className="text-sm md:text-xl text-center font-semibold text-[#000000c5] my-2 mt-4">
                    ভেল্কিতে আপনি অটো ডিপোজিট এবং অটো উইথড্র আইডি খুলে নিতে
                    পারবেন। বিস্তারিত জানতে কাস্টমার সার্ভিসে যোগাযোগ করুন
                </h1>

                {/* table */}
                <table className="w-full">
                    <thead>
                        <tr className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm">
                            <th>ID NO</th>
                            <th>TYPE</th>
                            <th>WHTS</th>
                            <th>PHONE NUMBER</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="text-center border bg-[#EFEFEF] h-[5vh] text-xs md:text-sm">
                            <td>2025</td>
                            <td> কাস্টমার সার্ভিস (ম্যানেজার)</td>
                            <td className="flex items-center justify-center mt-1">
                                <a
                                    href="http://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp className="text-green-600 text-sm md:text-lg" />
                                </a>
                            </td>
                            <td>
                                <a
                                    href="http://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C00] hover:underline"
                                >
                                    +85581749353
                                </a>
                            </td>
                        </tr>

                        <tr className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm">
                            <td>2025</td>
                            <td>সুপার</td>
                            <td className="flex items-center justify-center mt-1">
                                <a
                                    href="http://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp className="text-green-600 text-sm md:text-lg" />
                                </a>
                            </td>
                            <td>
                                <a
                                    href="http://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C00] hover:underline"
                                >
                                    +85581749353
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CustomerService;
