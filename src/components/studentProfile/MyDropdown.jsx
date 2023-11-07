import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import './MyDropdown.css';


const MyDropdown = (props) => {

 const [selectedOption, setSelectedOption] = useState(null);
 const handleChange = (selectedOption) => {
  setSelectedOption(selectedOption);
  props.input(selectedOption, props.option[0].label);
 };

 return (
  <>
   {/* <label>{props.value}</label> */}
   <Select
    value={selectedOption}
    options={props.option}
    onChange={handleChange}
    isSearchable={true}
    placeholder={props.value}
   />
  </>

 );
};
export default MyDropdown;