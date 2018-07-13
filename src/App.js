import React, { Component } from 'react';
import './App.css';
import RapperCard from './components/RapperCard';
import Header from './components/Header';
import rappers from './rappers.json';

class App extends Component {
  state = {
    rappers: rappers,
    score: 0,
    topScore: 0,
    clicked: []
  }

  isClicked = id => {
    // const rappers = this.state.rappers.filter(i => i.clicked !== clicked);
    this.state.rappers.forEach(i => {
      if (id === i.id) {
        this.state.clicked.push(i);
        this.incrementScore();
      }
    })
  }

  incrementScore = () => {
    const newScore = this.state.score + 1
    this.setState({
      score: newScore
    })
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} topScore={this.state.topScore}/>

        <div className="flex flex-wrap container" style={styles.gameContainer}>
          {this.state.rappers.map(i => (
            <RapperCard 
              id={i.id} 
              key={i.id} 
              clicked={i.clicked}
              src={i.image} 
              isClicked={this.isClicked}/>
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
