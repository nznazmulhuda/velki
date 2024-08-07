import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";

function Customer({ user }) {
	const [customer_service_id, setCustomer_service_id] = useState(
		user?.customer_service_id || "",
	);
	const [type, setType] = useState(user?.type || "");
	const [wp_number, setWp_number] = useState(user?.wp_number || "");
	const [phn_number, setPhn_number] = useState(user?.phn_number || "");
	const old_customer_service_id = user?.customer_service_id;
	const old_wp_number = user?.wp_number;
	const old_phn_number = user?.phn_number;
	const old_type = user?.type;

	// update customer details
	const update = (e) => {
		e.preventDefault();

		const updateData = {
			customer_service_id,
			type,
			wp_number,
			phn_number,
			old_customer_service_id,
			old_wp_number,
			old_phn_number,
			old_type,
		};

		axios
			.put(`/updateCustomer?id=${user?._id}`, updateData)
			.then((res) => {
				if (res.data.matchedCount > 0) {
					toast.success("Sub Admin updated successfully!");
				} else {
					toast.error("Something went wrong. Please try again!");
				}
			})
			.catch((err) => toast.error(err.message));
	};

	return (
		<>
			<div className="p-4">
				<form
					onSubmit={update}
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
							defaultValue={customer_service_id}
							onChange={(e) =>
								setCustomer_service_id(e.target.value)
							}
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
							defaultValue={type}
							onChange={(e) => setType(e.target.value)}
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
							defaultValue={wp_number}
							onChange={(e) => setWp_number(e.target.value)}
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
							defaultValue={phn_number}
							onChange={(e) => setPhn_number(e.target.value)}
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

Customer.propTypes = {
	user: PropTypes.object.isRequired,
};

export default Customer;
