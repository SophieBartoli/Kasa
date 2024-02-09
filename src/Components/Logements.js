import { useParams } from "react-router-dom";
import Header from "./Header.js"
import { useEffect, useState } from "react";
import Footer from "./Footer.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Collapse from "./Collapse.js";
import Slideshow from "./Slideshow.js";
import { Navigate } from "react-router-dom";

const Logements = () => {
	let { id } = useParams();
	const [logementData, setLocationData] = useState([]);
	const tags = logementData.tags;
	const descriptions = logementData.description;
	const equipements = logementData.equipments;

	const [toError, setToError] = useState(false);

	useEffect(() => {
	fetch('http://127.0.0.1:5500/logement.json')
	  .then(response => response.json())
 	  .then(data => {
		const logement = data.find(item => item.id === id);
		if (logement) {
		setLocationData(logement);
		return console.log(logement.pictures);
		} else {
		setToError(true);
		}
  	})
	.catch(error => {
		setToError(true);
		console.error('Erreur lors de la récupération des données:', error);
	});
	}, [id])

	if (toError) {
		return (
			<Navigate to="/Error" replace={true}/>
		)
	}

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
						<button/>
					</div>
					<p>1/4</p>
				</div>


				<div className="pageLogementBody">
					<div className="componentLeft">
						<h1>{logementData.title}</h1>
						<h2>{logementData.location}</h2>
							<ul className="tagsUl">
								{tags.map(tag => (
									<li key={tag} className="tags">{tag}</li>
								))}
							</ul>	
					</div>

					<div className="componentRight">
							<div className="hostDiv">
								<p>{logementData.host.name}</p>
								<img src={logementData.host.picture} alt=""/>
							</div>
							<div className="etoilesDiv">
								<FontAwesomeIcon icon={faStar} className="etoile"/>
								<FontAwesomeIcon icon={faStar} className="etoile"/>
								<FontAwesomeIcon icon={faStar} className="etoile"/>
								<FontAwesomeIcon icon={faStar} className="etoile"/>
								<FontAwesomeIcon icon={faStar} className="etoile"/>	
							</div>
					</div>
				</div>
				<div className="componentButtons">
					<div className="buttonLeft">
						<Collapse collapseText={"Description"} collapseDescription={ descriptions }/>
					</div>
					<div className="buttonRight">
						
						<Collapse collapseText={"Équipements"} collapseUl={ equipements }/>
						
						
					</div>
				</div>	
				<Footer/>
			</>
			: null
			}
		</div>
	);
};

export default Logements;