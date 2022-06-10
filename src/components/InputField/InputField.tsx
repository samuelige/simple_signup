import React, { ChangeEvent } from 'react'
import './InputField.scss'

interface I_InputData {
    label: string;
    type: string,
    value: string | number,
    name: string,
    handleChange?:  (e: ChangeEvent<HTMLInputElement>) => void;
    
};

const InputField = ({label, type, name, value, handleChange}: I_InputData) => {
  return (
    <div className='inputField_container'>
        <label>{label}</label>
        <input className='input_field'
            type={type} 
            name={name}
            value={value}
            onChange={handleChange}
        /> 
    </div>
  )
}

export default InputField