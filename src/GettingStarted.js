//getstart.js
import React from 'react';
import './GettingStarted.css';

const GettingStarted= ()=>{
 return(
    <div className="container">
        <div className="progress-bar">
        <div className="step completed">1</div>  
        <div className="step completed">2</div>
        <div className="step active">3</div>
        <div className="step">4</div>
        </div>
    <h2 className="heading">Getting Started</h2>
    <div className="options">
    <div className="option-box">
        I'm client,hiring for a project
        </div> 
        <div className="space"></div>
        <div className="option-box">
       I'm a freelancer,looking for work
        </div> 
    </div>
    <div className="gap"></div>

    <button className="apply-button">APPLY AS A FREELANCER</button>
    </div>
    
 );
};
export default GettingStarted;
