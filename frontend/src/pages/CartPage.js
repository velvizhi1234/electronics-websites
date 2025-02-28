import React from 'react';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

function CartPage() {
  return (
    <div className="cart-page">
      <Cart />
      <Link to="/checkout" className="checkout-button">
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default CartPage;