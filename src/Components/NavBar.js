import React  from "react";
import { Link } from "react-router-dom";


function NavBar(){
   
        
     return(
        <div>
    <h3 className="mainheading">Embark on a tech-fueled adventure with our extraordinary <br/>Bot Army! Unleash the power of robots to amplify productivity and conquer challenges.<br/> Embrace the future of technology and join us for unparalleled achievements!</h3>

        <nav>
        
        < Link
        className="navpoint"
        to="/botcollection"
        exact="true"
         >
        BOT FAMILY
      </Link>
      < Link
        className="navpoint"
        to="/"
        exact="true"
         >
         HOME
      </Link>

      
      </nav>
      </div>
    )
}

export default NavBar;
