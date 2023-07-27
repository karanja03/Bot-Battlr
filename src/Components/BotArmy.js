import React ,{useState}from "react";
import Bot from "./Bot";
import BotArmyMember from "./BotArmyMember";

function BotArmy({botArmy, setBotArmy}){

    // const[nonSuspended, setNonSuspended]= useState([botArmy])
    function handleSuspend(id){
        console.log("suspended")
        console.log(id)
        const newBotArmy=botArmy.filter((bot)=> bot.id!==id)
        setBotArmy(newBotArmy)
        // setNonSuspended(newBotArmy);
    }
return(
    <div>
        <div>
            <ul  className="botarmyrow">
            {botArmy.map((bot)=>(
             <li key={bot.id}>
                < BotArmyMember 
                bot={bot} 
                handleSuspend={()=> {handleSuspend(bot.id)}} /></li>
            ))}
            </ul>
        </div>
    </div>
)
   
}

export default BotArmy;