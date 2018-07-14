import React, { Component } from 'react';
import './App.css';
import RapperCard from './components/RapperCard';
import Header from './components/Header';
import rappers from './rappers.json';
import shuffleArray from './Shuffle.js';



class App extends Component {
  state = {
    rappers: rappers,
    score: 0,
    topScore: 0,
    clicked: []
  }

  isClicked = id => {
    this.setState({
      clicked: [...this.state.clicked, id]
    })
    this.incrementScore();

    if (this.state.clicked.indexOf(id) >= 0) {
      this.resetGame();
    }
}

  incrementScore = () => {
    const newScore = this.state.score + 1
    this.setState({
      score: newScore
    })
  }

  handleTotalScore = () => {
    const newHighScore = this.state.score;
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: newHighScore
      })
    }
  }

  resetGame = () => {
    alert('game over');
    this.handleTotalScore();
    this.shuffleRappers();
    this.setState({
      score: 0,
      clicked: []
    });
  }

  shuffleRappers = () => {
    shuffleArray(this.state.rappers);
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
