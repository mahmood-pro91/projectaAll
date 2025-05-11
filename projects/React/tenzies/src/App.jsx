
import "./index.css"
import Dice from "./components/Dice";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti"

export default function App() {
  const [dice,setDice] = useState(RandomNum())
  const btnRef = useRef(null) ;
  const [count,setCount] = useState(0)
  /*  
  num of is random number from 1 to 6 
  which take nums of components as prams*/
  function RandomNum(){  
    const  nums = [1, 2, 3, 4, 5, 6];
    let result = [];
    for(let i = 0; i < 10; i++){
    let random = nums[Math.floor(Math.random() * nums.length)];
    result.push({
        id:nanoid(),
        value:random,
        isHeld:false
      });     
    }
    return result;
  }
  // handle the roll button and call the Dices 
  function RollDice(){
    setCount(oldCount => oldCount + 1)
    setDice(oldDice => oldDice.map(die =>
      die.isHeld ?
      die :
      {
        ...die,
        value:Math.ceil(Math.random()*6)
      }
    )) }

    // condition for game end winner 

    const gameWon = (
      dice.every((item) => item.isHeld === true) && 
      dice.every((item) => item.value === dice[0].value)
    ) 
    

  const eles = dice.map((item) => {
  
    return (
      
      <Dice 
      key={item.id}
      id={item.id}
      value={item.value}
      isHeld={item.isHeld}
      HoldDice={()=>HoldDice(item.id)}
      />
    )
  })
  function NewGame(){
    setDice(RandomNum())
    setCount(0)
  }
  function HoldDice(id){
    
    setDice(oldDice => oldDice.map((item) => {
      if(item.id === id){
        return {
          ...item,
          isHeld: !item.isHeld
        }
      }else{
        return item
      }
    }))
  }

  return (
    
    
            <main>
              {gameWon && <Confetti/>}
              <h1>Tenies</h1>
              <h4>Rol until all dices are the same 
                .Click each die to freeze it at its current value. </h4>
                {gameWon && <p>YOU ARE A WONDERFUL PLAYER!</p>}
                <div className= "counter">{count}</div>
              <div className="dice-container">
                
                {eles}
              </div>
            <div className="btn-container">
              {gameWon
              ?<button ref={btnRef} onClick={()=>NewGame()} className="roll-btn">Start a new game</button>
              :<button ref={btnRef}  onClick={RollDice} className="roll-btn">Roll</button>
              }
            </div>  
            
            </main>
            
  );
}





/*
    // handle the hold button and change the state

  function HoldDice(e){
    const id = e.target.id;
    console.log(id)
    setDice(dice.map((item) => {
      if(item.id === id){
        return {
          ...item,
          isHeld: !item.isHeld
        }
      }else{
        return item
      }
    }))
  }
  
  <main>
  <div className="dice-container">
    {eles}
  </div>
  <button onClick={() => RollDice(10)}
  className="roll-btn">Roll</button>
</main>
*/