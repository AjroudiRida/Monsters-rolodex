import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = [
      {
        id: 'hwe7873r',
        name: 'monster 1'
      },
      {
        id: 'hwe787sd',
        name: 'monster 2'
      },
      {
        id: 'hwe7sfe873r',
        name: 'monster 3'
      },
      {
        id: 'hwewe3r',
        name: 'monster 4'
      },
    ]
  }

  render() {
    return (
      <div className="App">
        {this.state.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }
  
  
}

export default App;
