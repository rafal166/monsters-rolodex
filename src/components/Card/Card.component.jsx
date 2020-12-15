import React from 'react'
import './Card.styles.css';

export default function Card(props) {
    return (
        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=120x120`}></img>
            <h1>{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
        </div>
    )
}
