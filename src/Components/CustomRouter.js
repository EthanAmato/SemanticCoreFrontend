import {
  BrowserRouter as Router, //lets us manage our routes 
  Route, //create individual routes
  Routes,
} from "react-router-dom"; //container for routes
import { lazy, Suspense } from 'react';
import Navbar from "./Navbar";
import Loader from "./Loader";

//Lazy load components for faster rendering of website - prevents
//downloading of all pages on first load
const Home = lazy(() => import("./Home"));
const Language = lazy(() => import("./Language"));
const Contact = lazy(() => import("./Contact"));
const Languages = lazy(() => import("./Languages"));
const FAQ = lazy(() => import("./FAQ"));



function CustomRouter(props) {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route name="Home" exact path="/" element={<Home />} />
            <Route name="FAQ" path="/faq" element={<FAQ />} />
            <Route name="FAQ" path="/load" element={<Loader />} /> 
            <Route name="Contact" path="/contact" element={<Contact />} />
            <Route name="Languages" path="/languages" element={<Languages langNames={props.langNames} />} />
            <Route name="Language" path="/languages/:language" element={<Language />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default CustomRouter;