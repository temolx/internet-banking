import React, { useState } from 'react'
import { BiDownArrow } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { transfer } from '../actions/TransactionActions';
import { subtract } from '../actions/AccountActions';

function Transactions() {

    const dispatch = useDispatch();
    const accounts = useSelector(state => state.accounts);

    const[visible, setVisible] = useState(false);
    const[selectedAccount, setSelectedAccount] = useState('Select Account');
    const[recepient, setRecepient] = useState('');
    const[amount, setAmount] = useState(0);
    const[currentDeposit, setCurrentDeposit] = useState(0);
    const[error, setError] = useState('');
    const[confirmation, setConfirmation] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedAccount !== 'Select Account' && recepient !== '' && Number(amount) !== 0) {
            dispatch(transfer(selectedAccount, recepient, Number(amount), 5, currentDeposit - Number(amount))); // add date
            
            // subtracting from selected account
            dispatch(subtract(selectedAccount, Number(amount)));

            setError('');
            setConfirmation('Transaction completed.');
        }
        else {
            setError('Please fill in the required fields.');
            setConfirmation('');
        }
    }

  return (
    <div className='transactions-page'>
        <div className="send">
            <h3 className='section-title'>Transfer Funds</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="trans-input" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                    <label htmlFor="">From:</label>
                    <div className="select-account">
                        <h3>{ selectedAccount }</h3>
                        <BiDownArrow id="down-arrow" style={!visible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
                    </div>

                    {visible ? <div className="dropdown-accounts">
                        {accounts && accounts.map((account) => (
                            <h3 key={account.name} onClick={() => {setSelectedAccount(account.name); setCurrentDeposit(account.deposit)}}>{ account.name }, ${ account.deposit }</h3>
                        ))}
                    </div> : ''}
                </div>

                <div className="trans-input">
                    <label htmlFor="to">To:</label>
                    <input type="text" name='to' onChange={(e) => setRecepient(e.target.value)} />
                </div>

                <div className="trans-input">
                    <label htmlFor="amount">Amount:</label>
                    <input type="text" name='amount' onChange={(e) => setAmount(e.target.value)} />
                </div>

                <button>Transfer</button>
                <h4>{ error }</h4>
                <h4>{ confirmation }</h4>
            </form>
        </div>
    </div>
  )
}

export default Transactions