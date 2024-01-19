const Logement = ( { data }) => {
    console.log(data);
    return <div key={data.id}>
        <img className="locationImage" src={data.cover} alt=""/>
        <h3 className="locationTitle">{data.title}</h3>
    </div>
};

export default Logement;

