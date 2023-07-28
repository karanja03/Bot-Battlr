


import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faNotesMedical, faCircleExclamation, faShieldHalved, faUserGroup, faQuoteLeft, faCalendarPlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

function Bot({
  id,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  avatar_url,
  created_at,
  updated_at,
  handleClickBot,
}) {
  const [chosen, setChosen] = useState(false);

  function handleAddToBotArmy() {
    if (!chosen) {
      handleClickBot(id);
      setChosen(true);
    }
  }

  return (
    <div className="botcard">
    <div className={`bot-item ${chosen ? "chosen" : ""}`}>
      <img src={avatar_url} alt={name} />
      <div className="arrangement">
      <p className="p">
        <FontAwesomeIcon icon={faRobot} size="sm" />  :  {name}
      </p>
      <p className="p"> 
        <FontAwesomeIcon icon={faNotesMedical} style={{color: "#dd0808",}} />  : {health}
      </p>
      <p className="p">
        <FontAwesomeIcon icon={faCircleExclamation} style={{color: "#e60a0a",}} />  : {damage}
      </p>
      <p className="p">
         <FontAwesomeIcon icon={faShieldHalved} style={{color: "#671414",}} />  : {armor}
      </p>
      <p className="p">
        <FontAwesomeIcon icon={faUserGroup} />  : {bot_class}
        </p>
        </div>
      <p >
      <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#b128c3",}} />
       : <span className=" catchphrase">{catchphrase}</span>
      </p>
      <p >
        <FontAwesomeIcon icon={faCalendarPlus} style={{color: "#3d18a5",}} />  :  {created_at}
        </p>
      <p>
        <FontAwesomeIcon icon={faPenToSquare} style={{color: "#3d18a5",}} />  :  {updated_at}
        </p>
      <button  onClick={handleAddToBotArmy} className="addbutton">
        {chosen ? "ADDED!" : "Add To Bot Army"}
      </button>
    </div>
    </div>
  );
}

export default Bot;
