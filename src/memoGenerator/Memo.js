import Form from './Form';
import Header from './Header';
import './style.css';
export default function Memo() {
  return (
    <div className='containerPage'>
       <div className='pageMeme'>
            <Header />
            <Form />
       </div>
    </div>
  )
}
