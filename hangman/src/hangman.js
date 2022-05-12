import React, { Component } from "react";
import { randomWord } from "./RandomWord";
import "./Hangman.css";

import {randomWord} from "./RandomWord";
import image0 from ".hangmanImages/hangman0.jpg";      //hangman start img
import image1 from ".hangmanImages/hangman1.jpg";
import image2 from ".hangmanImages/hangman2.jpg";
import image3 from ".hangmanImages/hangman3.jpg";
import image4 from ".hangmanImages/hangman4.jpg";
import image5 from ".hangmanImages/hangman5.jpg";
import image6 from ".hangmanImages/hangman6.jpg";
import image7 from ".hangmanImages/hangman7.jpg";      //hangman end img

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 8,
    images: [image0, image1, image2, image3, image4, image5, image6,image7],
    };

    constructor(props) {
        super(props);
        this.state = {
          numOfWrong: 0,
          guessed: new Set(),
          answer: randomWord(),
        };
        this.handleGuess = this.handleGuess.bind(this);
        this.reset = this.reset.bind(this);
      }

      reset(){
          this.state({
            noOfWrong: 0,
            guessed: new Set(),
            answer: randomWord(),
          });
      }

      handleGuess(evt){
        let letter = evt.target.value;
        this.setState((st) => ({
          guessed: st.guessed.add(letter),
          numOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),
        }));
      }
}