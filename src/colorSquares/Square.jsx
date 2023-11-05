
export default function Square({ id,randomColor }) {
  // console.log(id)
  return (
    <div className="square"
      onClick={() => randomColor(id)}
      style={{ backgroundColor: { id } }}>

    </div>
  )
}
