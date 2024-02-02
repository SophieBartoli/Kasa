
const Banner = ( {imgSrc, imgText} ) => {
    return (
        <div className="banniere">
            <img src={ imgSrc } alt=""/> 
            <h1>{ imgText }</h1>
        </div>
    );
}

export default Banner;