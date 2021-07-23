import React from 'react';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';



function App() {
  return (
    <div className="App">
      
      <ProfilePhoto/>
      <Address/>
      <FullName/>
    </div>
  );
}

export default App;
