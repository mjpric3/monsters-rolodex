import React, { Component }from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box-component';
class App extends Component {

constructor() {
  super();
  this.state = {
    monsters: [],
    searchField: ''
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}

// arrow functions will bind for us
handleChange = (event) => {
  this.setState({searchField: event.target.value})
}

render() {
  // basically this above is doing the following:
  // const monsters = this.state.monsters;
  // const searchFiled = this.state.searchFiled; 
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
  )


  // Note: we should never set state here in the return because it could create a loop
  return(
      <div className='App'>
        <h1>
          Monsters Rolodex
        </h1>
        <SearchBox 
              placeholder='search monsters' 
              handleChange={this.handleChange}
          />
          <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}
export default App;
