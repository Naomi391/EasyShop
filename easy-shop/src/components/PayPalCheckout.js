import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const PayPalCheckout = ({ currency, createOrder, onApprove }) => {
  const [{ options }, dispatch] = usePayPalScriptReducer();
  
  
  const [localCurrency, setLocalCurrency] = useState(options.currency);

  
  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setLocalCurrency(newCurrency);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: newCurrency,
      },
    });
  };

  const handleCreateOrder = (data, actions) => {
    return createOrder(data, actions);
  };

 
  const handleApproveOrder = (data, actions) => {
    return onApprove(data, actions);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID", ...options }}>
      <div>
        {/* Render the currency selection dropdown */}
        <select value={localCurrency} onChange={handleCurrencyChange}>
          <option value="USD">💵 USD</option>
          <option value="EUR">💶 Euro</option>
        </select>
        
        {/* Render PayPal buttons */}
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => handleCreateOrder(data, actions)}
          onApprove={(data, actions) => handleApproveOrder(data, actions)}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;
