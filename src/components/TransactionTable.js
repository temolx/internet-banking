import React, { useState, useEffect } from 'react'
import { BiDownArrow } from "react-icons/bi";
import { GrDropbox } from "react-icons/gr";
import { useSelector } from 'react-redux/es/exports'
import { useLocation } from 'react-router-dom';

function TransactionTable() {

    const location = useLocation();

    const transactions = useSelector(state => state.transactions);

    const[visible, setVisible] = useState(false);
    const[filter, setFilter] = useState('All')

    const[page, setPage] = useState(1);
    const[pageFilters, setPageFilters] = useState({
        firstEl: 0,
        lastEl: 5,
        pageList: [page, page + 1, page + 2, page + 3]
    });
    // const[inactive, setInactive] = useState({
    //     prev: true,
    //     next: true
    // });

    const[inactivePrev, setInactivePrev] = useState(true);
    const[inactiveNext, setInactiveNext] = useState(true);

    let filteredTransactions = transactions.filter((el, index) => {
        if (el.type === filter) {
            return el;
        }
        else if (filter === 'Transfer') {
            return el.type === 'Debit' || el.type === 'Credit'
        }
        else if (filter === 'All') {
            return el;
        }
    });

    useEffect(() => {
        if (location.pathname === '/transactions') {
            setFilter('Transaction');
        }
        if (location.pathname === '/transfers') {
            setFilter('Transfer');
        }
    }, [])

    useEffect(() => {
        setPageFilters({
            firstEl: 5 * page - 5,
            lastEl: 5 * page,
            pageList: page === pageFilters.pageList[3] ? [page, page + 1, page + 2, page + 3] : pageFilters.pageList
        })

        if (page !== 1) setInactivePrev(false);
        else setInactivePrev(true);

        if (filteredTransactions.length < 5 * (page)) setInactiveNext(true);
        else setInactiveNext(false);

    }, [page])

    const handlePage = (currentPage) => {
        if (filteredTransactions.length > 5 * (currentPage - 1)) {
            setPage(currentPage);
        }
    }

    const handlePrev = () => {
        if (page !== 1) {
            setPage(page - 1);

            setPageFilters({
                ...pageFilters,
                pageList: page === pageFilters.pageList[0] ? [page - 3, page - 2, page - 1, page] : pageFilters.pageList
            })
        }
    }

    const handleNext = () => {
        if (filteredTransactions.length > 5 * page) {
            setPage(page + 1);
        }
    }

if (transactions.length !== 0) {
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
                    <h3 onClick={() => {setFilter('All'); setVisible(false); setPage(1)}}>All</h3>
                    <h3 onClick={() => {setFilter('Debit'); setVisible(false); setPage(1)}}>Debit</h3>
                    <h3 onClick={() => {setFilter('Credit'); setVisible(false); setPage(1)}}>Credit</h3>
                    <h3 onClick={() => {setFilter('Transfer'); setVisible(false); setPage(1)}}>Transfer</h3>
                    <h3 onClick={() => {setFilter('Transaction'); setVisible(false); setPage(1)}}>Transaction</h3>
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

            {transactions && filteredTransactions.filter((el, index) => {
                return index >= pageFilters.firstEl && index < pageFilters.lastEl;
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

        <div className="pageNav">
            <button onClick={() => handlePrev()} className={inactivePrev ? 'page-inactive' : ''}>Prev</button>
            {pageFilters.pageList.map((currentPage, i) => (
                <button key={i} onClick={() => handlePage(currentPage)} className={currentPage === page ? 'activePage page-btn' : 'page-btn'}>{ currentPage }</button>
            ))}
            <button onClick={() => handleNext()} className={inactiveNext ? 'page-inactive' : ''}>Next</button>
        </div> 
    </div>
  )
}
else {
    return(
        <div className='empty'>
            <GrDropbox className='empty-box' />
            <h2>No transactions yet...</h2>
        </div>
    )
}
}


export default TransactionTable