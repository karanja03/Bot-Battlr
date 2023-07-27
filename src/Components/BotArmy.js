import React ,{useState, useEffect}from "react";
import Bot from "./Bot";
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
         const revivedArmyBot=botArmy.filter((bot)=> bot.id !==deletedItem.id)
         setBotArmy(revivedArmyBot);
    }
    function handleBotDelete(id){

        console.log("Completely Deleted")
        console.log(id)
       
            fetch(`http://localhost:8001/bots/${id}`,{
                method:"DELETE",
                 
            })
            .then ((response) =>{
                if(response.ok){
                handleServerDelete(id)
            }else{
                alert('ERROR DELETING THE BOT')
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