import React, { useState } from 'react'
import { RiAddCircleLine } from "react-icons/ri";
import NewAccount from './NewAccount';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Overview() {

    const accounts = useSelector(state => state.accounts);

    const[formVisible, setFormVisible] = useState(false);

    const addNewAccount = () => {
        setFormVisible(true);
    }

  return (
    <div className='overview'>
        {formVisible ? <NewAccount setFormVisible={setFormVisible} /> : ''}

        <div className="general">
            <h1>Good Morning, Jasmine</h1>

            <div className="accounts-container">
                <h3 className='section-title'>Account Balance</h3>

                <div className="all-accounts">
                    {accounts && accounts.map((account) => (
                        <div className="accounts new-account">
                            <h1> {account.name} Account </h1>
                            <h2 className='depositAmount'>${ account.deposit }</h2>
                        </div>
                    ))}
                    
                <div className="new-account">
                    <h3>Add New Account</h3>
                    <RiAddCircleLine id="add-icon" onClick={addNewAccount} />
                </div>
                </div>
                
            </div>
        </div>

        <hr />

        <div className="transactions">
            <h3 className='section-title'>Transactions</h3>

            <div className="filters">
                <h3>Filter By</h3>
                <select>
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                    <option value="transfer">Transfer</option>  
                </select>
            </div>


        </div>

    </div>
  )
}

export default Overview