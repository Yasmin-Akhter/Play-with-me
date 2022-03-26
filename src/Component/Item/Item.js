import React from 'react';
import './Item.css';
import { BsFillCartFill } from 'react-icons/bs'



const Item = (props) => {
    const { picture, name, price } = props.item;
    // console.log(props);
    return (


        <div className='item'>
            <div className="item-info">
                <img src={picture} alt="" />
                <h5>name:{name}</h5>
                <p>Price: {price}tk</p>
            </div>
            <button className='btn-cart' onClick={() => props.addToCartBtn(props.item)} >
                <p> <BsFillCartFill className='icon' />Add to cart</p></button>
        </div>




    );
};

export default Item;