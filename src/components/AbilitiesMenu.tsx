import React from 'react'

const AbilitiesMenu = ({player}:any) => {
  return (
    <div className="area">
    {player.abilities.map((skill:object) => {
        <div className="skill">
            <h1 className="skill-name"></h1>
            <p className="skill-desc"></p>
            <p className="skill-power"></p>
            <p className="mana-cost"></p>
            <button className="skill-cast">Cast this</button>
        </div>
    })}
    </div>
  )
}

export default AbilitiesMenu