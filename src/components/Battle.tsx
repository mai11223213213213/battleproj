import React, { useEffect, useState } from 'react'
import AbilitiesMenu from './AbilitiesMenu';

export interface Character {
  CharacterName: string;
  maxHealth: number;
  // currHealth: number;        
  // setCurH: (value: number) => void;  
  maxMana: number;
  // currMana: number;         
  // setCurM: (value: number) => void;  
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
   
    // private healthState = useState(this.maxHealth);
    // currHealth = this.healthState[0];  
    // setCurH = this.healthState[1];     

  
    // private manaState = useState(0);
    // currMana = this.manaState[0];      // Current value
    // setCurM = this.manaState[1];       // Setter
    

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

let [Player1CurrHp, setPl1CHp] = useState(Player1.maxHealth)
let [Player1CurrMana, setPl1CMana] = useState(0)
let [Pl1HpPercent, setPl1HpP] =useState(0)
let [Pl1ManaPercent, setPl1ManaP] =useState(0)

let [Player2CurrHp, setPl2CHp] = useState(Player2.maxHealth)
let [Player2CurrMana, setPl2CMana] = useState(0)
let [Pl2HpPercent, setPl2HpP] =useState(0)
let [Pl2ManaPercent, setPl2ManaP] =useState(0)

useEffect(()=>{
  let P1CHPer = Player1CurrHp/Player1.maxHealth * 100
  setPl1HpP(P1CHPer)

  let P1CMPer = Player1CurrMana/Player1.maxMana * 100
  setPl1ManaP(P1CMPer)

  let P2CHPer = Player2CurrHp/Player2.maxHealth * 100
  setPl2HpP(P2CHPer)

  let P2CMPer = Player2CurrMana/Player2.maxMana * 100
  setPl2ManaP(P2CMPer)
}, [Player1CurrHp, Player1CurrMana,Player2CurrHp,Player2CurrMana])


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
      <div className="players-info">
        <div className="player1">
          <div className="player1-name">{Player1.CharacterName}</div>
          <div className="player1-hpBar">
            <div className="player1-hpStatus" style={{width:`${Pl1HpPercent}%`}}>HP: {Player1CurrHp}/{Player1.maxHealth}</div>
          </div>
          <div className="player1-manaBar">
            <div className="player1-manaStatus" style={{width:`${Pl1ManaPercent}%`}}>MP: {Player1CurrMana}/{Player1.maxMana}</div>
          </div>

        </div>
        <div className="player2">
        <div className="player2-name">{Player2.CharacterName}</div>
          <div className="player2-hpBar">
            <div className="player2-hpStatus" style={{width:`${Pl2HpPercent}%`}}>HP: {Player2CurrHp}/{Player2.maxHealth}</div>
          </div>
          <div className="player2-manaBar">
            <div className="player2-manaStatus" style={{width:`${Pl2ManaPercent}%`}}>MP: {Player2CurrMana}/{Player2.maxMana}</div>
          </div>

        </div>
      </div>
      <div className="navigation">
        <button className="attack"  onClick={Abilities}>Attack</button>
        <button className="protection" onClick={Abilities}>Defence</button>
        <button className="heal" onClick={Abilities}>Heal</button>
      </div>

    </div>
  )
}

export default Battle