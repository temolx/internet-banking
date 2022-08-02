import React from 'react'
import { HiOutlineClipboardList } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { TbArrowsUpDown } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiWallet, BiTransferAlt, BiCreditCard, BiLogOut } from "react-icons/bi";

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='navigation'>
            <li><HiOutlineClipboardList id="icon" /><h3>Overview</h3></li>
            <li><BiWallet id="icon" /><h3>Accounts</h3></li>
            <li><BiTransferAlt id="icon" /><h3>Transfers</h3></li>
            <li><FiFileText id="icon" /><h3>Statements</h3></li>
            <li><BiCreditCard id="icon" /><h3>Cards</h3></li>
            <li><TbArrowsUpDown id="icon" /><h3>Transactions</h3></li>
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