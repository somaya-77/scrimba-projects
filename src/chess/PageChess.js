import { useState } from "react";
import {Data} from './data';
import Square from './Square';
import './style.css';



export default function PageChess() {
    const [square, setSquare] = useState(Data)

    const dataSquare = square.map(ele => {
        return <Square key={ele.id} on={ele.on}/>
    })
  return (
    <div className="pageChess">
       <div className="parent">

        {dataSquare}
       </div>
    </div>
  )
}


