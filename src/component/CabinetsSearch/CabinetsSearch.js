import React from 'react'
import './CabinetsSearch.scss'


const cabinets = () => {
    return (
        <div className="cabinets_wrap">
            <p className="cabinets_header">Выберите кабинет</p>
             <ul className="cabinets_list">
                <li className="cabinets_items">
                    <button className="cabinets_item">Ресепшен</button>
                    <button className="cabinets_item">Хирургия</button>
                </li>
                <li className="cabinets_items">
                    <button className="cabinets_item">Терапия 1</button>
                    <button className="cabinets_item">Терапия 2</button>
                </li>
                <li className="cabinets_items">
                    <button className="cabinets_item">ВНЧС</button>
                    <button className="cabinets_item">Ортопедия</button>
                </li>
                <li className="cabinets_items">
                    <button className="cabinets_item">Ортодонтия</button>
                    <button className="cabinets_item">Офис</button>
                </li>
            </ul>
        </div>
    )
}

export default cabinets