import React from "react";
import { BrowserRouter as Router,
    Route,
    Routes,
    Link} from 'react-router-dom'; 
import '../Css/navbar.css'


function Navbar(props) {

    return(
         <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#343A40"}}>
            <div className="container-fluid">
            <a className="navbar-brand" href="/"><Link to="/" style={{color:"white", textDecoration:"none"}}>
               <span className="bold">Semantic</span> Core</Link></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <Link to="/" style={{textDecoration:"none"}}><a style={{color:"white"}} className="nav-link" aria-current="page" href="#">Home</a></Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/FAQ" style={{textDecoration:"none"}}><a style={{color:"white"}} className="nav-link" aria-current="page" href="#">FAQ</a></Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/languages" style={{textDecoration:"none"}}><a className="nav-link" style={{color:"white"}} aria-current="page" href="#">Languages</a></Link>
                  </li>
               </ul>
            </div>
            </div>
         </nav>
    );
  }
 
export default Navbar