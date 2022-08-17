import React, { useState } from 'react'
import { FaCcVisa, FaCcMastercard, FaWindowClose } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrDropbox } from "react-icons/gr";
import { CardColors } from './CardColors';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { AddCard, AddCreditCard, RemoveCard } from '../actions/CardActions';
import glass from '../img/glass.png'
import CardInfo from './CardInfo';

function Cards() {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards);
    const accounts = useSelector(state => state.accounts);
    const profileInfo = useSelector(state => state.profileInfo);

    const[visible, setVisible] = useState(false);
    const[colorsVisible, setColorsVisible] = useState(false);
    const[typesVisible, setTypesVisible] = useState(false);
    const[accountsVisible, setAccountsVisible] = useState(false);

    const[infoVisible, setInfoVisible] = useState(false);
    const[selectedCard, setSelectedCard] = useState('');

    const[deleteVisible, setDeleteVisible] = useState(null);

    // type: Visa / Mastercard
    // cardType: Credit / Debit
    const[selectedType, setSelectedType] = useState('Visa');
    const[selectedColor, setSelectedColor] = useState(0);
    const[number, setNumber] = useState(null);
    const[expirationDate, setExpirationDate] = useState('');
    const[selectedCardType, setSelectedCardType] = useState('Credit');
    const[selectedAccount, setSelectedAccount] = useState({
        name: 'Select Account',
        deposit: 0
    });
    

    const[error, setError] = useState();
    const[confirmation, setConfirmation] = useState('');

    const colorBackgrounds = [
        'linear-gradient(to right, #00BD99, #006EC4)', // blue
        'linear-gradient(to right, #6041BC, #BE1A4C)', // pink 
        'linear-gradient(to right, #000000, #2B2A2A)', // black
    ]

    const handleDelete = (cardNumber) => {
        // console.log(cardNumber);
        dispatch(RemoveCard(cardNumber));
    }


    const handleNewCard = (e) => {
        e.preventDefault();

        if (number && expirationDate !== '') {
            if (number.toString().length === 16 && typeof number === 'number' && !
            cards.some((el) => el.number === number)) {
                
                if (selectedCardType === 'Credit') {
                    // ADD CREDIT CARD
                    dispatch(AddCreditCard(selectedType, selectedColor, number, expirationDate, selectedCardType, 0));
                }
                else if (selectedCardType === 'Debit' && selectedAccount.name !== 'Select Account') {
                    // ADD DEBIT CARD
                    dispatch(AddCard(selectedType, selectedColor, number, expirationDate, selectedCardType, selectedAccount.name, selectedAccount.deposit));
                }
                else {
                    setError('Please fill in the required fields.')
                    return
                };

                setSelectedType('Visa');
                setSelectedColor(0);
                setNumber('');
                setExpirationDate('');
                setSelectedCardType('Credit');
                setSelectedAccount({
                    name: 'Select Account',
                    deposit: 0
                });


                setConfirmation('New card has been added.');
                setError('');

                setTimeout(() => {
                    setConfirmation('');
                }, [1500])
            }
            else {
                // set card number error
                setError('Invalid card number.');

                if (cards.some((el) => el.number === number)) {
                    setError('Card already exists.');
                }
            }
        }
        else {
            // set empty error
            setError('Please fill in the required fields.');
        }
    }

    const showHistory = (card) => {
        setInfoVisible(true);
        setSelectedCard(card);
    }


  return (
    <div className='cards'>
        {infoVisible ? <div>
            <div className="dark-bg"></div>
            <CardInfo card={selectedCard} setInfoVisible={setInfoVisible} />
        </div> : '' }

        <h3 className='section-title'>Add A Card</h3>

        <div className="new-card">
            <form onSubmit={handleNewCard}>
                <div className='user-input' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
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

                <div className='user-input' onMouseEnter={() => setColorsVisible(true)} onMouseLeave={() => setColorsVisible(false)}>
                    <label htmlFor="">Color:</label>
                    <div className="select-card-type">
                        <h3>{ CardColors[selectedColor] }</h3>
                        <BiDownArrow id="down-arrow" style={!colorsVisible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
                    </div>

                    {colorsVisible ? <div className="dropdown-card-types">
                        {CardColors.map((color, index) => (
                            <h3 key={color} onClick={() => {setSelectedColor(index); setColorsVisible(false)}}>{ color }</h3>
                        ))}
                    </div> : ''}
                </div>

                <div className="user-input">
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input type="text" name='cardNumber' value={number} onChange={(e) => setNumber(Number(e.target.value))} />
                </div>

                <div className="user-input">
                    <label htmlFor="expiration">Expiration (MM/YY):</label>
                    <input type="text" name='expiration' value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
                </div>

                <div className='user-input' onMouseEnter={() => setTypesVisible(true)} onMouseLeave={() => setTypesVisible(false)}>
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

                {selectedCardType === 'Debit' ? <div className='user-input' onMouseEnter={() => setAccountsVisible(true)} onMouseLeave={() => setAccountsVisible(false)}>
                    <label htmlFor="">Connect to:</label>
                    <div className="connect-account">
                        <h3>{ selectedAccount.name }</h3>
                        <BiDownArrow id="down-arrow" style={!accountsVisible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />
                    </div>

                    {accounts.length === 0 && accountsVisible ? <div className="dropdown-card-types"><h3 id="dropdown-empty">Add an account first</h3></div> : (accountsVisible ? <div className="dropdown-card-types">
                        {accounts.map((account) => (
                            <h3 onClick={() => {setSelectedAccount({
                                name: account.name,
                                deposit: account.deposit
                            }); setAccountsVisible(false)}}>{ account.name }, ${ account.deposit }</h3>
                        ))}
                    </div> : '')}

                </div> : '' }

                <button>Add Card</button>
                <h4>{ error }</h4>
                <h4 className='confirmation'>{ confirmation }</h4>
            </form>
        </div>

        <hr />

        <h3 className='section-title'>Cards</h3>

        {cards.length !== 0 ? <div className="card-list">
        <div className="card-container">
        {cards && cards.map((card, index) => (
            <div className='card-list-container' onMouseEnter={() => setDeleteVisible(index)} onMouseLeave={() => setDeleteVisible(null)}>
            <img className='glassOverlay' src={glass} onClick={() => showHistory(card)} />
            <div className="card" style={{ background: colorBackgrounds[card.color] }}>
            {deleteVisible === index ? <AiFillCloseCircle className="delete-card" onClick={() => handleDelete(card.number)} /> : ''}
                <div className="left">
                    <div className="type">
                        <h2>{ card.cardType }</h2>
                    </div>

                    <div className="credentials">
                        <h5>{ String(card.number).slice(0, 4) }<span>-</span>{ String(card.number).slice(4, 8) }<span>-</span>{ String(card.number).slice(8, 12) }<span>-</span>{ String(card.number).slice(12, 16) }</h5>
                        <h6>Valid Thru</h6>
                        <h5>{ card.expirationDate }</h5>
                        {profileInfo.first !== '' ? <h5>{ profileInfo.first }'s Card</h5> : <h5>Cardholder</h5>}
                    </div>
                </div>

                <div className="right">
                    {card.type === "Visa" ? <FaCcVisa id="card-type" /> :
                    <FaCcMastercard id="card-type" />}
                </div>
            </div>

            </div>
        ))}
        </div>
        </div> : 
        <div className='empty'>
            <GrDropbox className='empty-box' />
            <h2>No cards yet...</h2>
        </div>}
        
    </div>
  )
}

export default Cards