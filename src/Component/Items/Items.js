import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './items.css'

const Items = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [randItem, setRandItem] = useState([]);


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

        // getChooseOneBtn(newCart);

    }
    const getChooseOneBtn = () => {
        const rIndex = Math.floor(Math.random() * cart.length);
        // randItem = cart[rIndex];
        // const newRandItem = [...randItem];
        setRandItem(cart[rIndex]);
        // console.log(randItem[rIndex].name);
        // return randItem[rIndex].name;



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
                <h4>Selected item:{cart.length}</h4>
                <div>
                    {
                        cart.map(cartItem => (< h6 key={cartItem._id}> {cartItem.name}</h6>)

                        )
                    }

                </div>
                {
                    <p> Choosen Item:{randItem.name}</p>
                }
                <button onClick={getChooseOneBtn}>Choose One for me</button>


                <button>Choose again</button>
            </div>
        </div >
    );
};

export default Items;