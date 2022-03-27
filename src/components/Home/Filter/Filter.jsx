import React from 'react'
import './filter.css'

const Filter = ({ filterItems, select}) => {
    return (
        <div className='filter_container'>
            <button className={select === 'all' ? "active" : ""} onClick={() => filterItems('all')}>All</button>
            <button className={select === 'frontend' ? "active" : ""} onClick={() => filterItems('frontend')}>Frontend</button>
            <button className={select === 'backend' ? "active" : ""} onClick={() => filterItems('backend')}>Backend</button>
        </div>
    )
}

export default Filter