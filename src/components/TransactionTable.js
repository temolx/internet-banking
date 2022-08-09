import React, { useState, useEffect } from 'react'
import { BiDownArrow } from "react-icons/bi";
import { useSelector } from 'react-redux/es/exports'
import { useLocation } from 'react-router-dom';

function TransactionTable() {

    const location = useLocation();

    const transactions = useSelector(state => state.transactions);

    const[visible, setVisible] = useState(false);
    const[filter, setFilter] = useState('All')

    useEffect(() => {
        if (location.pathname === '/transactions') {
            setFilter('Transaction');
        }
        if (location.pathname === '/transfers') {
            setFilter('Transfer');
        }
    }, [])

  return (
    <div className='transaction-table'>
        <div className="filters">
            <h3>Filter By</h3>

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
                    <h3 onClick={() => {setFilter('Transaction'); setVisible(false)}}>Transaction</h3>
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

            {transactions && transactions.filter((el) => {
                if (el.type === filter) {
                    return el;
                }
                else if (filter === 'Transfer') {
                    return el.type === 'Debit' || el.type === 'Credit'
                }
                else if (filter === 'All') {
                    return el;
                }
            }).map((transaction) => (
                <tr id="table-content">
                    <td id={transaction.type === 'Transaction' ? 'type-transaction' : (transaction.type === 'Debit' ? 'type-transfer-debit' : 'type-transfer-credit')}><span>{ transaction.type }</span><div id='transBG'></div></td>
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