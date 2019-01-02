import React, { Component } from 'react';
import './StudentInput.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { create as createExamEntry } from '../actions/examEntry';

const KEY_CODES = {
  ENTER: 13,
};

export class StudentInput extends Component {

  static displayName = 'src/components/StudentInput';

  static propTypes = {
    dispatchCreateExamEntry: PropTypes.func.isRequired,
  };

  nameInputRef = null;

  gradInputRef = null;

  state = {
    name: '',
    grade: null,
    number: 1,
  };

  onStudentSubmitAttempt = () => {
    this.isValidInput() ? this.createStudent() : this.showError();
  };

  onNameType = (e) => {
    if (e.keyCode === KEY_CODES.ENTER) {
      this.onStudentSubmitAttempt();
    }
    this.setState({ name: e.target.value });
  };

  onKeyDown = (e) => {
    if (e.keyCode === KEY_CODES.ENTER) {
      this.onStudentSubmitAttempt();
    }
  };

  onGradeChange = (e) => {
    const grade = parseInt(e.target.value);
    if (grade < 0 || grade > 100) {
      this.gradInputRef.value = this.state.grade;
    } else {
      this.setState({ grade });
    }
  };

  // TODO: define more input validity rules instead of just a simple truthy check
  isValidInput = () => this.state.grade && this.state.name;

  createStudent = () => {
    this.props.dispatchCreateExamEntry(this.state.number, {
      name: this.state.name,
      grade: this.state.grade,
    });

    this.resetInput();
  };

  showError = () => {
    console.log('Error!');
  };

  resetInput = () => {
    this.setState({
      name: '',
      grade: null,
      number: ++this.state.number,
    });

    this.nameInputRef.value = '';
    this.gradInputRef.value = '';
  };

  render() {
    return (
      <div className="student-input-container">
        <input
          ref={(ref) => this.nameInputRef = ref}
          className="name-input"
          type="text"
          onKeyDown={this.onNameType}
          placeholder="Joe Smith"
        />
        <input
          ref={(ref) => this.gradInputRef = ref}
          className="grade-input"
          type="number"
          min="0"
          max="100"
          onChange={this.onGradeChange}
          onKeyDown={this.onKeyDown}
          placeholder="100"
        />
        <button
          onClick={this.onStudentSubmitAttempt}
          disabled={!this.isValidInput()}
        >Enter Grade
        </button>
      </div>
    );
  }
}

export default connect(null, {
  dispatchCreateExamEntry: createExamEntry,
})(StudentInput);
