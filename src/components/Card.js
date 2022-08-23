import React from 'react';
import Data from './Data';
import CartItem from './CartItem';

const Card = () => {

    return (
        <div div className="card-category">
            {Data.map((item, index) => (
                <CartItem item={item} key={index} />
            ))}
        </div>
    )
}

export default Card;