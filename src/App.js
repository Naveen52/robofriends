// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import CardList from './CardList';
// import { robots } from './robots';
import Searchbox from './Searchbox';
import Scroll from "./Scroll";
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
// My function
// class App extends React {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
  
//   }

// }
class App extends Component{
  constructor(){
    super();
    this.state ={
      robots:[],
      searchfield:''
    }
  }

  // componentDidMount(){
  //   fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
  //     return response.json();
  //   }).then(users => {
  //     this.setState({robots : users})
  //   })
  //   // this.setState({robots:robots})
  // }
// ----------Another method --------------
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots:users}))
  }

  onsearchChange = (event) => {
    this.setState({searchfield :event.target.value})
  }

  render(){ 
    const filteredrobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0){
      return <h1>LOADING</h1>
    } else{
      return(
      <div className="tc">
        <h1>Robofriends</h1>
        <Searchbox searchChange = {this.onsearchChange} />
        <Scroll>
          <CardList robots = {filteredrobots} />
        </Scroll>
        
      </div>
    
  )}};
}

export default App;
