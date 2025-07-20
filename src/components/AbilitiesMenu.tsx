import React from 'react'
import { ability } from './Battle'

const AbilitiesMenu = ({player, type}:any) => {
  return (
    <div className="area">
    {player.abilities.map((skill:ability) => skill.type == type ?(
      
        <div className="skill">
            <h1 className="skill-name">{skill.name}</h1>
            <p className="skill-desc">{skill.description}</p>
            <p className="skill-power">Power: {skill.skillPower}</p>
            <p className="mana-cost">Cost: {skill.manaCost} MP</p>
            <button className="skill-cast">Cast this</button>
        </div>
    )
     : "")}
    </div>)
}

export default AbilitiesMenu