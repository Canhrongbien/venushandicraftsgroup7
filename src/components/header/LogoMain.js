import './LogoMain.scss'
import React from 'react'
import logomain from '../../assets/images/Logo-Venus-main.png';
function LogoMain() {
  return (
    <div className='logo-main'>
        <a href="/">
            <img src={logomain} alt="logo" className='logo-main-logo' />
        </a>
    </div>
  )
}

export default LogoMain
