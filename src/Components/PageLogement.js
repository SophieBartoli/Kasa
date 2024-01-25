import { useParams } from "react-router-dom";
import Header from "./Header.js"
import { useEffect, useState } from "react";
import Footer from "./Footer.js";

const PageLogement = () => {
	let { id } = useParams();
	const [logementData, setLocationData] = useState([]);


	useEffect(() => {
	fetch('http://127.0.0.1:5500/logement.json')
	  .then(response => response.json())
 	  .then(data => {
		const logement = data.find(item => item.id === id);
		if (logement) {
		setLocationData(logement);
		} else {
		console.log('Logement non trouvé');
		}
  	})
	.catch(error => {
		console.error('Erreur lors de la récupération des données:', error);
	});
	}, [id])

	return (
		<div className="rootDiv">
			<div className="pageDiv">
				<Header/>
			</div>
			<div>
				<img src={logementData.pictures} alt=""/>
			</div>
			<div>
				<h1>{logementData.title}</h1>
				<div>
					<p>{logementData.host.name}</p>
					<img src={logementData.host.picture} alt=""/>
				</div>
			</div>
			<h2>{logementData.location}</h2>
			<div>
				<p>{logementData.tags}</p>
			</div>
			<div>
				<div>
					<p>Description</p>
					<button/>
				</div>
				<div>
					<p>Équipements</p>
					<button/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default PageLogement;