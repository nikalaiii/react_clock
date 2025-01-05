import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | undefined;

  componentDidMount() {
    // Створюємо таймер для оновлення імені кожні 3300 мс
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(), // Оновлюємо clockName
      });
    }, 3300);
    const checkClick = document.addEventListener('click', () => this.setState({hasClock: true}))
    const checkContext = document.addEventListener('contextmenu', () => this.setState({hasClock: false}))
  }

  componentWillUnmount() {
    // Очищаємо таймер, коли компонент буде розмонтовано
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}


