import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) //converte pra json
      .then(users => this.setState({ monster: users }))
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const {monster, searchField } = this.state;
    const filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList monster={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
