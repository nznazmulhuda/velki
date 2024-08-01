import { Helmet } from "react-helmet";

function PhoneNumSearch() {
    const handleSearch = (e) => {
        e.preventDefault();
        const number = e.target.number.value;
        console.log("Searching for number:", number);
        // fetch data from API or database
        // and display results
        e.target.reset();
    };

    return (
        <>
            <Helmet>
                <title>ফোন নাম্বার সার্চ করুন - Velki Agents</title>
            </Helmet>

            <div className="p-4">
                {/* title */}
                <h1 className="text-xl md:text-2xl text-center">
                    ফোন নাম্বার দিয়ে সার্চ করুনঃ
                </h1>

                {/* container */}
                <div className="rounded-lg shadow-xl md:w-[35%] mx-auto mt-4 p-4">
                    <form
                        onSubmit={handleSearch}
                        className="flex flex-col items-start"
                    >
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
                            className="w-full outline-none border border-[#E5E5E5] rounded py-1 px-3"
                        />
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

export default PhoneNumSearch;
