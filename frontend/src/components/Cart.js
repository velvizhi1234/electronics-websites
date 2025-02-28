import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>
        <span role="img" aria-label="cart">
          🛒
        </span>{" "}
        Your Cart
      </h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p className="price">{formatCurrency(item.price * item.quantity)}</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <span role="img" aria-label="minus">
                  ➖
                </span>
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <span role="img" aria-label="plus">
                  ➕
                </span>
              </button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-button">
              <span role="img" aria-label="remove">
                🗑️
              </span>{" "}
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;