import React from "react";

function Bot({id, name, health, damage, armor,  bot_class, catchphrase, avatar_url, created_at, updated_at, handleClickBot}){



    return(
        <div className="botcard">
            <img src={avatar_url} alt={name}/> 
            <p>NAME: {name}</p>
            <p> HEALTH: {health}</p>
            <p> DAMAGE: {damage}</p>
            <p>ARMOR: {armor}</p>
            <p> CLASS: {bot_class}</p>
            <p> CATCHPHRASE: <br/>{catchphrase}</p>
            
            <p> DATE CREATED:  {created_at}</p>
            <p> DATE UPDATED:  {updated_at} </p>
            <button onClick={handleClickBot}>Add To Bot Army</button>


        </div>
    )
}
export default Bot;