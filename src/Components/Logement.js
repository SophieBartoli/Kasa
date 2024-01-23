import { Link } from "react-router-dom";

const Logement = ({ data }) => {
	return (
		<Link
			to="/Logement"
			state={{ logementData: data }}
			key={data.id}
			className="logementDiv"
		>
			<img className="locationImage" src={data.cover} alt="" />
			<div className="locationTitle">
				<h3>{data.title}</h3>
			</div>
		</Link>
	);
};

export default Logement;
