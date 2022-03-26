import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToCart from './components/AddToCart/AddToCart';


function App() {
  // load data to json file.
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
    const chooseOneHandler=()=>{
    const newelement = infoCart[Math.floor(Math.random() * infoCart.length)];
    setInfoCart([newelement]);
  }
 const deleteHandelar=()=>{
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
       <h2 className='fw-bold text-center mt-3 mb-2'>Pereview cart</h2>
       {
         infoCart.map(value => <AddToCart key={value.id} value={value}></AddToCart>)
        
       }
       <div className='d-flex justify-content-center'>
       <button type="button" onClick={chooseOneHandler} class="btn btn-success my-2 w-75 ">choose one</button>
       </div>
       <div className='d-flex justify-content-center'>
       <button type="button"  onClick={deleteHandelar} class="btn btn-danger w-75">Delete</button>
       </div>
       </div>
     </div>
      <div className='mt-5'>
        <h2 className='ms-2'>Question:</h2>
        <div className='row w-100 m-0'>
          <div className='col-md-6'>
          <h3>How react work?</h3>
          <p>React is one of the best JavaScript libraries used to create user interfaces.that creates user interfaces in a predictable and efficient way using declarative code.The syntax used by React components is called JSX.React has something called the virtual Document Object Model (DOM), which is used to keep a representation of the real DOM elements in memory. </p>
          </div>
          <div className='col-md-6'>
          <h3>How use state work?</h3>
          <p>useState() is a built-in function that comes with the React library.useState() should only be used inside a functional component.useState() returns a tuple. The first parameter in the array is the current state value. The second parameter is the function that will allow you to update the state value. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
