import Logo from "../../../assets/Home/HomeLogo.jpg";

function MidNavbar() {
    const time = new Date();
    const date = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return (
        <div className="max-w-[70%] mx-auto py-6">
            <div className="flex items-center justify-between">
                <div>
                    <img src={Logo} alt="Logo - Velki" />
                </div>

                <div className="bg-[#E5E5E5] flex flex-col items-center justify-center p-6 rounded">
                    <h1 className="text-3xl font-bold">{time.getDate()}</h1>
                    <h3 className="text-[#333] font-light text-sm uppercase">
                        {date[time.getDay()]}, {month[time.getMonth()]}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default MidNavbar;
