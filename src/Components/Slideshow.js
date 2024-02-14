import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Slideshow = ({ imageSourceArray  }) => {

    const [imageSlideIndex, setImageSlideIndex] = useState(0);
    const length = imageSourceArray.length; 
    var imageSource = imageSourceArray[imageSlideIndex];
    

    const NextSlide = () => {
        setImageSlideIndex(imageSlideIndex >= length - 1  ? 0 : imageSlideIndex + 1);
      };

    const PreviousSlide = () => {
        setImageSlideIndex(imageSlideIndex === 0 ? length - 1 : imageSlideIndex - 1);
    };


    return (
        <div className="carousel">

            { imageSourceArray.length >=1 &&
            <img className="imageCarousel" src={ imageSource } alt=""/>
            }

            { imageSourceArray.length > 1 &&
                <div className="carouselButtons">
                    <button onClick={ PreviousSlide }> <FontAwesomeIcon icon={faAngleLeft} color="white" size="7x"/> </button>
                    <button onClick={ NextSlide }> <FontAwesomeIcon icon={faAngleRight} color="white" size="7x"/> </button>
                </div>
            }

            <p>{imageSlideIndex + 1}/{length}</p>
        </div>
    )
};



export default Slideshow;