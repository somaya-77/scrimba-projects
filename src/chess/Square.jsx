export default function Square({on}) {
    return (
       
            <div className="square" style={on ? {background: "#000"} : {background: "#fff"}}></div>
      
    )
}
