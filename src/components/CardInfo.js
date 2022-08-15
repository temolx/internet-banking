import React from 'react'
import { IoMdClose } from "react-icons/io";

function CardInfo({ card, setInfoVisible }) {
  return (
    <div className='cardInfo'>
        <h2><span>Card type:</span> { card.type }</h2>
        <h2><span>Color:</span> { card.color === 0 ? 'Blue' : (card.color === 1 ? 'Red' : 'Black') }</h2>
        <h2><span>Card Number:</span> { card.number }</h2>
        <h2><span>Expiration Date:</span> { card.expirationDate }</h2>
        <h2><span>Credit / Debit:</span> { card.cardType }</h2>
        {card.cardType === 'Credit' ? <h2><span>Credit Card Debt:</span> ${ card.debt }</h2> : <h2><span>Debit Balance:</span> ${ card.accountDeposit }</h2>}

        <button><IoMdClose id="close-icon" onClick={() => setInfoVisible(false)} /></button>

        <span className='some'></span>
    </div>
  )
}

export default CardInfo