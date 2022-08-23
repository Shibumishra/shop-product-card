import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const CartItem = ({ item }) => {
    const { id, img, name, title, price, ratings } = item;

    return (
        <div className="basic-card basic-card-light">
            <div className="card-content">
                <img src={img} alt={name} />
                <p className="card-title">{name}</p>
                <p className="card-text">{title}</p>
                <p className={`card-price price${id}`}>$ {price}</p>
                <span>
                    {[0, 0, 0, 0, 0].map((el, i) => (
                        <>
                            {i < Math.floor(ratings) ? <AiFillStar className='fill-star'/> : <AiOutlineStar className='outline-star' />}
                        </>
                    ))}
                </span>
            </div>
            <button className={`card-btn btn${id}`} >Add to card</button>
        </div>
    )
}

export default CartItem;