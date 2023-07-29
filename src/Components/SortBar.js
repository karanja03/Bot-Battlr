import React from "react";

function SortBar({handleSort }){
    return(
    <div className="sortpos">
        <p className="sortby">SORT BY:</p>
        <div >
        <button className="sortbot"   onClick={() => handleSort("health")}>HEALTH</button>
        <button className="sortbot"   onClick={() => handleSort("damage")}>DAMAGE</button>
        <button className="sortbot"    onClick={() => handleSort("armor")}> ARMOR</button>
        </div>
    </div>
    )

}

export default SortBar;