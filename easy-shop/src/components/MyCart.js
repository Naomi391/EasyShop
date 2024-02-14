import React, { useState } from 'react';

const MyCart = ({ products }) => {
  const [currency, setCurrency] = useState("USD");
  const [cartItems, setCartItems] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  // Function to add an item to the cart
  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      const updatedCart = [...cartItems, { ...productToAdd, quantity: 1 }];
      setCartItems(updatedCart);
    }
  };

  // Function to update quantity of an item in the cart
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Function to remove an item from the cart
  const removeItem = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Event handler for currency change
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  // Event handler for payment method change
  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  // Function to handle payment
  const handlePayment = () => {
    if (selectedPaymentMethod === "Binance") {
      alert("Payment successful using Binance.");
    } else if (selectedPaymentMethod === "M-pesa") {
      alert("Payment successful using M-pesa.");
    } else {
      alert("Please select a payment method.");
    }
  };

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <p>{item.title} - ${item.price}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
          <li>
            <strong>Total:</strong> ${calculateTotalPrice()}
          </li>
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div>
        <select value={currency} onChange={handleCurrencyChange}>
          <option value="USD">💵 USD</option>
          <option value="EUR">💶 Euro</option>
        </select>
      </div>
      <div>
        <select value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
          <option value="">Select a payment method</option>
          <option value="Binance">Binance</option>
          <option value="M-pesa">M-pesa</option>
        </select>
        <button onClick={handlePayment} disabled={!selectedPaymentMethod}>Proceed Payment</button>
      </div>
    </div>
  );
};

export default MyCart;