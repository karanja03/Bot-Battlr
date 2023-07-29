import React from "react";
import BotCollection from "./BotCollection";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";
function App() {

    const [bots, setBots]=useState([])




  

    return (
        <div>
            <Routes>
            <Route path="/" element={<Home />} />
             <Route exact path="/botcollection" element={<BotCollection  bots={bots} setBots={setBots} /> } />
            
             </Routes>
           
        </div>
    )
}

export default App;







