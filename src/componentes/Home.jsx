import React from 'react';
import { useState } from 'react';
import { changeUser } from '../store/slices/userName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [userName, setUserName] = useState("")

    const [selectSex, setSelectSex] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const imgSex = () => {
        if (selectSex === 'female') {
            return (
                <img src="./images/misty.png" />
            )
        } else if (selectSex === 'male') {
            return (
                <img src="./images/ash.png" />
            )
        }
    }

    const submitUser = e => {
        e.preventDefault()
        dispatch(changeUser(userName))
        navigate('/pokedex')
    }

    return (
        <div className='home'>

            <div className="cardHome">
                <h1 style={{ color: '#fff', fontSize: '20px' }}>Hello trainner</h1>
                <div className="genere">
                <label htmlFor="female">Female</label>
                    <input
                        type="radio"
                        name="sex"
                        id="female"
                        value='female'
                        onChange={e => setSelectSex(e.target.value)}
                       
                    />
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        name="sex"
                        id="male"
                        value='male'
                        onChange={e => setSelectSex(e.target.value)}                        
                       
                    />
                </div>
                {imgSex()}
                {selectSex && (

                    <form onSubmit={submitUser}>
                        <div className="inputName">
                            <input
                                placeholder='Give me your name to start'
                                type="text"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                            />
                            <button className='btn'><img src="./images/pokebola.png" /></button>
                        </div>
                    </form>

                )}
            </div>
        </div>
    );
};

export default Home