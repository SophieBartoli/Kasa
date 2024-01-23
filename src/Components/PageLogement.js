import { useLocation } from "react-router-dom";
import Header from "./Header.js"

const PageLogement = () => {
	const { logementData } = useLocation().state;
	return (
		<div>
			<Header/>
			<img src={logementData.pictures[0]} alt={logementData.title} />
			<h1>{logementData.title}</h1>

		</div>
	);
};

export default PageLogement;