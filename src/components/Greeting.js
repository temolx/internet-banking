import React, { useState } from 'react'
import bgVideo from '../img/bgVideo.mp4'
import { AddName } from '../actions/ProfileActions'
import { addAccount } from '../actions/AccountActions'
import { transfer } from '../actions/TransactionActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Greeting() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const[name, setName] = useState('');
    const[error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name !== '') {
            dispatch(AddName(name));
            setError('');

            if (name === 'Elon') {
                dispatch(addAccount('Spare', 1000000));
                dispatch(addAccount('X Æ A-12\'s Allowance', 754000));
                dispatch(transfer('X Æ A-12\'s Allowance', 'Grimes', 200000, 5, 754000, "Transaction")); // add date
                dispatch(transfer('Spare', 'Amber Heard', 10350000, 5, 1000000, "Transaction")); // add date
            }

            navigate('/main');
        }
        else setError('Please fill in the required fields.');
    }

  return (
    <div className='greeting'>
        <h1>Welcome to your personal bank</h1>

        <form>
            <label htmlFor="greeting-name">What's your name?</label>
            <input type="text" name="greeting-name" onChange={(e) => setName(e.target.value)} placeholder="Ex. Elon" />
            
            <button onClick={(e) => handleSubmit(e)}>Go</button>

            <h4>{ error }</h4>
        </form>

        <video src={bgVideo} autoPlay muted loop></video>
    </div>
  )
}

export default Greeting