import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToCart from './components/AddToCart/AddToCart';

function App() {
  const [info,setInfo] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data =>  setInfo(data));
  },[])
  const [infoCart,setInfoCart] = useState([]);
  const handleAddToCart =(information)=>{
    const newCart = [...infoCart,information];
    setInfoCart(newCart);
  }
  console.log(infoCart)
 
  const chooseMeHandler=()=>{
    const newelement = infoCart[Math.floor(Math.random() * infoCart.length)];
    setInfoCart([newelement]);
  }
 const deletHandelar=()=>{
   setInfoCart([]);
 }
  return (
    <div className='mx-auto' >
     <Header></Header>
     <div className='row w-100 m-0'>
     <div className='col-md-8 cart-style row row-cols-1 row-cols-md-3 g-4'>
       {
         info.map(information => <Cart key={information.id} information={information}
         handleAddToCart={handleAddToCart}></Cart>)
       }
     </div>
     <div className='col-md-4 '>
       <h2 className='fw-bold text-center mt-3'>Pereview cart</h2>
       {
         infoCart.map(pro => <AddToCart key={pro.id} pro={pro}></AddToCart>)
        
       }
       <div className='d-flex justify-content-center'>
       <button type="button" onClick={chooseMeHandler} class="btn btn-success my-2 w-75 ">choose one</button>
       </div>
       <div className='d-flex justify-content-center'>
       <button type="button"  onClick={deletHandelar} class="btn btn-danger w-75">Delete</button>
       
       </div>
       
     </div>
     </div>
    </div>
  );
}

export default App;
