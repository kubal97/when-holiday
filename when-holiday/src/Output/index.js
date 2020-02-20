import React from 'react';
import './styles.css';

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {weeks, days} = this.props;
    return (
      <div className="content">
        <p className="days">Pozostało {days} dni</p>
        <p className="weeks">Pozostało {weeks} tygodni</p>
      </div>
    );
  }
}

export default Output;
