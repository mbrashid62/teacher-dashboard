import React, { Component } from 'react';
import _ from 'lodash';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './EntryList.css';
import {
  remove as deleteEntry,
  openEdit,
} from '../actions/examEntry';

export class EntryList extends Component {

  static displayName = 'src/EntryList';

  static propTypes = {
    entries: PropTypes.object.isRequired,
    dispatchDeleteEntry: PropTypes.func.isRequired,
    dispatchOpenEdit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    entries: {},
    dispatchDeleteEntry: () => {},
    dispatchOpenEdit: () => {},
  };

  onDeleteClick = (id) => {
    this.props.dispatchDeleteEntry(id);
  };

  onGradeClick = (id, grade) => {
    this.props.dispatchOpenEdit(id, grade);
  };

  render() {
    if (_.values(this.props.entries).length <= 1) {
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
            <p onClick={() => this.onGradeClick(entry.id, entry.grade)}>{entry.grade}</p>
            <p className="delete-link" onClick={() => this.onDeleteClick(entry.id)}>X</p>
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
  dispatchOpenEdit: openEdit,
}))(EntryList);
