import React, { useState } from 'react';
import './App.css';

function SearchComponent () {
   
    return (
        <form className="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search"/>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    );
}

export default SearchComponent;