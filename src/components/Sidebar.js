import React from 'react'
import { HiOutlineClipboardList } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { TbArrowsUpDown } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiWallet, BiTransferAlt, BiCreditCard, BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='navigation'>
            <li><Link to='/'><HiOutlineClipboardList id="icon" /><h3>Overview</h3></Link></li>
            <li><Link to='/'><BiWallet id="icon" /><h3>Accounts</h3></Link></li>
            <li><Link to='/'><BiTransferAlt id="icon" /><h3>Transfers</h3></Link></li>
            <li><Link to='/'><FiFileText id="icon" /><h3>Statements</h3></Link></li>
            <li><Link to='/cards'><BiCreditCard id="icon" /><h3>Cards</h3></Link></li>
            <li><Link to='/transactions'><TbArrowsUpDown id="icon" /><h3>Transactions</h3></Link></li>
        </ul>

        <ul className='settings'>
            <li><FiSettings id="icon" /><h3>Settings</h3></li>
            <li><CgProfile id="icon" /><h3>Profile</h3></li>
            <li id="log-btn"><button><BiLogOut id="icon" /><h3>Log Out</h3></button></li>
        </ul>
    </div>
  )
}

export default Sidebar