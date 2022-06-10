import React, { ReactNode } from 'react'
import './Button.scss'

interface BtnTypes {
    children: ReactNode;
    handleClickEvent?: () => void;
    lg?: boolean;
}

const Button = ({children, handleClickEvent, lg}: BtnTypes) => {
  return (
    <button className={!lg ? "btn_container" : "lg_btn_container"} onClick={handleClickEvent}>
        {children}
    </button>
  )
}

export default Button