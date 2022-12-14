import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'

export default class App extends Component {
  constructor(){
    super();
    this.state={
    monsters:[],
    searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(() =>  {
      return { monsters: users, filteredMonsters: users}}, 
      () => console.log(this.state.monsters)))
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState( () => {
      return { searchField}
    })
  }
  render() {
    const {monsters, searchField } = this.state;
    const {onSearchChange} = this;
    const filterMonsters = monsters.filter (monster =>  monster.name.toLocaleLowerCase().includes(searchField))
    console.log("filterMonsters",filterMonsters)
    return (
      
      <div className='App'>
        <h1 className="app-title">Monster Rolodex</h1>
       <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className='search=box'/>
        <CardList monsters={filterMonsters}/>
      </div>
    )
  }
}
