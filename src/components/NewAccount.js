import React, { useState } from 'react'
import { RiCloseFill } from "react-icons/ri";
import { addAccount } from '../actions/AccountActions';
import { useDispatch, useSelector } from 'react-redux/es/exports';

function NewAccount({ setFormVisible }) {

  const dispatch = useDispatch();
  const accounts = useSelector(state => state.accounts)

  const[name, setName] = useState('');
  const[deposit, setDeposit] = useState(0);

  const[error, setError] = useState('');

  const AddAccount = (e) => {
    e.preventDefault();

    if (accounts.some(el => el.name === name)) {
      setError('Account already exists.');
    }
    else if (name === '') {
      setError('Name is required.');
    }
    else {
      dispatch(addAccount(name, Number(deposit)));
      setFormVisible(false);
      setError('');
    }

    
  }
  
  return (
    <form className='newAccount'>
        <RiCloseFill id="close-btn" onClick={() => setFormVisible(false)} />

        <div className="account-input">
            <label htmlFor="accountName">Account Name</label>
            <input type="text" name="accountName" onChange={(e) => setName(e.target.value)} />
            <h4>{ error }</h4>
        </div>

        <div className="account-input">
            <label htmlFor="amount">Deposit Amount</label>
            <input type="text" name="amount" onChange={(e) => setDeposit(e.target.value)} />
        </div>

        <button onClick={(e) => AddAccount(e)}>Add</button>
    </form>
  )
}

export default NewAccount;