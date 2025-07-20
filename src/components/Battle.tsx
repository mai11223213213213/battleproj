import React, { useState } from 'react'
import AbilitiesMenu from './AbilitiesMenu';

export interface Character {
  CharacterName: string;
  maxHealth: number;
  currHealth: number;        
  setCurH: (value: number) => void;  
  maxMana: number;
  currMana: number;         
  setCurM: (value: number) => void;  
  abilities: ability[];
}
export type ability = {
  name: string;
  description: string;
  skillPower: number;
  manaCost: number;
  type: "attack" | "protection" | "heal"; // More specific type
};


const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
class TestChar implements Character{
    CharacterName:string = "Test"
    maxHealth: number = 100;
    
    maxMana: number = 100;
   
    private healthState = useState(this.maxHealth);
    currHealth = this.healthState[0];  
    setCurH = this.healthState[1];     

  
    private manaState = useState(0);
    currMana = this.manaState[0];      // Current value
    setCurM = this.manaState[1];       // Setter
    

    abilities : ability[] = [
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

const FirstMove = () => {
  let randomNum = generateRandomNumber(1,2);
  switch(randomNum){
    case 1:
      return "player1"
      
    case 2:
      return "player2"
  }
}
let Player1 = new TestChar()
let Player2 = new TestChar()
let WhoMove = FirstMove()
let Player1Move = null
let Player2Move = null 
let [abititiesMenu, setAbM] = useState<Character>()
let [currType , serCurrType] = useState<string>()
const Abilities = (event: React.MouseEvent<HTMLButtonElement>) => {
  let currBtn = event.currentTarget.classList[0]
  switch(WhoMove){
    case "player1":
      
      setAbM(Player1)
      console.log(abititiesMenu)
      serCurrType(currBtn)
      break;
    case "player2":
      setAbM(Player2)
      console.log(abititiesMenu)
      serCurrType(currBtn)
      break;


  }
   
}




  return (
    <div className='battle-area'>
      <div className="AbillitiesArea">
        {abititiesMenu && <AbilitiesMenu player={abititiesMenu} type={currType}/>}
      </div>
      <div className="navigation">
        <p className="player1-name"> {Player1.CharacterName}</p>
        <button className="attack"  onClick={Abilities}>Attack</button>
        <button className="protection" onClick={Abilities}>Defence</button>
        <button className="heal" onClick={Abilities}>Heal</button>
      </div>

    </div>
  )
}

export default Battle