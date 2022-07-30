import React, { Component } from 'react'

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
      <>
      <div>
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}/>
        {filterMonsters.map(monster => {
        return (
          <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
        )
      })}</div>
      </>
    )
  }
}
