import React, { Component } from 'react';
import './App.css';
import RapperCard from './components/RapperCard';
import Header from './components/Header';
import rappers from './rappers.json';

class App extends Component {
  state = {
    rappers
  }
  render() {
    return (
      <div className="App">
        <Header />

        <div className="flex flex-wrap container" style={styles.gameContainer}>
          {this.state.rappers.map(i => (
            <RapperCard id={i.id} key={i.id} src={i.image}/>
          ))}
        </div>
        
      </div>
    );
  }
}

const styles = {
  gameContainer: {
    marginTop: 200
  }
}

export default App;
