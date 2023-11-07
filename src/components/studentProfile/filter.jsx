import React, { useState } from 'react';
import './filter.css';

const FilterComponent = ({options}) => {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');

  const handleOption1Change = (e) => {
    setOption1(e.target.value);
  };

  const handleOption2Change = (e) => {
    setOption2(e.target.value);
  };

  const handleOption3Change = (e) => {
    setOption3(e.target.value);
  };

  return (
    <div className="filter-container">
    <div className="option1">
        <select value={option1} onChange={handleOption1Change}>
        <option value="">Select Option 1</option>
        {/* Add options for Option 1 */}
        </select>
    </div>
      
    <div className="option2">
        <select value={option2} onChange={handleOption2Change}>
        <option value="">Select Option 2</option>
        {/* Add options for Option 2 */}
      </select>
    </div>
      
    <div className="option3">
    <select value={option3} onChange={handleOption3Change}>
        <option value="">Select Option 3</option>
        {/* Add options for Option 3 */}
      </select>
    </div>
      
    </div>
  );
};

export default FilterComponent;
