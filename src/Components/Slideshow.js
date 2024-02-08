import Logements from './Logements';


const Slideshow = () => {
    const logements = Logements();

    if (logements) {
        return console.log(logements);
      } else {
        return null;
      }
    
    
};



export default Slideshow;