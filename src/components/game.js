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
            answer: Math.round(Math.random()*100 +1),
            guess: '',
            feedback: [],
            guessHistory: [],
            // guessCount: ''
        }
    }

    refreshGame() {
        //restart game
    }

    currentGuessF(e) {  
        this.setState({
            currentGuess: e 
        })
    }
      

    guessHistory = (e) => {
        this.setState({
            guess: parseInt(e.target.value)
        }) ;
    }
    onSubmit = (e) => {
        e.preventDefault();
          this.setState({
              guessHistory: [...this.state.guessHistory,this.state.guess],
              guess: '' //clearing input field after guess is submitted
          })
          console.log(this.state.answer)
          const difference = Math.abs(this.state.guess-this.state.answer)
          let feedback;
            if (difference >= 60) {
              this.state.feedback = `Cold Cold Cold`
            }
            else if (difference >= 50) {
                this.state.feedback = `Cold`
            }
            else if (difference >= 30) {
                this.state.feedback = `Gettin' Warmer`
            }
            
            else if (difference >= 20) {
                this.state.feedback = `Even Warmer`
            } 
            
            else if (difference >= 1) {
                this.state.feedback = `Hot`
            }  
            
            else {
            this.state.feedback = `Ding Ding Ding!!  You Guessed It!!`
          }

          //compare to see if guess is correct here
          //update state here w/feed back
    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback}/>
                <GuessForm guess={this.state.guess}
                onChange={this.guessHistory}
                onSubmit={this.onSubmit} />
                <GuessCount count={this.state.guessHistory.length} />
                <GuessList guesses={this.state.guessHistory} />
                
            </div>
        );
    }
}



