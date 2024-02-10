import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Slideshow = ({ imageSource  }) => {

    const [imageSlide, setImageSlide] = useState(0);
    const length = imageSource.length;

    const prevSlide = () => {
        setImageSlide(imageSlide === 0 ? length - 1 : imageSlide - 1);
      };

    const nextSlide = () => {
        setImageSlide(imageSlide === length - 1 ? 0 : imageSlide + 1);
      };

    return (
        <div className="carousel">
            <img className="imageCarousel" src={ imageSource } alt=""/>

            { imageSource.length !== 0 &&
                <div className="carouselButtons">
                    <button onClick={ "" }> <FontAwesomeIcon icon={faAngleLeft} color="white" size="7x"/> </button>
                    <button onClick={ "" }> <FontAwesomeIcon icon={faAngleRight} color="white" size="7x"/> </button>
                </div>
            }

            <p>1/4</p>
        </div>
    )
};



export default Slideshow;