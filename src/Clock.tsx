import React from "react";

type State = {
  today: Date;
  clockName: string;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
  };

  timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // Форматуємо дату, щоб вона відповідала формату тесту
      console.log(this.state.today.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevState.clockName !== this.state.clockName) {
      console.warn(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
