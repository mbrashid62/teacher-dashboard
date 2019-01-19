import { combineReducers } from 'redux';
import app from './app';
import exams from './examEntries';
import edit from './edit';

export default combineReducers({
  app,
  examEntries: exams,
  edit,
});
