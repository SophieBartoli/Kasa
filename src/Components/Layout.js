import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {


    ReactDOM.render(
      
        <div>
            <Header />
                { this.props.children }
               
            <Footer />
        </div>
        );
}

export default Layout;
