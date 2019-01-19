import React, { Component } from 'react';
import _ from 'lodash';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './EntryList.css';
import {
  remove as deleteEntry,
} from '../actions/examEntry';
import {
  openEdit,
  closeEdit,
} from '../actions/examEdit';

export class EntryList extends Component {

  static displayName = 'src/EntryList';

  static propTypes = {
    entries: PropTypes.object.isRequired,
    entryInEditState: PropTypes.object.isRequired,
    dispatchDeleteEntry: PropTypes.func.isRequired,
    dispatchOpenEdit: PropTypes.func.isRequired,
    dispatchCloseEdit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    entries: {},
    dispatchDeleteEntry: () => {},
    dispatchOpenEdit: () => {},
  };

  onDeleteClick = (id) => {
    // if we have deleted an entry being edited, close it
    if (this.props.entryInEditState.id === id) {
      this.props.dispatchCloseEdit();
    }
    this.props.dispatchDeleteEntry(id);
  };

  onGradeClick = (id, name, grade) => {
    this.props.dispatchOpenEdit(id, name, grade);
  };

  render() {
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
            <p onClick={() => this.onGradeClick(entry.id, entry.name, entry.grade)} className="grade">{entry.grade}</p>
            <p className="delete-link" onClick={() => this.onDeleteClick(entry.id)}>X</p>
          </div>
        ))}
      </div>
    );
  }
}

export default connect((state) => ({
  entries: state.examEntries,
  entryInEditState: state.edit.entry,
}), ({
  dispatchDeleteEntry: deleteEntry,
  dispatchOpenEdit: openEdit,
  dispatchCloseEdit: closeEdit,
}))(EntryList);
