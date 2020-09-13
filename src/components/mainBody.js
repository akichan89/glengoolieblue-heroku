import React, { Component } from 'react';
import glengoolie1 from "./glengoolie-sqr-1.jpg";
import glengoolie2 from "./glengoolie-sqr-2.jpg";
import glengoolie3 from "./glengoolie-sqr-3.jpg";
import glengoolie4 from "./glengoolie-sqr-4.jpg";

import './App.css';

class BodyMain extends Component {
    
    render () {
  return (
    <div class="squares-wrapper">
        <div class="squares">
            <div class="square">
                <div class="image-wrapper">
                    <img src={glengoolie1}alt="Fries" />
                </div>
            
            <div class="square-text-wrapper">
                <a href="#spicy" name="spicy" class="anchor-link"> 
                <h1>Single Malt Scotch Whisky</h1>
                </a>

               <ul>
                   <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                   <li>Amet dolor ad vitae nesciunt libero quisquam mollitia!</li>
                   <li>Ullam velit odio labore. Repudiandae eveniet quas eligendi.</li>
                   <li>Nulla modi earum voluptas quia quisquam, similique maiores.</li>
               </ul>

            </div>
        </div>

        <div class="square">
           
            
            <div class="square-text-wrapper">
                <a href="#medium" name="medium" class="anchor-link"> 
                    <h1>Distilled and Matured in the Valley of the Bull</h1>
                    </a>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Amet dolor ad vitae nesciunt libero quisquam mollitia!</li>
                    <li>Ullam velit odio labore. Repudiandae eveniet quas eligendi.</li>
                    <li>Nulla modi earum voluptas quia quisquam, similique maiores.</li>
                </ul>

            </div>
            <div class="image-wrapper">
            <img src={glengoolie2}alt="Fries" />
            </div>
        </div>

        <div class="square">
            <div class="image-wrapper">
            <img src={glengoolie3}alt="Fries" />
            </div>
            
            <div class="square-text-wrapper">
                <a href="#mild" name="mild" class="anchor-link"> 
                    <h1>Specially Aged Signature Malt</h1>
                    </a>

                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Amet dolor ad vitae nesciunt libero quisquam mollitia!</li>
                    <li>Ullam velit odio labore. Repudiandae eveniet quas eligendi.</li>
                    <li>Nulla modi earum voluptas quia quisquam, similique maiores.</li>
                </ul>

            </div>
        </div>

        <div class="square">
           
            
            <div class="square-text-wrapper">
                <a href="#noflavor" name="noflavor" class="anchor-link"> 
                    <h1>For the Best of Times</h1>
                    </a>

                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Amet dolor ad vitae nesciunt libero quisquam mollitia!</li>
                    <li>Ullam velit odio labore. Repudiandae eveniet quas eligendi.</li>
                    <li>Nulla modi earum voluptas quia quisquam, similique maiores.</li>
                </ul>

            </div>
            <div class="image-wrapper">
            <img src={glengoolie4} alt="Fries" />
            </div>
        </div>
    </div>
    </div>
    
    
    
        
  );
    }
};


export default BodyMain;
