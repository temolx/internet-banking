import React, { useState } from 'react'
import { BiDownArrow } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { subtract } from '../actions/AccountActions';
import { subtractFromCard, accumulateDebt } from '../actions/CardActions';
import { transfer } from '../actions/TransactionActions';
import TransactionTable from './TransactionTable';

function Transfers() {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards);

    const[visible, setVisible] = useState(false);
    const[recepient, setRecepient] = useState('');
    const[amount, setAmount] = useState(null);

    const[selectedCard, setSelectedCard] = useState({
        name: 'Select Card',
        number: 0,
        type: '',
        currentDeposit: 0
    });

    const[confirmation, setConfirmation] = useState('');
    const[error, setError] = useState('');

    const handleCardTransfer = (e) => {
        e.preventDefault();

        if (amount !== null && recepient !== '' && selectedCard.name !== 'Select Card') {
            // dispatch
            if (selectedCard.type === 'Debit') { // DEBIT
                if (selectedCard.currentDeposit > amount) {
                    dispatch(subtractFromCard(selectedCard.number, amount));
                    dispatch(subtract(selectedCard.name, amount));
                    dispatch(transfer(selectedCard.name, recepient, amount, 3, selectedCard.currentDeposit - amount, selectedCard.type));
                }
                else {
                    setError('Insufficient funds.');
                    return;
                }
            } 
            else { // CREDIT
                dispatch(accumulateDebt(selectedCard.number, amount));
                dispatch(transfer(selectedCard.name, recepient, amount, 3, selectedCard.currentDeposit + amount, selectedCard.type));
            }

            // clear errors and stuff
            setError('');
            setRecepient('');
            setAmount('');
            setSelectedCard({
                name: 'Select Card',
                number: 0,
                type: '',
                currentDeposit: 0
            });
            setConfirmation('Transfer completed');

            setTimeout(() => {
                setConfirmation('');
            }, 1500)
            }
        else {
            setError('Please fill in the required fields.');
        }
    }

  return (
    <div className='transfers'>
        <h3 className='section-title'>Card Transfers</h3>

        <form onSubmit={handleCardTransfer}>
            <div className="user-input" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                <label htmlFor="">From:</label>
                <div className="select-card">
                    <h3>{ selectedCard.name }</h3>
                    <BiDownArrow id="down-arrow" style={!visible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
                </div>

                { cards.length === 0 && visible ? <div className="dropdown-accounts"><h3 id="dropdown-empty">Add a card first</h3></div> : ( visible ? <div className="dropdown-accounts">
                        {cards && cards.map((card) => (
                            <h3 key={card.number} onClick={() => {setSelectedCard({
                                name: card.cardType === 'Debit' ? card.accountName : `...${String(card.number).slice(12)}, CREDIT CARD`,
                                number: card.number,
                                type: card.cardType,
                                currentDeposit: card.cardType === 'Debit' ? card.accountDeposit : card.debt
                            }); setVisible(false)}}>{ card.cardType + ', ' + String(card.number).slice(12) }</h3>
                ))}</div> : '' ) }
            </div>

            <div className="user-input">
                <label htmlFor="to">To:</label>
                <input type="text" name='to' onChange={(e) => setRecepient(e.target.value)} value={recepient} />
            </div>

            <div className="user-input">
                <label htmlFor="amount">Amount:</label>
                <input type="text" name='amount' onChange={(e) => setAmount(Number(e.target.value))} value={amount} />
            </div>

            <button>Send</button>
            <h4 className='error'>{ error }</h4>
            <h4 className='confirmation'>{ confirmation }</h4>
        </form>

        <hr />

        <div className="transactions">
            <h3 className='section-title'>Transactions</h3>
            <TransactionTable />
        </div> 
    </div>
  )
}

export default Transfers