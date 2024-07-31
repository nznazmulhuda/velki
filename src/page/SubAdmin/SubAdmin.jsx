import { FaWhatsapp } from "react-icons/fa";
import subAdmin from "../../assets/agent/subAdmin.jpg";

function SubAdmin() {
    const handleSearch = (e) => {
        e.preventDefault();
        const number = e.target.number.value;
        const agentType = e.target.agentType.value;
        console.log({ number, agentType });
        // fetch data from API or database
        // and display results
        e.target.reset();
    };
    return (
        <div className="p-4">
            {/* title */}
            <h1 className="text-xl md:text-2xl text-center">
                এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
            </h1>

            {/* container */}
            <div className="rounded-lg shadow-xl md:w-[35%] mx-auto mt-4 p-4">
                <form
                    onSubmit={handleSearch}
                    className="flex flex-col items-start"
                >
                    <div className="flex flex-col w-full">
                        <label
                            htmlFor="agentType"
                            className="text-gray-700 font-semibold mb-1 text-xs md:text-sm"
                        >
                            Agent Type:
                        </label>
                        <select
                            name="agentType"
                            required
                            className="w-full outline-none bg-transparent border py-1 px-3"
                        >
                            <option value="ma">মাষ্টার এজেন্ট</option>
                            <option value="sa">সুপার এজেন্ট</option>
                            <option value="sad">সাব এডমিন</option>
                        </select>
                    </div>

                    <div className="w-full mt-4">
                        <label
                            htmlFor="number"
                            className="text-gray-700 font-semibold mb-1 text-xs md:text-sm"
                        >
                            Phone Number:
                        </label>
                        <input
                            type="number"
                            name="number"
                            placeholder="Enter number"
                            required
                            className="w-full outline-none border border-[#E5E5E5] rounded py-1 px-3"
                        />
                    </div>

                    <button
                        type="submit"
                        className="py-2 px-4 mt-2 bg-[#56af5a] text-white font-bold rounded hover:bg-[#45A049] transition-all ease-in"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <hr className="my-6" />

            {/* banner */}
            <div className="my-10 relative -z-20">
                <img src={subAdmin} className="w-full" alt="" />
                <button className="border border-gray-500 bg-white px-2 hover:bg-[#c00] hover:text-white transition-all ease-in absolute top-0 left-0 text-sm hover:border-transparent">
                    Agent
                </button>
            </div>

            {/* content */}
            <div>
                {/* heading */}
                <h1 className="font-bold mb-2">
                    এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
                </h1>

                {/* content */}
                <div className="space-y-1 border-l-4 px-4">
                    <p className="text-gray-800 font-medium">
                        **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন ভেল্কি
                        সাইটঃ VELKI.COM
                    </p>

                    <p className="text-gray-800 font-medium">
                        **হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা
                        লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না।
                    </p>

                    <p className="text-gray-800 font-medium">
                        **এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে - আপনি একাউন্টে
                        ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন
                        ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি
                        কাউকেই দিবেন না - সে যেই হউক না কেন।
                    </p>

                    <p className="text-gray-800 font-medium">
                        **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি
                        এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার ভেল্কি নিবে না।
                    </p>

                    <p className="text-gray-800 font-medium">
                        **প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট
                        এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক
                        এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী।
                    </p>

                    <p className="text-gray-800 font-medium">
                        **এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের
                        শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসাপ নাম্বার আসবে -
                        তাকে অভিযোগ করতে হবে।
                    </p>
                </div>
            </div>

            {/* table */}

            {/* old number and new number list is here */}
            <div>
                {/* Title */}
                <h1 className="text-black text-center my-3 text-xl md:text-3xl font-bold">
                    VELKI SUPER AGENT LIST
                </h1>

                {/* header for each table */}
                <h1 className="text-sm md:text-xl text-center font-semibold text-[#000000c5] my-2 mt-4">
                    সাব এডমিন 4 এর অধীনে সর্বমোট সুপার এজেন্ট আছে 9 জন
                </h1>

                {/* table */}
                <table className="w-full">
                    <thead>
                        <tr className="text-center border bg-[#FFF6F3] h-[5vh] text-xs md:text-sm">
                            <th>ID NO</th>
                            <th>AGENT</th>
                            <th>APP</th>
                            <th>PHONE NUMBER</th>
                            <th>COMPLAIN</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="text-center border bg-[#EFEFEF] h-[5vh] text-xs md:text-sm">
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
                            <td>
                                <a
                                    href="http://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C00] hover:underline"
                                >
                                    অভিযোগ
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
                            <td>
                                <a
                                    href="http://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C00] hover:underline"
                                >
                                    অভিযোগ
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SubAdmin;
