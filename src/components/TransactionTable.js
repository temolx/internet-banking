import React from 'react'
import { useSelector } from 'react-redux/es/exports'

function TransactionTable() {

    const transactions = useSelector(state => state.transactions)

  return (
    <div className='transaction-table'>
        <div className="filters">
            <h3>Filter By</h3>

            <select>
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
                <option value="transfer">Transfer</option>  
            </select>
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
                    <td id="transaction-type"><span>Transaction</span></td>
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