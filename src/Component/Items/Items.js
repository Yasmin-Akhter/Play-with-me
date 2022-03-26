import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './items.css'

const Items = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const addToCartBtn = (item) => {


        const newCart = [...cart, item];
        if (newCart.length <= 4) {
            setCart(newCart);
        }
        else {
            alert('Sorry!! You have reached maximum products');
        }


        return newCart;
    }
    const getChooseOneBtn = () => {
        let newCartItem = addToCartBtn();
        console.log(newCartItem);

    }


    return (
        <div className="shop-container">
            <div className="item-container">

                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                        addToCartBtn={addToCartBtn}
                    ></Item>)
                }

            </div>
            <div className="cart-container">

                <h3>Order summery</h3>
                <h5>Selected item:{cart.length}</h5>
                <div>
                    {
                        cart.map(cartItem => (< h5 key={cartItem._id}> {cartItem.name}</h5>)

                        )
                    }

                </div>
                <button onClick={getChooseOneBtn}>Choose One for me</button>
            </div>
        </div >
    );
};

export default Items;