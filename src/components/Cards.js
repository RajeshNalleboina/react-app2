import React, { Component } from 'react';
import data from '../data/data.json';
import '../App.css';
import Resume from './Resume';

import {BrowserRouter,Route,Link} from 'react-router-dom';

let Cards=()=>{
    var cardsData=data.profiles;
    console.log(cardsData);
    
    return(
        <section className='parent'>
    {/* <BrowserRouter>
    <Route exact path= "/resume" component={Resume} />
    </BrowserRouter>   */}

           { 
           cardsData.map((data,index)=>(
                <div className="child" key={index}>
                    <h2>{data.basics.name}</h2>
                    {/* <Link to={{pathname:"/resume",prop:{name:data.basics.name}}}>View</Link> */}
                    
                </div>                
            ))
            }
         
        </section>
    )
}

export default Cards;