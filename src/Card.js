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

   
    <div class="radio-toolbar">
              <input type="radio" id="radioBALANCE" name="radioMoney" value="BALANCE" checked />
              <label for="radioBALANCE">USE BALANCE </label>

              <input type="radio" id="radio$1000" name="radioMoney" value="$1000" />
              <label for="radio$1000">$1000</label>

              <input type="radio" id="radio$500" name="radioMoney" value="$500" />
              <label for="radio$500">Y$500</label> 

            

            </div>
        <h2> Timeframe</h2>
        <div class="radio-toolbar">
              <input type="radio" id="radioDay1" name="radioDay11" value="Day 1" checked />
              <label for="radioDay1">Day 1</label>

              <input type="radio" id="radioDay7" name="radioDay11" value="Day 7" />
              <label for="radioDay7">Day 7</label>

              <input type="radio" id="radioDay30" name="radioDay11" value="Day 30" />
              <label for="radioDay30">Day 30</label>

              <input type="radio" id="radioYear1" name="radioDay11" value="Year 1" />
              <label for="radioYear1">Year 1</label> 

              <input type="radio" id="radioYear5" name="radioDay11" value="Year 5" />
              <label for="radioYear5">Year 5</label> 

            </div>
        
         <span>  <ToggleSwitch label="   " />  <h2>Enable Accelerated Apy </h2> </span>
         <p> Select Tier</p>

         <div class="radio-toolbar">
              <input type="radio" id="radioTier1" name="radioTier11" value="Tier 1" checked />
              <label for="radioTier1">Tier 1</label>

              <input type="radio" id="radioTier2" name="radioTier11" value="Tier 2" />
              <label for="radioTier2">Tier 2</label>

              <input type="radio" id="radioTier3" name="radioTier11" value="Tier 3" />
              <label for="radioTier3">Tier 3</label>

              <input type="radio" id="radioTier4" name="radioTier11" value="Tier 4" />
              <label for="radioTier4">Tier 4</label> 

              <input type="radio" id="radioTier5" name="radioTier11" value="Tier 5" />
              <label for="radioTier5">Tier 5</label> 

            </div>

          <p className="Paragraph"> ROI at current rate </p>
          <input  className="search" type="text" name="name" />
           <p className="Paragraph"> ~3Cake + 10Don</p>
          <div className="btnn">
          <button className="lgbutton">Apply</button>
          <button className="lgbutton">Cancel</button>
        
          </div>
          
          
          

    </div>
</div>
</div>
  );
}

export default Card;
