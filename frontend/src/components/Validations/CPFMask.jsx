import React, { useState } from 'react';

const CPFMask = ({ value, onChange }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const maskedValue = inputValue
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    onChange(maskedValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className='input'
    />
  );
};

export default CPFMask;