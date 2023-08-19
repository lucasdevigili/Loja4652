import React from 'react';

const CELLMask = ({ value, onChange }) => {
    const handleChange = (event) => {
        const inputValue = event.target.value;
        const cleanedValue = inputValue.replace(/\D/g, '');
        const maskedValue = cleanedValue.replace(
          /(\d{2})(\d{5})(\d{4})/,
          '($1) $2-$3'
        );
    
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
export default CELLMask;