import React from 'react';
import { Card } from '../card/card';
import './card-list.css';

export const CardList = props => (
  <section className='card-list'>
    {props.mechanics.map(mechanic => (
      <Card key={mechanic.id} mechanic={mechanic} />
    ))}
  </section>
);