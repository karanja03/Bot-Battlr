import React from "react";
import { useEffect,useState } from "react";
import Bot from "./Bot";
import BotArmy from "./BotArmy";


function BotCollection({bots, setBots, handleClickBot}){
    const [botArmy, setBotArmy]= useState([])

useEffect(()=>{
    fetch(" http://localhost:8001/bots")
    .then ((r)=> r.json())
    .then((data)=> 
    {setBots(data)
       
    })
    },[])

    function handleClickBot(id){
       console.log(id)
       const newBotMember=bots.find((bot) => bot.id === id);
       if(newBotMember){
        setBotArmy((prevBotArmy)=> [...prevBotArmy, newBotMember])
       }
       
    }
    return(
        <div>
            <BotArmy  botArmy={botArmy} setBotArmy={setBotArmy}/>
            <ul className="botlist">
                {bots.map((bot)=>(
                   <li key={bot.id}>
                    <Bot 
                   id={bot.id} 
                   name={bot.name}
                   health={bot.health}
                   damage={bot.damage}
                   armor={bot.armor}
                   bot_class={bot.bot_class}
                   catchphrase={bot.catchphrase}
                   avatar_url={bot.avatar_url}
                   created_at={bot.created_at}
                   updated_at={bot.updated_at}
                   handleClickBot= {(id)=>{handleClickBot(bot.id)}}
                   /></li>
                ))}

            </ul>
           
        </div>
    )
}

export default BotCollection;