import React, { useState } from 'react'




const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
class TestChar {
    CharacterName:string = "Test"
    maxHealth: number = 100;
    currHealth = useState(this.maxHealth)
    maxMana: number = 100;
    currMana = useState(0)
    

    abilities : any = [
      {
        name:"basic attack",
        description:"just basic attack, nothing special",
        skillPower:5,
        manaCost:0,
        type:"attack"

      },
      {
        
        name:"big Tornado",
        description:"creates big tornado that deal huge damage",
        skillPower:40,
        manaCost:70,
        type:"attack"


      },
      {
        name:"Full protection",
        description:"creates shield that absorb 100% dmg",
        manaCost:100,
        skillPower:100,
        type:"protection"

      }
    ]

    

}





const Battle = () => {

let Player1 = new TestChar()
let Player2 = new TestChar()

const Abilities = (e:React.MouseEvent<HTMLButtonElement>) => {
  let getId = e.currentTarget.id
  console.log(getId)
  switch(getId){
    case "player1":

      break;
    case "player2":
      break;


  }
   
}




  return (
    <div className='battle-area'>
      <div className="AbillitiesArea"></div>
      <div className="player1">
        <p className="player1-name"> {Player1.CharacterName}</p>
        <button className="atk-btn" id='player1' onClick={Abilities}>Attack</button>
        <button className="protect-btn" id='player1'>Defence</button>
        <button className="heal-btn" id='player1'>Heal</button>
      </div>
      <div className="player2">
        <p className="player1-name"> {Player2.CharacterName}</p>
        <button className="atk-btn" id='player2'>Attack</button>
        <button className="protect-btn" id='player2'>Defence</button>
        <button className="heal-btn" id='player2'> Heal</button>
      </div>

      
    </div>
  )
}

export default Battle