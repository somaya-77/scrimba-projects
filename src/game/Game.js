import { useState } from 'react';
import Numbers from './Numbers';
import './style.css';
function getBoxes() {
  const newBox = [];
  for(let i = 0; i < 10; i++){
    newBox.push({
      value: Math.ceil(Math.random() * 7),
      isHeld: false
    })

  }
  return newBox
}

export default function Game() {
  const [dice, setDice] = useState(getBoxes())

  console.log(dice)

  const diceElement = dice.map((die, i) => <Numbers key={i} die={die.value}/>)

  return (
    <div className="container">
        <div className="game">

            <div>
              <h1>Tenzies</h1>
              <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>

            {diceElement}
            <button>Roll</button>
        </div>
    </div>
  )
}
