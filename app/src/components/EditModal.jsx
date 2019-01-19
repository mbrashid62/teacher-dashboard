import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import './EditModal.css';
import { update } from '../actions/examEntry';
import { closeEdit } from '../actions/examEdit';

export class EditModal extends Component {

  static displayName = 'app/src/components/EditModal';

  static propTypes = {
    isOpen: PropTypes.bool,
    id: PropTypes.number,
    studentName: PropTypes.string,
    initialGrade: PropTypes.string,
    dispatchUpdateEntry: PropTypes.func,
    dispatchCloseModal: PropTypes.func,
  };

  state = {
    grade: '',
  };

  inputEditRef = {};

  onGradeEdit = (e) => {
    const grade = parseInt(e.target.value);
    if (grade < 0 || grade > 100) {
      this.inputEditRef.value = this.state.grade;
    } else {
      this.setState({ grade });
    }
  };

  onSave = () => {
    const data = {
      name: this.props.studentName,
      grade: this.state.grade,
    };
    this.props.dispatchUpdateEntry(this.props.id, data);
    this.props.dispatchCloseModal();
  };

  render() {
    if (!this.props.isOpen) {
      return null;
    }
    console.log('in Render: ', this.state.grade);
    return (
      <div className="edit-modal">
        <p>Edit {this.props.studentName}'s exam:</p>
        <input
          onChange={this.onGradeEdit}
          ref={(ref) => this.inputEditRef = ref}
          className="grade-input"
          type="number"
          min="0"
          max="100"
          placeholder={this.props.initialGrade}
        />
        <button
          onClick={this.onSave}
          disabled={
            !this.state.grade
            || this.state.grade === this.props.initialGrade
          }
        >Save</button>
        <button onClick={this.props.dispatchCloseModal}>Close</button>
      </div>
    );
  }
}

export default connect((state) => ({
  isOpen: state.edit.isOpen,
  id: state.edit.entry.id,
  studentName: state.edit.entry.name,
  initialGrade: state.edit.entry.grade,
}), ({
  dispatchCloseModal: closeEdit,
  dispatchUpdateEntry: update,
}))(EditModal);

