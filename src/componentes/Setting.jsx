import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectItem } from '../store/slices/itemsPage.slice';
import pokedexImg from '../images/pokedex.png'

const Setting = () => {

    const navigate = useNavigate()
    const dispatch=useDispatch()

    const changaValue = e => {
        dispatch(selectItem(e.target.value))
    }

    return (
        <div className='setting'>
            <i className="fa-solid fa-arrow-left" onClick={() => { navigate(-1) }}></i>
            <div className='container'>
                <img src={pokedexImg} className='pokedex' />
                <h1>Settings</h1>
                <div className='itemsPage'>
                    <h2>Items per page</h2>
                    <select onChange={changaValue}>
                        {/* {
                            itemsPage.map(item=>(
                                <option value={item} key={item}>{item} Items</option>

                            ))
                        } */}      
                        <option value="">Select Items</option>      
                        <option value="4">4 Items</option>
                        <option value="8">8 Items</option>
                        <option value="12">12 Items</option>
                        <option value="16">16 Items</option>
                        <option value="20">20 Items</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Setting;