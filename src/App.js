import React from 'react';
import MainTemplate from './components/MainTemplate';
import Today from './components/Today';
import Tommorow from './components/Tommorow';

function App() {
  return (
    <MainTemplate
      day = {(<Today />)}
      tommorow = {(<Tommorow />)}
    >

    </MainTemplate>
  )
}

export default App;