import React, { useState } from 'react';
import './App.css';

function SearchComponent () {
   
    return (
      <div class="topnav">
         <a class="active" href="#home">Home</a>
         <a href="#about">About</a>
         <a href="#contact">Contact</a>
         <input type="text" placeholder="Search.."/>
      </div>
    );
}

export default SearchComponent;