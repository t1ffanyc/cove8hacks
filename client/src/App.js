//import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Planner from './Planner.js';
import Requirements from './Requirements.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Planner />
        <div className="line"></div>
        <Requirements style={{ flex:1 }} />
      </div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
