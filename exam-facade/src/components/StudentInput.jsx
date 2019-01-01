import React, { Component } from 'react';
import './StudentInput.css';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

export default class StudentInput extends Component {

  static displayName = 'src/components/StudentInput';

  static propTypes = {

  };

  static defaultProps = {

  };

  state = {
    name: '',
    grade: null,
  };
  onInputBlur = () => {};

  onInputEnter = () => {};

  onStudentSubmitAttempt = () => {
    this.isValidInput() ? this.createStudent() : this.showError();
  };

  onNameType = (e) => {
    this.setState({ name: e.target.value });
  };

  onGradeChange = (e) => {
    this.setState({ grade: parseInt(e.target.value) });
  };

  // TODO: define more input validity rules instead of just a simple truthy check
  isValidInput = () => this.state.grade && this.state.name;

  createStudent = () => {
    console.log('creating student...');
  };

  showError = () => {};

  render() {
    return (
      <div className="student-input-container">
        <input className="name-input" type="text" onKeyDown={this.onNameType} placeholder="Joe Smith..."/>
        <input className="grade-input" type="number" onChange={this.onGradeChange} placeholder="100"/>
        <button onClick={this.onStudentSubmitAttempt}>Enter Student</button>
      </div>
    );
  }
}

// export default connect((state) => ({
//
// }), ({
//
// }))(StudentInput);
