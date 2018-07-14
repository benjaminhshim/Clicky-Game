import React, { Component } from 'react';
import './App.css';

import RapperCard from './components/RapperCard';
import Header from './components/Header';

import rappers from './rappers.json';
import shuffleArray from './Shuffle.js';

import Radium, {StyleRoot} from 'radium';
import { flipInX } from 'react-animations';

class App extends Component {
  state = {
    rappers: rappers,
    score: 0,
    topScore: 0,
    clicked: [],
    header: '2018 XXL Freshman Class Memory Game',
    newHighScore: false
  }

  isClicked = id => {
    this.setState({
      clicked: [...this.state.clicked, id],
      header: '2018 XXL Freshman Class Memory Game'
    })
    this.shuffleRappers();
    this.incrementScore();

    if (this.state.clicked.indexOf(id) >= 0) {
      this.setState({newHighScore: false})
      this.resetGame();
    }
  }

  incrementScore = () => {
    const newScore = this.state.score + 1
    this.setState({
      score: newScore
    })

    if (this.state.score === 10) {
      this.resetGame();
    }
  }

  handleTotalScore = () => {
    const newHighScore = this.state.score;
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: newHighScore,
        newHighScore: true
      })
    }
  }

  resetGame = () => {
    this.changeHeader();
    this.handleTotalScore();
    this.setState({
      score: 0,
      clicked: []
    });
  }

  shuffleRappers = () => {
    shuffleArray(this.state.rappers);
  }

  changeHeader = () => {
    this.setState({
      header: 'TRY AGAIN'
    })
  }


  render() {

    return (
      <div className="App">
        <Header 
          score={this.state.score} 
          topScore={this.state.topScore}
          title={this.state.header} 
          newHighScore={this.state.newHighScore}/>
        <div className="flex flex-wrap container">
          {this.state.rappers.map(i => (
            <StyleRoot>
              <RapperCard 
                style={styles.flipInX}
                id={i.id} 
                key={i.id} 
                clicked={i.clicked}
                src={i.image} 
                isClicked={this.isClicked}
                />
            </StyleRoot>
          ))}
        </div>

        
      </div>
    );
  }
}

const styles = {
  flipInX: {
      animation: 'x 1s',
      animationName: Radium.keyframes(flipInX, 'flipInX')
  }
}

export default App;
