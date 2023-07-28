import React from "react";

import BotArmyMember from "./BotArmyMember";

function BotArmy({botArmy, setBotArmy, bot}){

    // const[nonSuspended, setNonSuspended]= useState([botArmy])
    function handleSuspend(id){
        console.log("suspended")
        console.log(id)
        const newBotArmy=botArmy.filter((bot)=> bot.id!==id)
        setBotArmy(newBotArmy)
        // setNonSuspended(newBotArmy);
    }

    function handleServerDelete(deletedItem){
         const updatedArmyBot=botArmy.filter((bot)=> bot.id !==deletedItem.id)
         setBotArmy(updatedArmyBot);
    }
    function handleBotDelete(id){

        console.log("Completely Deleted")
        console.log(id)
       
            fetch(`http://localhost:8001/bots/${id}`,{
                method:"DELETE",
                 
            })
            .then ((response) =>{
                if(response.ok){
                handleServerDelete({id})
            }else{
                alert('BOT AL')
            }
        })
       

    }
return(
    <div>
        <div>
            <ul  className="botarmyrow">
            {botArmy.map((bot)=>(
             <li key={bot.id}>
                < BotArmyMember 
                bot={bot} 
                handleSuspend={()=> {handleSuspend(bot.id)}} 
                handleBotDelete={()=> {handleBotDelete(bot.id)}} />
                </li>
            ))}
            </ul>
        </div>
    </div>
)
   
}

export default BotArmy;