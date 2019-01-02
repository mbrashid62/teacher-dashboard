import React, { Component } from 'react';
import _ from 'lodash';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './EntryList.css';
import { remove as deleteEntry } from '../actions/examEntry';

export class EntryList extends Component {

  static displayName = 'src/EntryList';

  static propTypes = {
    entries: PropTypes.object.isRequired,
    dispatchDeleteEntry: PropTypes.func.isRequired,
  };

  static defaultProps = {
    entries: {},
    dispatchDeleteEntry: () => {},
  };

  onDeleteClick = (id) => {
    this.props.dispatchDeleteEntry(id);
  };

  render() {
    if (this.props.entries === {}) {
      return null;
    }

    return (
      <div className="exam-list">
        {_.map(this.props.entries, (entry, i) => (
          <div
            className={cn('entry-container', {
              failing: entry.grade <= 65,
            })}
            key={i}
          >
            <p>{entry.name}</p>
            <p>{entry.grade}</p>
            <p className="delete-link" onClick={() => this.onDeleteClick(entry.id)}>x</p>
          </div>
        ))}
      </div>
    );
  }
}

export default connect((state) => ({
  entries: state.examEntries,
}), ({
  dispatchDeleteEntry: deleteEntry,
}))(EntryList);
