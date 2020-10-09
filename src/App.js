import React from 'react';
import './App.css';
import LoginComponent from './LoginComponent';
import InfographicComponent from './InfographicComponent';
import SearchComponent from './SearchComponent';


function App() {
  return (
    <body>
      <div className="toprow">
      <LoginComponent />
      <InfographicComponent />
      </div>
      <div>
      <SearchComponent />
      </div>

    </body>
    
  );
}

export default App;
