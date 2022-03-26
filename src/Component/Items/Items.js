import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './items.css'

const Items = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const addToCartBtn = (item) => {

        console.log(item.name);

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
                <h3>cart</h3>
            </div>
        </div>
    );
};

export default Items;