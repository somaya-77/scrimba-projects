

export default function Card(props) {
  return (
    <div className='card'>
      <div className='image'>
        <img src={props.src}/>
      </div>

      <div className='details'>

          <div className='location'>
            <img src='travel/Fill 219.png' />
            <span>{props.name}</span>
            <span>View on Google Maps</span>
          </div>

          <h1>{props.city}</h1>

          <p className='date'>27 May, 2021 - 8 Jun, 2021</p>

          <p>{props.description}</p>
      </div>
    </div>
  )
}
