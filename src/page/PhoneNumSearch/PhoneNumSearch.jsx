import { Helmet } from "react-helmet";
import { FindUser } from "../../Admin";

function PhoneNumSearch() {
	return (
		<>
			<Helmet>
				<title>ফোন নাম্বার সার্চ করুন - Velki Agents</title>
			</Helmet>

			<div className="p-4">
				<FindUser />
			</div>
		</>
	);
}

export default PhoneNumSearch;
