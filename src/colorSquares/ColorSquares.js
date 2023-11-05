import { useState } from "react";
import { Data, colors } from './data';
// import Square from "./Square";
import './style.css';

export default function ColorSquares() {
    const [showColors, setShowColors] = useState(colors); // random

    function randomColor() {

        const colors = showColors;
        const random = Math.floor(Math.random() * colors.length)
        const colorEle = colors[random];

        console.log(colorEle)

        setShowColors(showColors);
    }

    console.log(showColors) // get array to colors

    let elementData = showColors.map((ele, i) => {
        return <div
            className="square"
            key={i}
            onClick={randomColor}
            style={{background: ele}} // showColors
        >
        </div>
    })

    return (
        <div className="colorSquare">
            <div className="parent">
                {elementData}
            </div>
        </div>
    )
}

// export default function ColorSquares() {
//     const [data, setData] = useState(Data); // mapping
//     const [showColors, setShowColors] = useState(colors); // random

//     function randomColor(id) {
//         // console.log(id)
//         const colors = showColors;
//         const random = Math.floor(Math.random() * colors.length)
//         const colorEle = colors[random];

//         // console.log(colorEle)
//         // setData(prevData => ({...prevData, id: colorEle}))
//         setShowColors(showColors => ([...showColors, colorEle]));
//     }

//     console.log(showColors) // get array to colors

//     let elementData = data.map((ele, i) => {
//         return <div
//             className="square"
//             key={i}
//             onClick={() => randomColor(ele.id)}
//             style={{background: showColors}}
//         >
//         </div>
//     })

//     return (
//         <div className="colorSquare">
//             <div className="parent">
//                 {elementData}
//             </div>
//         </div>
//     )
// }
