import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component";

class Cardlist extends Component {
  render() {
    // console.log('render cardlidt');
    const { monsters } = this.props
    // console.log(monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster}/>
        })}
      </div>
    );
  }
}

export default Cardlist;
