import React from "react";
import { useEffect,useState } from "react";
import Bot from "./Bot";
import BotArmy from "./BotArmy";
import SortBar from "./SortBar";


function BotCollection({bots, setBots}){
    const [botArmy, setBotArmy]= useState([])
    const [sortedBots, setSortedBots] = useState(bots);
  const [selectedSort, setSelectedSort] = useState(null);

   

//fetching data
useEffect(()=>{
    fetch("https://bot-serverss.onrender.com")
    .then ((r)=> r.json())
    .then((data)=> 
    {
      setBots(data);
      setSortedBots(data);
       
    })
    },[setBots])

  


    //adding a new bot member to the army
    function handleClickBot(id){
       console.log(id)
       const newBotMember=bots.find((bot) => bot.id === id);
       if(newBotMember){
        setBotArmy((prevBotArmy)=> [...prevBotArmy, newBotMember])
       }
       
    }
    function handleSort(sortType){
        setSelectedSort(sortType)
        let sortedBots=[...bots]
        switch (sortType) {
            case "health":
              sortedBots.sort((a, b) => a.health - b.health);
              break;
            case "damage":
              sortedBots.sort((a, b) => a.damage - b.damage);
              break;
            case "armor":
              sortedBots.sort((a, b) => a.armor - b.armor);
              break;
            default:
              break;
          }
      
          setSortedBots(sortedBots);
        }
        
    

    
    return(
        <div  className="botcontainer">
            <SortBar
             bots= {bots}  
             setBots = {setBots} 
             handleSort={handleSort}
              />
            <BotArmy  botArmy={botArmy} setBotArmy={setBotArmy}/>
            <div >
              <p className="choose"> CHOOSE YOUR BOT ARMY</p>
            <ul className="botlist">
                {sortedBots.map((bot)=>(
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
            <div className="finals">
            <p className="final">  @ WAMBUI KARANJA 2023</p>
            </div>
        </div>
    )

                }
                
export default BotCollection;