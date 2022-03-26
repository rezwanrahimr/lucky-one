import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
  const {handleAddToCart,information} = props;
  const {name,picture,price,id} =  information;
  console.log(props)
    return (
        
    
  <div className='col'>
    <div className='card h-100'>
        <img src={picture}className='card-img-top' alt="" />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <small className='text-muted'>{price}</small>
      </div>
      <div className='bye-button'>
      <button onClick={()=>handleAddToCart({id,name})} type="button" class="btn btn-warning w-100">Add to Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
     
     
      </div>
    </div>
  </div>

       
    );
};

export default Cart;