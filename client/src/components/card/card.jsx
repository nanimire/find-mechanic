import React from 'react';
import './card.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='mechanic'
      src={`https://robohash.org/${props.mechanic.id}?set=set2&size=180x180`}
    />
    <h2> {props.mechanic.name} </h2>
    <span> {props.mechanic.email} </span>
    <p> Specialized in cars </p>
  </div>
);