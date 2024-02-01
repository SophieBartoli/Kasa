import { useParams } from "react-router-dom";
import Header from "./Header.js"
import { useEffect, useState } from "react";
import Footer from "./Footer.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PageLogement = () => {
	let { id } = useParams();
	const [logementData, setLocationData] = useState([]);
	const tags = logementData.tags;


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
			{ logementData.length !== 0 ?
			<>
				<div className="pageDiv">
					<Header/>
				</div>
				<div className="carousel">
					<img className="imageCarousel" src={logementData.pictures[0]} alt=""/>
					<div className="carouselButtons">
						<button/>
						<FontAwesomeIcon icon="fa-solid fa-angle-right" />
						<button/>
					</div>
					<p>1/4</p>
				</div>


				<div className="pageLogementBody">
					<div className="bodyComponent">
						<h1>{logementData.title}</h1>
						<h2>{logementData.location}</h2>
							<ul className="tagsUl">
								{tags.map(tag => (
									<li key={tag} className="tags">{tag}</li>
								))}
							</ul>
						<div className="componentButton">
							<p>Description</p>
							<button/>
						</div>		
					</div>

					<div className="bodyComponent">
						<div className="componentRight">
							<div className="hostDiv">
								<p>{logementData.host.name}</p>
								<img src={logementData.host.picture} alt=""/>
							</div>
							<p>ici seront les etoiles</p>
							<div className="componentButton">
								<p>Équipements</p>
								<button/>
							</div>	
						</div>	
					</div>
				</div>
				<Footer/>
			</>
			: null
			}
		</div>
	);
};

export default PageLogement;