import React from 'react';
import './styles.css';

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  daysDeclination = (days) => {
    if (days === 0) return 'To już dziś!';
    else if (days === 1) return 'Pozostał ' + days + ' dzień';
    else if (days >= 2) return 'Pozostało ' + days + ' dni';
    else if (days < 0) return 'Wybierz datę z przyszłości';
  };

  weeksDeclination = (weeks) => {
    if (weeks === 0) return 'To już w tym tygodniu!';
    else if (weeks === 1) return 'Pozostał ' + weeks + ' tydzień';
    else if (weeks >= 2 && weeks <5) return 'Pozostały ' + weeks + ' tygodnie';
    else if (weeks >= 5) return 'Pozostało ' + weeks + ' tygodni';
    else if (weeks < 0 )  return 'Wybierz datę z przyszłości';
  };

  render() {
    const {weeks, days} = this.props;
    return (
      <div className="content">
        <p className="days">{this.daysDeclination(days)}</p>
        <p className="weeks">{this.weeksDeclination(weeks)}</p>
      </div>
    );
  }
}

export default Output;
