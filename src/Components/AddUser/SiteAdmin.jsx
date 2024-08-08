import axios from "axios";
import toast from "react-hot-toast";

function SiteAdmin() {
	// register new user
	const register = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const username = form.username.value;
		const admin_id = form.admin_id.value;
		const old_admin_id = "";
		const wp_number = form.wp_number.value;
		const old_wp_number = "";
		const tele_number = form.tele_number.value;
		const old_tele_number = "";
		const phn_number = form.phn_number.value;
		const old_phn_number = "";
		const confirmPassword = form.confirmPassword.value;
		const sub_admins = [];

		if (password === confirmPassword) {
			const date = new Date().toLocaleString();
			const user = {
				username,
				email,
				password,
				date,
				sub_admins,
				role: "admin",
				admin_id,
				old_admin_id,
				wp_number,
				old_wp_number,
				tele_number,
				old_tele_number,
				phn_number,
				old_phn_number,
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
				.catch((e) => toast.error(e.message));
		} else {
			form.password.value = "";
			form.confirmPassword.value = "";
			toast.error("Passwords do not match!");
		}
	};

	return (
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

				{/* Agent Id */}
				<div className="flex flex-col w-full space-y-1">
					<label>Admin Id:</label>
					<input
						required
						type="text"
						name="admin_id"
						placeholder="Admin id"
						className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
					/>
				</div>

				{/* whatsapp number */}
				<div className="flex flex-col w-full space-y-1">
					<label>Whatsapp no:</label>
					<input
						required
						type="text"
						name="wp_number"
						placeholder="Whatsapp number"
						className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
					/>
				</div>

				{/* Telegram number */}
				<div className="flex flex-col w-full space-y-1">
					<label>Telegram no:</label>
					<input
						required
						type="text"
						name="tele_number"
						placeholder="Telegram Number"
						className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
					/>
				</div>

				{/* Phone number */}
				<div className="flex flex-col w-full space-y-1">
					<label>Phone no:</label>
					<input
						required
						type="text"
						name="phn_number"
						placeholder="Phone Number"
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
						placeholder="Email"
						className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
					/>
				</div>

				{/* password */}
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
					<label>Confirm Password:</label>
					<input
						required
						type="password"
						name="confirmPassword"
						placeholder="Confirm password"
						className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
					/>
				</div>

				<button
					type="submit"
					className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-lg font-medium mx-auto px-4"
				>
					Add New Admin
				</button>
			</form>
		</div>
	);
}

export default SiteAdmin;
