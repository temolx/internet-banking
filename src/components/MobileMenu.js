import React from 'react'
import { HiOutlineClipboardList } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { TbArrowsUpDown } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiWallet, BiTransferAlt, BiCreditCard, BiLogOut } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

function MobileMenu({ setMenuVisible, menuVisible }) {

  const location = useLocation();

  return (
    <div className='sidebar mobileMenu'>
        <IoMdClose id="close-icon" onClick={() => setMenuVisible(false)} />
          <ul className='navigation' onClick={() => setMenuVisible(false)} >
              <li><Link to='/main' id={location.pathname === '/main' ? 'active' : ''}><HiOutlineClipboardList id="icon" /><h3>Overview</h3></Link></li>
              <li><Link to='/main'><BiWallet id="icon" /><h3>Accounts</h3></Link></li>
              <li><Link to='/transfers' id={location.pathname === '/transfers' ? 'active' : ''}><BiTransferAlt id="icon" /><h3>Transfers</h3></Link></li>
              <li><Link to='/main'><FiFileText id="icon" /><h3>Statements</h3></Link></li>
              <li><Link to='/cards' id={location.pathname === '/cards' ? 'active' : ''}><BiCreditCard id="icon" /><h3>Cards</h3></Link></li>
              <li><Link to='/transactions' id={location.pathname === '/transactions' ? 'active' : ''}><TbArrowsUpDown id="icon" /><h3>Transactions</h3></Link></li>
          </ul>

          <ul className='settings' onClick={() => setMenuVisible(false)} >
              <li><FiSettings id="icon" /><h3>Settings</h3></li>
              <li id="profile-btn"><Link to='/profile' id={location.pathname === '/profile' ? 'active' : ''}><CgProfile id="icon" /><h3>Profile</h3></Link></li>
              <li id="log-btn"><button><BiLogOut id="icon" /><h3>Log Out</h3></button></li>
          </ul>
      </div>
  )
}

export default MobileMenu