import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [info,setInfo] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data =>  setInfo(data));
  },[])
  return (
    <div >
     <Header></Header>
     <div className='row col-md-8 cart-style row row-cols-1 row-cols-md-3 g-4'>
       {
         info.map(information => <Cart key={information.id} information={information}></Cart>)
       }
     </div>
     <div className='row col-md-4'>

     </div>
    </div>
  );
}

export default App;
