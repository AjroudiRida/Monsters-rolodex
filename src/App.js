import "./App.css";
import { Component } from "react";
import Cardlist from "./components/card-list/card-List.component";
import Searchbox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, search: users };
          }
        )
      );
  }

  onChangeHandle = (e) => {
    this.setState(() => {
      return { searchField: e.target.value };
    });
  };

  render() {
    console.log('render app');
    const { monsters, searchField } = this.state;
    const { onChangeHandle } = this;
    const search_result = monsters.filter((monster) => {
      if (monster.name.toLowerCase().includes(searchField)) {
        return true;
      }
      return false;
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <Searchbox className='search-box' onChangeHandler={onChangeHandle} placeholder='search monsters'/>
        <Cardlist monsters={search_result} />
      </div>
    );
  }
}

export default App;
