import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="container">

      <form className="form-input">
         <h1>LOGIN FORM</h1>
        <input type="text" className="bar" placeholder="First name"></input>
        <input type="text" className="bar" placeholder="Last name"></input>
        <input type="email" className="bar" placeholder="Email" required></input>
        <input type="password" className="bar" placeholder="Password"></input>
        <button type="submit" className="btn">submit</button>
        <p>Click the sign in button to agree with<br></br><i>terms of service</i> </p>
      </form>
    </div>
  )
}

export default App;
