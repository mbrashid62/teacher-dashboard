import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const getComputedStats = (scores) => {
  let count  = 0;
  let lowest = scores[0].grade;
  let highest = scores[0].grade;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i].grade < lowest) {
      lowest = scores[i].grade;
    }

    if (scores[i].grade > highest) {
      highest = scores[i].grade;
    }

    count += scores[i].grade;
  }

  return {
    min: lowest,
    max: highest,
    mean: Math.round(count / scores.length),
  }
};

export class Stats extends React.Component {
  static displayName = 'src/components/Stats';

  static propTypes = {
    entries: PropTypes.object.isRequired,
  };

  static getDerivedStateFromProps(props, state) {
    const scores = Object.values(props.entries);
    if (scores.length) {
      return {
        ...state,
        ...getComputedStats(scores)
      }
    }

    return null;
  }

  state = {
    min: 0,
    max: 0,
    mean: 0,
  };

  render() {
    return (
      <div className="stats-container">
        <p>Class Average: {this.state.mean}</p>
        <p>Lowest Score: {this.state.min}</p>
        <p>Highest Score: {this.state.max}</p>
      </div>
    );
  }
}

export default connect((state) => ({
  entries: state.examEntries,
}))(Stats);
