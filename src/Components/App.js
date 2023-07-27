import React from "react";
import NavBar from "./NavBar";
import BotCollection from "./BotCollection";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";
 import BotArmy from "./BotArmy";



function App() {

    const [bots, setBots]=useState([])




  

    return (
        <div>
            <h1 className="mainheading">Explore boundless possibilities with our enchanting Bot companions.<br/> Embrace innovation today!"</h1>
            <NavBar/ >

            <Routes>
            <Route path="/" element={<Home />} />
             <Route exact path="/botcollection" element={<BotCollection  bots={bots} setBots={setBots} /> } />
            
             </Routes>
           
        </div>
    )
}

export default App;







