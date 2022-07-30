import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={
    monsters:[],
    filteredMonsters: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(() =>  {
      return { monsters: users, filteredMonsters: users}}, 
      () => console.log(this.state.monsters)))
  }
  render() {
    return (
      <>
      <div>
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const searchString = event.target.value.toLocaleLowerCase();
           const filterMonsters = this.state.monsters.filter (monster => monster.name.toLocaleLowerCase().includes(searchString))
          console.log("onChange called")
           this.setState ( () => {
            return {
              filteredMonsters : filterMonsters
            }
           })
        }}/>
        {this.state?.filteredMonsters.map(monster => {
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
