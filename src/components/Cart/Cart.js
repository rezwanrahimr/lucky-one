import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    console.log(props);
    return (
        
    
  <div className='col'>
    <div className='card h-100'>
        <img src={props.information.picture}className='card-img-top' alt="" />
      <div className='card-body'>
        <h5 className='card-title'>{props.information.name}</h5>
        <small className='text-muted'>{props.information.price}</small>
      </div>
      <div className='bye-button'>
      <button type="button" class="btn btn-warning w-100">Add to Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
     
     
      </div>
    </div>
  </div>

       
    );
};

export default Cart;