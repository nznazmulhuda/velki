import axios from "axios";
import toast from "react-hot-toast";

function Register() {
	// register new user
	const register = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const username = form.username.value;
		const confirmPassword = form.confirmPassword.value;

		if (password === confirmPassword) {
			const date = new Date().toLocaleString();
			const user = {
				username,
				email,
				password,
				date,
				role: "admin",
			};
			// api call
			axios
				.post("/register", user)
				.then((res) => {
					if (res.data.insertedId) {
						toast.success("User registered successfully!");
						form.reset();
					}
				})
				.catch((e) => toast.error(e.message));

			form.reset();
		} else {
			form.password.value = "";
			form.confirmPassword.value = "";
			toast.error("Passwords do not match!");
		}
	};
	return (
		// register
		<div>
			<form onSubmit={register}>
				{/* username */}
				<div>
					<label>Username:</label>
					<input
						required
						type="text"
						name="username"
						placeholder="Username"
						className="border border-[#cc000021] rounded-md px-2 py-1 w-[80%] outline-none focus-visible:border-[#cc00004e]"
					/>
				</div>

				{/* email */}
				<div>
					<label>Email:</label>
					<input
						required
						type="email"
						name="email"
						placeholder="Email"
						className="border border-[#cc000021] rounded-md px-2 py-1 w-[80%] outline-none focus-visible:border-[#cc00004e]"
					/>
				</div>

				{/* password */}
				<div>
					<label>Password:</label>
					<input
						required
						type="password"
						name="password"
						placeholder="Password"
						className="border border-[#cc000021] rounded-md px-2 py-1 w-[80%] outline-none focus-visible:border-[#cc00004e]"
					/>
				</div>

				{/* Confirm password */}
				<div>
					<label>Confirm Password:</label>
					<input
						required
						type="password"
						name="confirmPassword"
						placeholder="Confirm password"
						className="border border-[#cc000021] rounded-md px-2 py-1 w-[80%] outline-none focus-visible:border-[#cc00004e]"
					/>
				</div>

				<button type="submit">Register</button>
			</form>
		</div>
	);
}

export default Register;
