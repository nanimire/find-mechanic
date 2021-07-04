import React, { Component } from 'react';
import { CardList } from '../card-list/card-list';
import { SearchBox } from '../search-box/search-box';
import './home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      mechanics: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('/mechanics')
      .then(response => response.json())
      .then(users => this.setState({ mechanics: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { mechanics, searchField } = this.state;
    const filteredMechanics = mechanics.filter(mechanic =>
      mechanic.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <main className='main'>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList mechanics={filteredMechanics} />
      </main>
    );
  }
}

export default Home;