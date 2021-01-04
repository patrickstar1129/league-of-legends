import React from 'react';
import './App.css';
import Header from './Header/Header'
import Body from './Body/Gold'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  

  render() {
    return (
      <div>
        <Header handleInputChange={this.handleInputChange}/>
        <Body />
      </div>
    )
  }
}

export default App;
