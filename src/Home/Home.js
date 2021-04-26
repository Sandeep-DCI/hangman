import React,{useState} from 'react';
import './Home.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';  


import { Link } from 'react-router-dom'

function Title(props) {

    const [category, setCategory] = useState('')


    function categoryFunction(e) {
        setCategory(e.target.value)
        console.log(category)
    }





    return(    
        <div className="Roote">
            <div className="Container">
                <header>
                    <div className="alphabet-wrapper">
                        <ul className="alphabet">
                            <li className="alphabetLetters">H</li>
                            <li className="alphabetLetters">A</li>
                            <li className="alphabetLetters">N</li>
                            <li className="alphabetLetters">G</li>
                            <li className="alphabetLetters">M</li>
                            <li className="alphabetLetters">A</li>
                            <li className="alphabetLetters">N</li>
                        </ul>
                    </div>
                    <h1 className="title">HANGMAN</h1>
                    <h2>Hello {props.location.name}</h2>
                    <p className="description">Game</p>
                </header>
                <section>
                   
                    <div className="gameRules">
                        <p></p>
                        <p></p>
                        <p>HANGMAN INSTRUCTIONS</p>
                        <p>Your goal is to guess the word. Fill in the blanks by guessing one letter at a time to see if it’s in the word. Click on the letter to guess it, or type it with your keyboard. If you have guessed correctly, the letter will appear in the blank spaces. Try to guess the word or phrase when you have enough correct letters on the board. </p>  
                    </div>

                    <div class="dropdown pt-4">
                        <button  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                        </button>
                        <div id='dropMenu' class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" onClick={(e) => categoryFunction(e)} value='animal' type="button">Animal</button>
                            <button class="dropdown-item" onClick={(e) => categoryFunction(e)} value='color' type="button">Color</button>
                            <button class="dropdown-item" onClick={(e) => categoryFunction(e)} value='country' type="button">Country</button>
                        </div>
                        <div className="buttonsWrapper"> 
                    <Link to={{pathname:'/game', category: category, name: props.location.name}}> <a className="singupButton">Play</a> </Link>
                        
                    </div>
                    </div>
                    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                </section>
            </div>
        </div>
        
    ); 
}


export default Title;