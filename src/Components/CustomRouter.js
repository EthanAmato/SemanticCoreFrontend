import { BrowserRouter, BrowserRouter as Router, //lets us manage our routes 
         Link,  //use for links
         Route, //create individual routes
         Routes,
         useNavigate,
         useLocation,
         redirect } from "react-router-dom"; //container for routes
import Navbar from "./Navbar";
import Home from "./Home";
import Language from './Language'
import Contact from "./Contact";
import Languages from "./Languages";
import FAQ from "./FAQ";


function CustomRouter(props) {

  return(
    <Router>
        <div>
          <Navbar />
           <Routes>
            <Route name="Home" exact path="/" element={<Home/>}/>
            <Route name="FAQ" path="/faq" element={<FAQ/>}/>
            <Route name="Contact" path="/contact" element={<Contact/>}/>
            <Route name="Languages" path="/languages" element={<Languages langNames = {props.langNames}/>}/>
            <Route name="Language" path="/languages/:language" element={<Language/>}/>            
          </Routes>
        </div>
    </Router>
  );
  }

export default CustomRouter;