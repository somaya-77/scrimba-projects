import Header from './Header';
import Gallery from './Gallery';
import Title from './Title';
import Main from './Main';
import './style.css';

export default function Airbnb() {
  return (
    <div className='container'>
      <div className='airbnb'>
        <Header />
        <Gallery />
        <Title />
        <Main />
      </div>
    </div>
  )
}
