import axios from "axios";
import toast from "react-hot-toast";

function Customer() {
	// register new user
	const register = (e) => {
		e.preventDefault();
		const form = e.target;
		const customer_service_id = form.customer_service_id.value;
		const type = form.type.value;
		const wp_number = form.wp_number.value;
		const phn_number = form.phn_number.value;
		const date = new Date().toLocaleString();
		const role = "customer_service";
		const old_customer_service_id = "";
		const old_wp_number = "";
		const old_phn_number = "";
		const old_type = "";

		const customer = {
			customer_service_id,
			type,
			role,
			wp_number,
			phn_number,
			date,
			old_customer_service_id,
			old_wp_number,
			old_phn_number,
			old_type,
		};

		// api call
		axios
			.post("/add_customer", customer)
			.then((res) => {
				if (res.data.insertedId) {
					toast.success("New admin added successfully!");
					form.reset();
				} else {
					toast.error("Failed to add new admin!");
					form.reset();
				}
			})
			.catch((e) => toast.error(e.response.data));
	};
	return (
		<>
			<div className="p-4">
				<form
					onSubmit={register}
					className="border p-6 rounded-md flex flex-col space-y-4"
				>
					{/* agent id */}
					<div className="flex flex-col w-full space-y-1">
						<label>Customer Service Id:</label>
						<input
							required
							type="number"
							name="customer_service_id"
							placeholder="Customer service id number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* type */}
					<div className="flex flex-col w-full space-y-1">
						<label>Type:</label>
						<input
							required
							type="text"
							name="type"
							placeholder="Customer service type"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* whatsapp number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Whatsapp number:</label>
						<input
							required
							type="number"
							name="wp_number"
							placeholder="Whatsapp number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					{/* Phone number */}
					<div className="flex flex-col w-full space-y-1">
						<label>Phone number:</label>
						<input
							required
							type="number"
							name="phn_number"
							placeholder="Phone number"
							className="border border-[#cc000021] rounded-md px-2 py-1 outline-none focus-visible:border-[#cc00004e]"
						/>
					</div>

					<button
						type="submit"
						className="border-2 border-b-[#C00] rounded-md py-2 border-t-transparent border-x-transparent hover:border-[#C00] hover:bg-[#C00] hover:text-white transition-all ease-linear text-lg font-medium mx-auto px-4"
					>
						Add Customer Service
					</button>
				</form>
			</div>
		</>
	);
}

export default Customer;
