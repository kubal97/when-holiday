import React from 'react';
import './App.css';
import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      inputDate: '',
      days: 0,
      weeks: 0,
      showOutput: false
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    let currentDate = new Date().toLocaleDateString();
    let converted = currentDate.split(/\D/g);
    converted = [converted[0],converted[1],converted[2]].join("/");
    this.setState({
      time: converted
    });
  }

  getInputDate = (date) => {
    let converting = date.split(/\D/g);
    let convertedDate = [converting[2],converting[1],converting[0]].join("/");
    this.setState({
      inputDate: convertedDate,
    });
    let content = document.getElementById('container');
    content.classList.remove('pulse');
  };

  timeUntil = (currentDate, inputDate) => {
    let convertedCurrentDate = new Date(currentDate.split('/')[2],currentDate.split('/')[1]-1,currentDate.split('/')[0]);
    let convertedInputDate = new Date(inputDate.split('/')[2],inputDate.split('/')[1]-1,inputDate.split('/')[0]);
    let days = Math.floor((convertedInputDate.getTime() - convertedCurrentDate.getTime()) / (1000 * 3600 * 24));
    let weeks = Math.floor(days/7);
    this.setState({
      days: days,
      weeks: weeks
    });

    let content = document.getElementById('container');
    content.classList.add('pulse');
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <div id="container" className="container">
            <label className="label" htmlFor="date">Wpisz datę wydarzenia:</label>
            <input
              className="input"
              type="date"
              id="date"
              name="date"
              onChange={(event) => this.getInputDate(event.target.value)}
            />
            {this.state.inputDate !== '' ?
              <button
                className="button"
                onClick={() => {
                  this.timeUntil(this.state.time, this.state.inputDate);
                  this.setState({showOutput: true});
                }}>Oblicz
              </button> :
              <button
                className="button invisible"
                onClick={() => {
                  this.timeUntil(this.state.time, this.state.inputDate);
                  this.setState({showOutput: true})
                }}>Oblicz
              </button>
              }
          </div>
          {this.state.showOutput ? <Output weeks = {this.state.weeks} days = {this.state.days} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
