import { Helmet } from "react-helmet";

function AutoDeposit() {
    return (
        <>
            <Helmet>
                <title>ভেল্কি অটো ডিপোজিট এজেন্ট - Velki Agents</title>
            </Helmet>

            <div className="p-4">
                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-medium ">
                    ভেল্কি অটো ডিপোজিট এজেন্ট
                </h1>

                <button className="border border-gray-500 hover:bg-[#c00] hover:text-white px-2 text-sm transition-all ease-in hover:border-transparent mt-8">
                    AGENT
                </button>

                {/* links */}
                <div className="border-l-4 py-2 mt-4">
                    <div className="flex items-center justify-center flex-col gap-2 mt-4">
                        <a
                            href="https://www.youtube.com/watch?v=beMGA6aFT6k"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c00] text-sm md:text-2xl hover:underline transition-all ease-in"
                        >
                            ভেল্কি তে কিভাবে অটো ডিপোজিট করবেন তা জানতে
                        </a>

                        <a
                            href="https://www.youtube.com/watch?v=beMGA6aFT6k"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c00] text-sm md:text-2xl hover:underline transition-all ease-in"
                        >
                            আপনি এই লিঙ্ক এ ক্লিক করে দয়া করে ভিডিও টি দেখে নিন
                        </a>
                    </div>

                    <div className="text-center mt-4 text-xs md:text-sm space-y-2">
                        <p>
                            আপনি এখন থেকে সরাসরি ভেল্কি সাইটে এজেন্ট ছাড়াই
                            একাউন্ট খুলতে পারবেন।
                        </p>
                        <p>
                            এই খানে সব কিছু অটোমেটিক - অপেক্ষার কোন বালাই নাই।
                        </p>
                        <p>দিন রাত ২৪ ঘন্টা ডিপোজিট এবং উইথড্র করতে পারবেন।</p>
                        <p>
                            প্রতিবার ডিপোজিট এবং উইথড্র লিমিট হচ্ছে ৫০০ টাকা
                            থেকে ২৫০০০ টাকা পর্যন্ত।
                        </p>
                        <p>
                            দিনে যত বার মনে চায় অতবার উইথড্র এবং ডিপোজিট করতে
                            পারবেন।
                        </p>
                        <p>
                            ভিডিও তে দেখলে ১ মিনিটেই শিখতে পারবেন কিভাবে ডিপোজিট
                            করতে হবে এবং উইথড্র করতে হবে।
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center flex-col mt-4 space-y-2">
                    <h1 className="text-xl md:text-2xl text-center">
                        অটো ডিপোজিট আইডি খোলার জন্য এই হোয়াটসাপ নাম্বার এ মেসেজ
                        দিতে হবেঃ
                    </h1>

                    <a
                        href="/"
                        target="blank"
                        rel="noopener noreferrer"
                        className="text-[#c00] text-sm md:text-2xl hover:underline transition-all ease-in"
                    >
                        +60178819873
                    </a>
                </div>
            </div>
        </>
    );
}

export default AutoDeposit;
