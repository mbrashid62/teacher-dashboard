import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './EditModal.css';
import { closeEdit } from '../actions/examEntry';

export class EditModal extends Component {

  static displayName = 'app/src/components/EditModal';

  static propTypes = {
    isOpen: PropTypes.bool,
    id: PropTypes.number,
    gradeToEdit: PropTypes.string,
  };

  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return (
      <div className="edit-modal">
        <p>Edit the following Exam:</p>
        <input
          className="grade-input"
          type="number"
          min="0"
          max="100"
          placeholder={this.props.gradeToEdit}
        />
        <button>Save</button>
        <button>Close</button>
      </div>
    );
  }
}

export default connect((state) => ({
  isOpen: state.examEntries.edit.isOpen,
  gradeToEdit: state.examEntries.edit.entry.grade,
  id: state.examEntries.edit.entry.id,
}), ({
  dispatchCloseModal: closeEdit,
}))(EditModal);

