import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import GuessForm from './guess-form';

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: Math.round(Math.random()*100),
            guess: '',
            feedback: 'Guess a number!',
            guessHistory: [],
        }
    }

    refreshGame() {
        this.setState({
            answer: Math.round(Math.random()*100),
            guess: '',
            feedback: [],
            guessHistory: [],
        })
    }

    currentGuessF(e) {  
        this.setState({
            currentGuess: e 
        })
    }
      
    guessHistory = (e) => {
        this.setState({
            guess: parseInt(e.target.value, 10)
        });
       
    }
    onSubmit = (e) => {
        e.preventDefault();
          this.setState({
              guessHistory: [...this.state.guessHistory,this.state.guess],
              guess: '' //clearing input field after guess is submitted
          })
          
          console.log(this.state.answer)  //so developer can see what the answer is

          const difference = Math.abs(this.state.guess-this.state.answer)
          let feedbackMsg;


          if (difference >= 60) {
                feedbackMsg = 'Cold Cold Cold'
            }
            else if (difference >= 50) {
                feedbackMsg = `Cold`
            }
            else if (difference >= 30) {
                feedbackMsg = `Gettin' Warmer`
            }
            else if (difference >= 20) {
                feedbackMsg = `Warmer`
            } 
            else if (difference >= 1) {
                feedbackMsg = `Hot`
            }  
            else {
            feedbackMsg = `Ding Ding Ding!! You guessed it!`
          }
          this.setState({
              feedback: feedbackMsg
          })
    }

    render() {
        return (
            <div>
                <Header newGame={this.state.refreshGame}/>
            <div className="layout">
                
                <GuessSection feedback={this.state.feedback}/>
                <GuessForm guess={this.state.guess}
                onChange={this.guessHistory}
                onSubmit={this.onSubmit} />
                <GuessCount count={this.state.guessHistory.length} />
                <GuessList guesses={this.state.guessHistory} />
                </div>
            </div>
        );
    }
}



