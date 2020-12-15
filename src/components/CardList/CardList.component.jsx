import React from 'react'
import Card from '../Card/Card.component'
import './CardList.styles.css'

export default function CardList  (props) {
    return (
        <div className="card-list">
        {props.monsters.map(monster =><Card key={monster.id} monster={monster}></Card>)}
        </div>
    )
}
