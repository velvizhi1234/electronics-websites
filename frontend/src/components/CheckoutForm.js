import React, { useState } from 'react';

function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="text" name="city" placeholder="City" onChange={handleChange} />
      <input type="text" name="state" placeholder="State" onChange={handleChange} />
      <input type="text" name="zip" placeholder="Zip" onChange={handleChange} />
      <select name="paymentMethod" onChange={handleChange}>
        <option value="">Select Payment Method</option>
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="crypto">Crypto</option>
      </select>
      <button type="submit">
        <span role="img" aria-label="place-order">
          
        </span>{' '}
        Place Order
      </button>
    </form>
  );
}

export default CheckoutForm;