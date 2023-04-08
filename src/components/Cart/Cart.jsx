import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveToCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <div>
            <h3>Borolox</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue ': 'red'}>Order summary:{cart.length}</h2>
            <p className={`bold ${cart.length === 3 ? 'yellow' : 'purple'}`}>someting</p>
            {cart.length > 2 ? <span className='purple'>Aro Kino</span> : <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveToCart(tshirt._id)}
                >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;