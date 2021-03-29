import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';

import Visual from './Components/Visual';
import Container from './Components/Container';
import Footer from './Components/Footer';

class App extends React.Component {
  render() {
    return (
      <div id="air_wrap">        
        <Visual/>
        <Container/>
        <Footer/>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }