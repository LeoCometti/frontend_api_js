import React, { Component } from 'react';
import Api from './Api';

class App extends Component {

  state = {
    weatherForecast: []
  }

  async componentDidMount() {
    const response = await Api.get('');
    console.log(response.data);
    this.setState({ weatherForecast: response.data });
  }

  render() {

    const { weatherForecast } = this.state;

    return (
      <div>
        <h1>Request Weather Forecast</h1>
        {weatherForecast.map(item => (
          <li key={item.summary}>
            {item.summary}, {item.temperatureC}, {item.temperatureF}, {item.date}
          </li>
        ))}
      </div>
    );
  }
}

export default App;
