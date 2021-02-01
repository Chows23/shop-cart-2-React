import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ selectedItems }) => {

  let item = selectedItems.length > 1 ? 'items' : 'item'

  // console.log(selectedItems);
  let totalPrice = 0;
  for (let i = 0; i < selectedItems.length; i++) {
    totalPrice += selectedItems[i].price;
  }

  return (
    <Link className="cart-icon" to="/cart">
      <div className="cart-icon-values">
        <div className="cart-total">${totalPrice.toFixed(2)}</div>
        <div className="in-cart-items">{selectedItems.length} {item}</div>
      </div>
      <i className="fas fa-shopping-cart"></i>
    </Link >
  );
}

export default Cart;