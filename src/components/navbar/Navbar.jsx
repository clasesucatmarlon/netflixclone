import React from 'react'
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';

import LogoNetflix from '../../assets/images/Logo-Netflix-500x281.png'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={LogoNetflix} alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>

        <div className="right">
          <Search className="icon"/>
          <span>KID</span>
          <Notifications className="icon"/>
          <img src="https://uifaces.co/our-content/donated/fyXUlj0e.jpg" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
