import axios from "axios";
import { toast } from "react-hot-toast";

function Editor() {
	// register new user
	const register = (e) => {
		e.preventDefault();
		const form = e.target;
		const username = form.username.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirm_password = form.confirm_password.value;

		if (password && confirm_password) {
			const date = new Date().toLocaleString();
			const user = {
				date,
				role: "admin",
				username,
				email,
				password,
				confirm_password,
			};

			// api call to register new user with role admin
			axios
				.post("/register", user)
				.then((res) => {
					if (res.data.insertedId) {
						toast.success("New admin added successfully!");
						form.reset();
					}
				})
				.catch((e) => toast.error(e.response.data));
		} else {
			toast.error("Password incorrect!");
			form.password.value = "";
			form.confirm_password.value = "";
		}
	};
	return (
		<>
			<div className="p-4">
				<form
					onSubmit={register}
					className="border p-6 rounded-md flex flex-col space-y-4"
				>
					{/* username */}
					<div className="flex flex-col w-full space-y-1">
						<label>Username:</label>
						<input
							required
							type="text"
							name="username"
							placeholder="Username"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* email */}
					<div className="flex flex-col w-full space-y-1">
						<label>Email:</label>
						<input
							required
							type="email"
							name="email"
							placeholder="Email address"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* Password */}
					<div className="flex flex-col w-full space-y-1">
						<label>Password:</label>
						<input
							required
							type="password"
							name="password"
							placeholder="Password"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* Confirm password */}
					<div className="flex flex-col w-full space-y-1">
						<label>Confirm password:</label>
						<input
							required
							type="password"
							name="confirm_password"
							placeholder="Confirm password"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					<button
						type="submit"
						className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-lg font-medium mx-auto px-4"
					>
						Add New Editor
					</button>
				</form>
			</div>
		</>
	);
}

export default Editor;
