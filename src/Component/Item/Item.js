import React from 'react';
import './Item.css';



const Item = (props) => {
    const { picture, name, price } = props.item;
    // console.log(props);
    return (


        <div className='item'>
            <img src={picture} alt="" />
            <h5>name:{name}</h5>
            <p>Price: {price}tk</p>
            <button className='btn-cart' onClick={() => props.addToCartBtn(props.item)} >
                <p>Add to cart</p></button>
        </div>




    );
};

export default Item;