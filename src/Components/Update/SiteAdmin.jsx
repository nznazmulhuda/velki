function SiteAdmin() {
	return (
		<>
			<div className="p-4">
				<form className="border p-6 rounded-md flex flex-col space-y-4">
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
		</>
	);
}

export default SiteAdmin;
