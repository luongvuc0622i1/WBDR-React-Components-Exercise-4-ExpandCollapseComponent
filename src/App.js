// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";
import ExpandCollapse from "./components/ExpandCollapse";

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

// export default App;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false
    };
  }

  handleDisplayOn = () => {
    this.setState({ isDisplay: true })
  }

  handleDisplayOff = () => {
    this.setState({ isDisplay: false })
  }

  render() {
    const { isDisplay } = this.state
    if (isDisplay) return (<ExpandCollapse handle={this.handleDisplayOff}/>)
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h1>Conditional Rendering</h1>
          <button onClick={this.handleDisplayOn}>Xem giới thiệu</button>
        </div>
      </div>
    )
  }
}
export default App;