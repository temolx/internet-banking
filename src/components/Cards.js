import React, { useState } from 'react'
import { FaCcVisa } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { CardColors } from './CardColors';
import { useDispatch } from 'react-redux/es/exports';
import { AddCard } from '../actions/CardActions';

function Cards() {

    const dispatch = useDispatch();

    const[visible, setVisible] = useState(false);
    const[colorsVisible, setColorsVisible] = useState(false);
    const[typesVisible, setTypesVisible] = useState(false);


    // type: Visa / Mastercard
    // cardType: Credit / Debit
    const[selectedType, setSelectedType] = useState('Visa');
    const[selectedColor, setSelectedColor] = useState('Blue');
    const[number, setNumber] = useState(null);
    const[expirationDate, setExpirationDate] = useState('');
    const[selectedCardType, setSelectedCardType] = useState('Credit');

    const[errors, setErrors] = useState({
        digitCheck: '',
        empty: ''
    });
    const[confirmation, setConfirmation] = useState('');


    const handleNewCard = (e) => {
        e.preventDefault();

        if (number && expirationDate !== '') {
            if (number.toString().length === 16 && typeof number === 'number') {
                dispatch(AddCard(selectedType, selectedColor, number, expirationDate, selectedCardType));

                setSelectedType('Visa');
                setSelectedColor('Blue');
                setNumber('');
                setExpirationDate('');
                setSelectedCardType('Credit')


                setConfirmation('New card has been added.');
                setErrors({
                    digitCheck: '',
                    empty: ''
                })

                setTimeout(() => {
                    setConfirmation('');
                }, [1500])
            }
            else {
                // set card number error
                setErrors({
                    digitCheck: 'Invalid card number.',
                    empty: ''
                })
            }
        }
        else {
            // set empty error
            setErrors({
                digitCheck: '',
                empty: 'Please fill in the required fields.'
            })
        }
    }


  return (
    <div className='cards'>
        <h3 className='section-title'>Add A Card</h3>

        <div className="new-card">
            <form onSubmit={handleNewCard}>
                <div className='card-input' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                    <label htmlFor="">Card Type:</label>
                    <div className="select-card-type">
                        <h3>{ selectedType }</h3>
                        <BiDownArrow id="down-arrow" style={!visible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
                    </div>

                    {visible ? <div className="dropdown-card-types">
                        <h3 onClick={() => {setSelectedType('Visa'); setVisible(false)}}>Visa</h3>
                        <h3 onClick={() => {setSelectedType('Mastercard'); setVisible(false)}}>Mastercard</h3>
                    </div> : ''}
                </div>

                <div className='card-input' onMouseEnter={() => setColorsVisible(true)} onMouseLeave={() => setColorsVisible(false)}>
                    <label htmlFor="">Color:</label>
                    <div className="select-card-type">
                        <h3>{ selectedColor }</h3>
                        <BiDownArrow id="down-arrow" style={!colorsVisible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
                    </div>

                    {colorsVisible ? <div className="dropdown-card-types">
                        {CardColors.map((color) => (
                            <h3 key={color} onClick={() => {setSelectedColor(color); setColorsVisible(false)}}>{ color }</h3>
                        ))}
                    </div> : ''}
                </div>

                <div className="card-input">
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input type="text" name='cardNumber' value={number} onChange={(e) => setNumber(Number(e.target.value))} />
                </div>

                <div className="card-input">
                    <label htmlFor="expiration">Expiration (MM/YY):</label>
                    <input type="text" name='expiration' value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
                </div>

                <div className='card-input' onMouseEnter={() => setTypesVisible(true)} onMouseLeave={() => setTypesVisible(false)}>
                    <label htmlFor="">Debit / Credit:</label>
                    <div className="debit-or-credit">
                        <h3>{ selectedCardType }</h3>
                        <BiDownArrow id="down-arrow" style={!typesVisible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
                    </div>

                    {typesVisible ? <div className="dropdown-card-types">
                        <h3 onClick={() => {setSelectedCardType('Credit'); setTypesVisible(false)}}>Credit</h3>
                        <h3 onClick={() => {setSelectedCardType('Debit'); setTypesVisible(false)}}>Debit</h3>
                    </div> : ''}
                </div>

                <button>Add Card</button>
                <h4>{ errors.digitCheck }</h4>
                <h4>{ errors.empty }</h4>
                <h4 className='confirmation'>{ confirmation }</h4>
            </form>
        </div>

        <div className="card-list">
        <h3 className='section-title'>Cards</h3>

            <div className="card">
                <div className="left">
                    <div className="type">
                        <h2>Mastercard</h2>
                    </div>

                    <div className="credentials">
                        <h5>1111 1111 1111 1111</h5>
                        <h6>Valid Thru</h6>
                        <h5>12/23</h5>
                        <h5>Lee M. Cardholder</h5>
                    </div>
                </div>

                <div className="right">
                    <FaCcVisa id="card-type" />
                </div>
        </div>

        </div>
    </div>
  )
}

export default Cards