import React from "react";


function BotArmyMember({bot, handleSuspend}){
    return(
        <div key={bot.key} className="botarmymembercard">
           <img src={bot.avatar_url} alt={bot.name}/> 
            <p>NAME: {bot.name}</p>
            <p> HEALTH: {bot.health}</p>
            <p> DAMAGE: {bot.damage}</p>
            <p>ARMOR: { bot.armor}</p>
            <p> CLASS: {bot.bot_class}</p>
            <p> CATCHPHRASE: <br/>{bot.catchphrase}</p>
            
            <p> DATE CREATED:  {bot.created_at}</p>
            <p> DATE UPDATED:  { bot.updated_at} </p>
            <button onClick={handleSuspend} className="suspend">SUSPEND</button>
            <button>X</button>

        </div>
    )
}
export default BotArmyMember;