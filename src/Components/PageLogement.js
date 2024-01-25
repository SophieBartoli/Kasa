import { useParams } from "react-router-dom";
import Header from "./Header.js"
import { useEffect, useState } from "react";

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
		<div>
			<Header/>
		<p>{logementData.title}</p>

		</div>
	);
};

export default PageLogement;