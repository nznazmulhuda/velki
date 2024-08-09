import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

function Authentication() {
	const { login, user } = useContext(AuthContext);
	const navigate = useNavigate();
	const { state } = useLocation();

	// handle Login
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const emailOrPassword = form.emailOrUsername.value;
		const password = form.password.value;

		// api call
		login(emailOrPassword, password);
		form.reset();
	};

	useEffect(() => {
		if (user) {
			state ? navigate(state) : navigate("/dashboard");
			return;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<div className="p-4">
			<h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-4 font-bold">
				Editor{" "}
				<span className="text-[#C00] hover:underline transition-all ease-in cursor-pointer">
					Login
				</span>
			</h1>

			{/* login form */}
			<div>
				<form
					className="p-6 border rounded-md space-y-4"
					onSubmit={handleLogin}
				>
					{/* email or username */}
					<div>
						<label htmlFor="emailOrUserName">
							Email or Username:
						</label>
						<input
							required
							type="text"
							name="emailOrUsername"
							placeholder="Email or username"
							className="outline-none w-full border px-3 py-1 rounded-lg mt-1"
						/>
					</div>

					{/* password */}
					<div>
						<label htmlFor="password">Password:</label>
						<input
							required
							type="password"
							name="password"
							placeholder="Password"
							className="outline-none w-full border px-3 py-1 rounded-lg mt-1"
						/>
					</div>

					<button
						type="submit"
						className="border py-1 px-4 rounded-md border-transparent bg-[#cc000096] text-white font-bold w-full hover:border-gray-400 hover:bg-[#cc0000b7] transition-all ease-in"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Authentication;
