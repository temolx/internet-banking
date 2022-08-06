import React, { useState } from 'react'
import { BiDownArrow } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function Transfers() {

    const cards = useSelector(state => state.cards);

    const[visible, setVisible] = useState(false);
    const[recepient, setRecepient] = useState('');
    const[amount, setAmount] = useState('');

    const[selectedCard, setSelectedCard] = useState('Select Card');

    const[confirmation, setConfirmation] = useState('');

    const handleCardTransfer = () => {
        
    }

  return (
    <div className='transfers'>
        <h3 className='section-title'>Card Transfers</h3>

        <form onSubmit={handleCardTransfer}>
            <div className="user-input" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                <label htmlFor="">From:</label>
                <div className="select-card">
                    <h3>{ selectedCard }</h3>
                    <BiDownArrow id="down-arrow" style={!visible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
                </div>

                { visible ? <div className="dropdown-accounts">
                        {cards && cards.map((card) => (
                            <h3 key={card.number} onClick={() => {setSelectedCard(card.number); setVisible(false)}}>{ card.number }</h3>
                ))}</div> : '' }
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
            <h4 className='confirmation'>{ confirmation }</h4>
        </form>      
    </div>
  )
}

export default Transfers