import React from "react";
import Player from "./Player"
import players from "../players";
const PlayersList=()=>{
    return (
        <div style={{display:"flex"}}>
          {players.map((player)=>(
            <Player player={player}/>
          ))}
        </div>
      );
    };

export default PlayersList;