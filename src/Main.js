import React, { Component } from "react";
import ToggleSwitch from "./ToggleSwitch";
import "./Main.css";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>ROI Calculator</h1>
        
          <span> <ToggleSwitch label="USD" /></span>

          <form>
               <label >
                <input  className="search" type="text" name="name" />
                
                 </label>
                {/* <input type="submit" value="Submit" /> */}
        </form>

        <ul className="header">
      
            <li className="header1"><label> USE BALANCE  </label></li>
            <li className="header1"><label> $500 </label></li>
            <li className="header1"><label> $1000 </label></li>
            <p className="Paragraph "><label> Name </label></p>
        </ul>
           <h2> Timeframe</h2>
          <ul className="header">
            <li className="header1"><a href="/">Day1</a></li>
            <li className="header1" ><a href="/">Day7</a></li>
            <li className="header1"><a href="/">Day30</a></li>
            <li className="header1"><a href="/">1 Year</a></li>
            <li className="header1"><a href="/">5 Year</a></li>
          </ul>


           

          <h2>Enable Accelerated Apy </h2> <ToggleSwitch label="   " />
          
          
          <p> Select Tier</p>

          <ul className="header">
            <li className="header1"><a href="/">Tier 1</a></li>
            <li className="header1" ><a href="/">Tier 2 </a></li>
            <li className="header1"><a href="/">Tier 3 </a></li>
            <li className="header1"><a href="/">Tier 4</a></li>
            <li className="header1"><a href="/">Tier 5</a></li>
          </ul>
          <p className="Paragraph"> ROI at current rate </p>

          
                
                <input  className="search" type="text" name="name" />
                
                
          
          <p className="Paragraph"> ~3Cake + 10Don</p>
          <button >Add Student</button>
          </div> 
          
        
         
      
      
         
    );
  }
}
 
export default Main;