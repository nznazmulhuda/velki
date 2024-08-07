import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Admin from "../Components/Shared/Navbar/Admin";

function Layout() {
	const { user } = useContext(AuthContext);
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<div>
			{pathname === "/" ? (
				<Outlet />
			) : (
				<>
					<Navbar />
					<div className="w-full md:max-w-[70%] mx-auto border-[1px] border-[#E5E5E5] py-4">
						{user && <Admin />}
						<Outlet />
					</div>
					<Footer />
				</>
			)}
		</div>
	);
}

export default Layout;
