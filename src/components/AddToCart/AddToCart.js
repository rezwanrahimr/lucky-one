import React from 'react';

const AddToCart = ({pro}) => {
    console.log(pro)
    return (
        <div>
            
            <h2 className='some-style'>{pro.name}</h2>
            
        </div>
    );
};

export default AddToCart;