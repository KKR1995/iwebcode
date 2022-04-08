import React from 'react';
import ToggleSwitch from "./ToggleSwitch";

import './Card.css'

function Card(props)
{
  console.log(props)
  return(
    <div>
      
    <div className="cards">
    <div className="card">
    <h1>ROI Calculator</h1>
    <span> <ToggleSwitch label="USD" /></span>
    <input  className="search" type="text" name="name" />

   
    <ul className="header">
            <li className="headeryello"><label> USE BALANCE  </label></li>
            <li className="header1"><label> $500 </label></li>
            <li className="header1"><label> $1000 </label></li>
            {/* <p className="Paragraph "><label> Name </label></p> */}
        </ul>
        <h2> Timeframe</h2>
        <ul className="header">
            <li className="header1"><label> Day 1  </label></li>
            <li className="headeryello"><label> Day 7 </label></li>
            <li className="header1"><label> Day 30 </label></li>
            <li className="header1"><label> 1  Year </label></li>
            <li className="header1"><label> 5  Year </label></li>
           
        </ul>
        
         <span>  <ToggleSwitch label="   " />  <h2>Enable Accelerated Apy </h2> </span>
         <p> Select Tier</p>

         <ul className="header">
            <li className="header1"><label> Tier 1 </label></li>
            <li className="header1"><label> Tier 2 </label></li>
            <li className="header1"><label> Tier 3 </label></li>
            <li className="headeryello"><label>  Tier 4 </label></li>
            <li className="header1"><label>  Tier 5 </label></li>
          </ul>

          <p className="Paragraph"> ROI at current rate </p>
          <input  className="search" type="text" name="name" />
           <p className="Paragraph"> ~3Cake + 10Don</p>
          <div className="btnn">
          <button className="lgbutton">Add Student</button>
          <button className="lgbutton">Cancel</button>
          </div>
          

    </div>
</div>
</div>
  );
}

export default Card;
