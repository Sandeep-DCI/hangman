import {useState, useEffect} from 'react'
import Win from './Win' // PAGE THAT WILL BE DISPLAYED ON END OF THE GAME
import Lose from './Lose' // PAGE THAT WILL BE DISPLAYED ON END OF THE GAME

// to redirect to the pages
import React from 'react';
import {Redirect} from 'react-router';

//  FUNCTIONAL COMPONENT OF THE GAME

export default function Game(props) {

    // EXAMPLE ARRAY OF ANIMAL WORDS

    let categorys = {
        animal: [
            "Cat",
            "Albatross",
            "Alligator",
            "Alpaca",
            "Ant",
            "Anteater",
            "Antelope",
            "Ape",
            "Armadillo",
            "Donkey",
            "Baboon",
            "Leopard",
            "Panter",
            "Barracuda",
            "Dog",
            "Jaguar",
            "Lion",
            "Tiger",
            "Sheep",
            "Goat",
            "Lamb",
            "Cow",
            "Camel",
            "Elephant",
            "Koala",
            "Bear",
            "Eagle",
            "Owl",
            "Kangaroo",
            "Mouse"
        ],
        country: [
            "Afghanistan",
            "Albania",
            "Algeria",
            "India",
            "Angola",
            "Serbia",
            "Argentina",
            "Mexico",
            "Aruba",
            "Australia",
            "Austria",
            "Greece",
            "Italy",
            "Dubai",
            "Belgium",
            "Poland",
            "France",
            "Portugal",
            "Netherlands",
            "Denmark",
            "Cuba"
          ],
          color: [
            "Aquamarine",
            "Azure",
            "Red",
            "Orange",
            "Black",
            "Blue",
            "Violet",
            "Brown",
            "Yellow",
            "Green",
            "Gray",
            "Purple",
            "White",
            "Pink"
          ]
    }

    let randomArray;
        for (const key in categorys) {
            if (key === props.location.category) {
                randomArray = categorys[key]
                console.log(randomArray)
            }
        }

          let randomWord = randomArray[Math.floor(Math.random() * randomArray.length)] // GETTING RANDOM WORD FROM ARRAY 
    
    
    //const playerName = props.userName;
    const maxWrong = 6  // ESTABLISHING MAXIMUM WRONG GUESSES

    // HOOOKS

    const [mistake, setMistake] = useState(0); // SETTING STATE OF  "mistake" AT 0
    const [guessed, setGuessed] = useState(new Set([])) // ARRAY THAT WILL BE FILLED WITH LETTERS ON BUTTON FUNCTION HANDEL "handleGuess"
    const [word ,setWord] = useState(randomWord.toLocaleLowerCase()); // SETTING STATE OF "word" FROM  "randomWord"
    const [wordGuess, setWordGuess] = useState('')   //  WORD THAT WILL BE DISPLAYED WHILE GUESSING 
    
    //  FUNCTION THAT WILL RETURN ARRAY OF LETTERS FROM "word", MAP THROUGH IT AND IF THE LETTER WAS CORRECT WILL DISPLAY THE LETTER OR UNDERSCORE 
    let guessedWord = () => {
        return word.split('').map(letter => ( guessed.has(letter) ? letter : ' _ '));
    }

    let firstClick = false; // ON THE FIRST CLICK IT WILL DISPLAY THE "wordGuess" THIS IS A WORK-AROUND OF A PROBLEM  

    // BUTTON HANDLE FUNCTION 
    let handleGuess = (e) => {
        firstClick = true;
        let letter = e.target.value;
        setGuessed(guessed.add(letter))  // ON EACH CLICK THE LETTER WILL BE ADDED TO "guessed" ARRAY 
        console.log(guessed.has(letter))
        setMistake(mistake + (word.includes(letter) ? 0 : 1))  // IF THE WORD INCLUDES LETTER THAN 0 WILL BE ADDED TO "mistake" SO BASICALLY THERE ARE NO MISTAKES, BUT IF YOU CLICK AND THE WORD DOES NOT INCLUDE SELECTED LETTER THAN 1 WILL BE ADDED EACH TIME AND "mistake" WILL INCREASE
        setWordGuess(guessedWord().join(''))  // SETTING STATE ON THE "wordGuess" EACH CLICK 
    }
    
    //  FUNCTION THAT WILL GENERATE ALL THE BUTTONS, SPLITING THE STRING OF ALL LETTERS MAPING THROUGH AND DEDICATING CLASSNAME, KEY, VALUE, ONCLICK, DISABLED AND LETTER FOR EACH BUTTON
    let buttons = () => {
        
        return "abcdefghjklimnopqrstuvwxyz".split('').map(letter =>(
            <button 
            className = 'btn btn-redish-color m-1' 
            key = {letter} 
            value = {letter}
            onClick = {(e) => handleGuess(e)}
            disabled = {guessed.has(letter)}
            >{letter} 
            </button>
        ))
        
    }



    

    let guessLeft = maxWrong - mistake;
    
    if(wordGuess === word){   // WHEN THE WORD HAS BEEN GUESSED IT WILL RETURN WIN PAGE
        return <Redirect to={{pathname:'/win', name:props.location.name}}/>// to jump to the right /win and not stay on /game
    } else if(mistake >= maxWrong){  // IF MISTAKES ARE EQUAL OR GREATER THAN MAX.WRONG GUESSES THAN IT WILL DISPLAY STRING YOU LOST OR ANOTHER LOSE PAGE 
        return <Redirect to={'/lose'}/>// to jump to the right /lose and not stay on /game
    } else {            //   ELSE IF NEITHER OF THOSE TWO CONDITIONS ABOVE ARE MET THE GAME WILL CONTINUE
        return (
        <div className='bg-greenish-color'>
        <div className=' container-sm   pt-5 pb-5'>
            <div className=' bg-greenish-color '>
                <h2 className='playerName'> Hello {props.location.name} {props.location.category}</h2>
            </div>
            <div className='pt-3'>
                <p className='text-organish-color font-weight-bolder'>The word is from the category of {props.location.category}</p>
                {/* <p >{word}</p> */}
                <p>
                    {firstClick ? wordGuess : guessedWord()}
                </p>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='w-75 pt-2 pb-4'>
                {buttons()}
            </div>
            </div>
            <div>
                <h4 >Guesses left {guessLeft}</h4>
            </div>
            
        </div>
        </div>
    )
    }
    
}
