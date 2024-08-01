import { Helmet } from "react-helmet";

function AgentVerify() {
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
        <>
            <Helmet>
                <title>এজেন্ট কে ভেরিফাই করুন - Velki Agents</title>
            </Helmet>

            <div>
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
            </div>
        </>
    );
}

export default AgentVerify;
