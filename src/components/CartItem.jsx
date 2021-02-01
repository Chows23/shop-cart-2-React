import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({selectedItems, remove}) => {

  // console.log(selectedItems);
  let totalPrice = 0;
  for(let i =0; i < selectedItems.length; i++) {
    totalPrice += selectedItems[i].price
  }

  if(selectedItems.length === 0) {
    return (
      <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        <li className="cart-item">
          this is empty now
        </li>
      </ul>
      
      <div className="total">Total: ${totalPrice.toFixed(2)}</div>
      <Link to="/">
        <div className="keep-shopping">
          <i className="fas fa-chevron-left">
          </i>Keep Shopping
          </div>
      </Link>
    </aside>
    )
  }

  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        {selectedItems.map((item, index) => (
          <li className="cart-item" key={index}>
          <div className="name">{item.name}</div>
          <div className="price">@ ${item.price}</div>
          <button
            onClick={()=>remove(item)}
          ><i className="far fa-times-circle"></i></button>
        </li>
        ))}
      </ul>
      
      <div className="total">Total: ${totalPrice.toFixed(2)}</div>
      <Link to="/">
        <div className="keep-shopping">
          <i className="fas fa-chevron-left">
          </i>Keep Shopping
        </div>
      </Link>
    </aside>
  );
}

export default CartItem;