import React, { useState } from 'react'
import { BiDownArrow } from "react-icons/bi";
import { useSelector } from 'react-redux/es/exports'

function TransactionTable() {

    const transactions = useSelector(state => state.transactions);
    const accounts = useSelector(state => state.accounts);

    const[visible, setVisible] = useState(false);
    const[filter, setFilter] = useState('All')

  return (
    <div className='transaction-table'>
        <div className="filters">
            <h3>Filter By</h3>

                {/* <option value="debit">Debit</option>
                <option value="credit">Credit</option>
                <option value="transfer">Transfer</option>   */}


            <div className="filter-dropdown" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>   
                <div className="select-filter">
                    <h3>{ filter }</h3>
                    <BiDownArrow id="down-arrow" style={!visible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
                </div>

                {visible ? <div className='filter-dropdown-select'>
                    <h3 onClick={() => {setFilter('All'); setVisible(false)}}>All</h3>
                    <h3 onClick={() => {setFilter('Debit'); setVisible(false)}}>Debit</h3>
                    <h3 onClick={() => {setFilter('Credit'); setVisible(false)}}>Credit</h3>
                    <h3 onClick={() => {setFilter('Transfer'); setVisible(false)}}>Transfer</h3>
                </div> : '' }
            </div>
            </div>

        <table>
            <tr className='table-titles'>
                <td>Type</td>
                <td>Date</td>
                <td>Recepient</td>
                <td>Amount</td>
                <td>Balance</td>
            </tr>

            {transactions && transactions.map((transaction) => (
                <tr id="table-content">
                    <td id="transaction-type"><span>{ transaction.type }</span></td>
                    <td>{ transaction.date }</td>
                    <td>{ transaction.recepient }</td>
                    <td>${ transaction.amount }</td>
                    <td>${ transaction.after }</td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default TransactionTable