import React from 'react'
import Button from '../../components/Button/Button'
import { logo } from '../../constants/images'
import './Header.scss'

const Header = () => {
  return (
    <header className='header_container'>
      <div className='img_conatainer'>
        <img src={logo} alt="logo_img" />
      </div>
      <div className='header_btn'>
        <Button>Login</Button>
      </div>
      
    </header>
  )
}

export default Header