import { Component } from "react";
import Card from "./card";
import './card-list.styles.css';

class CardList extends Component {

    render() {
        console.log("render")
        const {monsters} = this.props
        return(
            <div className="card-list">
                {monsters.map(monster => { 
                    const {name, email,id} = monster
                    return(
                  <Card name={name} email={email}  id={id} key={id}/>
                )}) }
            </div>
        )
    }
}

export default CardList