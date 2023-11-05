import { DataTravel } from './DataTravel';
import Header from './Header';
import Card from './Card';
import './style.css';
export default function PageTravel() {

  const myData = DataTravel.map((travel, i) => {
    return <Card key={i} src={travel.srcImg} name={travel.country} city={travel.cityName} description={travel.description}/>
  })
  return (
    <div className='containerPage'>
      <div className='pageTravel'>
      <Header />
      {myData}
      </div>
    </div>
  )
}
