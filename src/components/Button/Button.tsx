import React, { ReactNode } from 'react'
import './Button.scss'

interface BtnTypes {
    children: ReactNode;
    handleClickEvent?: () => void ;
}

const Button = ({children, handleClickEvent}: BtnTypes) => {
  return (
    <button className="btn_container" onClick={handleClickEvent}>
        {children}
    </button>
  )
}

export default Button