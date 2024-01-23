const Logement = ( { data }) => {
        return <div key={data.id} className="logementDiv">
                    <img className="locationImage" src={data.cover} alt=""/>
                    <div className="locationTitle">
                        <h3>{data.title}</h3>
                    </div>
                </div>
};

export default Logement;

