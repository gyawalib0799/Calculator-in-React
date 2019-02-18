import React, { Component } from 'react';
import Buttons from './components/Buttons';
import Output from './components/Output';
import './App.css';


class App extends Component {
  constructor(){
      super();

      this.state = {
          final: ""
      }
  }

  onClick = clickme => {

      if(clickme === "="){
          this.calculate()
      }

      else if(clickme === "CLR"){
          this.reset()
      }
      else if(clickme === "BacK"){
          this.backspace()
      }

      else {
          this.setState({
              final: this.state.final + clickme
          })
      }
  };


  calculate = () => {
      var display = ''
      display = this.state.final      

      try {
          this.setState({
              // eslint-disable-next-line
              final: (eval(display) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              final: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          final: ""
      })
  };

  backspace = () => {
      this.setState({
          final: this.state.final.slice(0, -1)
      })
  };

  render() {
      return (
          <div>
              <div className="layout">
                  <h1>Calculator</h1>
                  <Output final={this.state.final}/>
                  <Buttons onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}

export default App;