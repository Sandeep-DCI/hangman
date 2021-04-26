//to use bootstraps on the page you need this
//import 'bootstrap/dist/css/bootstrap.css';
// need this not more cours it is now in sass

// to use sass for customize the color 
import './main.scss';

import React from 'react';
// to route / link to the pages
import{Link} from 'react-router-dom'


//functions
export default function Lose(props) {

    return(
        <div className="bg-greenish-color pt-5">
            <h1 className=" container w-25 bg-purpleish-color p-4 border rounded-pill ">{props.location.name} you lose!</h1>
            <h4 className='p-2 pb-3'>Choose your next Step!</h4>
            <Link to={{path:'/home', name:props.location.name}}><button className="btn btn-redish-color">Play Again</button></Link> 
            <br/><br/>
            <Link to='/'><button className="btn btn-redish-color pl-4 pr-4">Log Out</button></Link> 
            <br/><br/>
        </div>
    )
}


