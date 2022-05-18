import React, {Component} from 'react';
import {randomWord} from "./RandomWord";
import {image0} from "./hangmanImg/hangman0";
import {image1} from "./hangmanImg/hangman1";
import {image2} from "./hangmanImg/hangman2";
import {image3} from "./hangmanImg/hangman3";
import {image4} from "./hangmanImg/hangman4";
import {image5} from "./hangmanImg/hangman5";
import {image6} from "./hangmanImg/hangman6";

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [image0, image1, image2, image3, image4, image5, image6]
    };
}

export default Hangman;