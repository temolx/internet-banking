import React, { useState } from 'react'
import { RiAddCircleLine } from "react-icons/ri";
import NewAccount from './NewAccount';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import TransactionTable from './TransactionTable';

function Overview() {

    const accounts = useSelector(state => state.accounts);

    const[formVisible, setFormVisible] = useState(false);

    const addNewAccount = () => {
        setFormVisible(true);
    }

  return (
    <div className='overview'>
        {formVisible ? <div>
            <NewAccount setFormVisible={setFormVisible} />
            <div className="dark-bg"></div>
        </div> : ''}

        <div className="general">
            <h1>Good Morning, Jasmine</h1>

            <div className="accounts-container">
                <h3 className='section-title'>Account Balance</h3>

                <div className="all-accounts">
                    {accounts && accounts.map((account) => (
                        <div className="accounts">
                            <h1> {account.name} Account </h1>
                            <h2 className='depositAmount'>${ account.deposit }</h2>
                        </div>
                    ))}
                    
                <div className="accounts new-account">
                    <h3>Add New Account</h3>
                    <RiAddCircleLine id="add-icon" onClick={addNewAccount} />
                </div>
                </div>
                
            </div>
        </div>

        <hr />

        <div className="transactions">
            <h3 className='section-title'>Transactions</h3>
            <TransactionTable />
        </div>

    </div>
  )
}

export default Overview