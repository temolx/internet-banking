import React, { useState } from 'react'
import { BiDownArrow } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { transfer } from '../actions/TransactionActions';
import { subtract } from '../actions/AccountActions';
import TransactionTable from './TransactionTable';

function Transactions() {

    const dispatch = useDispatch();
    const accounts = useSelector(state => state.accounts);

    const[visible, setVisible] = useState(false);
    const[selectedAccount, setSelectedAccount] = useState('Select Account');
    const[recepient, setRecepient] = useState('');
    const[amount, setAmount] = useState(null);
    const[currentDeposit, setCurrentDeposit] = useState(0);
    const[error, setError] = useState({
        digitCheck: '',
        empty: ''
    });
    const[confirmation, setConfirmation] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedAccount !== 'Select Account' && recepient !== '' && amount !== null) {
            if (typeof amount === 'number') {
                dispatch(transfer(selectedAccount, recepient, amount, 5, currentDeposit - amount, "Transaction")); // add date
                
                // subtracting from selected account
                dispatch(subtract(selectedAccount, Number(amount)));

                setError({
                    digitCheck: '',
                    empty: ''
                });
                setSelectedAccount('Select Account');
                setAmount('');
                setRecepient('');
                setConfirmation('Transaction completed.');

                setTimeout(() => {
                    setConfirmation('');
                }, 1500)
            }
            else {
                setError({
                    digitCheck: 'Invalid amount.',
                    empty: ''
                });
            }
        }
        else {
            setError({
                digitCheck: '',
                empty: 'Please fill in the required fields.'
            });
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
                            <h3 key={account.name} onClick={() => {setSelectedAccount(account.name); setCurrentDeposit(account.deposit); setVisible(false)}}>{ account.name }, ${ account.deposit }</h3>
                        ))}
                    </div> : ''}
                </div>

                <div className="trans-input">
                    <label htmlFor="to">To:</label>
                    <input type="text" name='to' onChange={(e) => setRecepient(e.target.value)} value={recepient} />
                </div>

                <div className="trans-input">
                    <label htmlFor="amount">Amount:</label>
                    <input type="text" name='amount' onChange={(e) => setAmount(Number(e.target.value))} value={amount} />
                </div>

                <button>Transfer</button>
                <h4>{ error.digitCheck }</h4>
                <h4>{ error.empty }</h4>
                <h4 className='confirmation'>{ confirmation }</h4>
            </form>
        </div>

        <hr />

        <div className="transactions">
            <h3 className='section-title'>Transactions</h3>
            <TransactionTable />
        </div>
    </div>
  )
}

export default Transactions