import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faNotesMedical, faCircleExclamation, faShieldHalved, faUserGroup, faQuoteLeft, faCalendarPlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons'


function BotArmyMember({bot, handleSuspend, handleBotDelete}){
    return(
        <div key={bot.key} className="botarmymembercard">
           <img src={bot.avatar_url} alt={bot.name}/> 
           <div className="arrangement">
            <p className="p">
            <FontAwesomeIcon icon={faRobot} size="sm" /> 
            : {bot.name}</p>
            <p className="p"> 
            <FontAwesomeIcon icon={faNotesMedical} style={{color: "#dd0808",}} />    
            : {bot.health}</p>
            <p className="p"> 
            <FontAwesomeIcon icon={faCircleExclamation} style={{color: "#e60a0a",}} />     
            : {bot.damage}</p>
            <p className="p">
            <FontAwesomeIcon icon={faShieldHalved} style={{color: "#671414",}} />     
            : { bot.armor}</p>
            <p className="p">
            <FontAwesomeIcon icon={faUserGroup} />    
            : {bot.bot_class}</p>
            </div>
            <p >
           <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#b128c3",}} />
            : <span className=" catchphrase">{ bot.catchphrase}</span>
           </p>
            <p> 
            <FontAwesomeIcon icon={faCalendarPlus} style={{color: "#3d18a5",}} />    
            :  {bot.created_at}</p>
            <p> 
            <FontAwesomeIcon icon={faPenToSquare} style={{color: "#3d18a5",}} />     
            :  { bot.updated_at} </p>
            <button onClick={handleSuspend} className="suspend">SUSPEND</button>
            <button  onClick={handleBotDelete} className="x">X</button>

        </div>
    )
}
export default BotArmyMember;