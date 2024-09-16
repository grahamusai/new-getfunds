// components/AlertBox.js
import React from 'react';

// @ts-ignore
const AlertBox = ({ type, message }) => {
  const alertClass = `p-4 mb-4 ${type === 'success' ? 'bg-teal-600' : 'bg-red-500'} text-white`;

  return (
    <div className={alertClass}>
      {message}
    </div>
  );
};

export default AlertBox;
