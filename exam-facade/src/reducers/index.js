import { combineReducers } from 'redux';
import app from './app';
import exams from './examEntries';

export default combineReducers({
  app,
  examEntries: exams,
});
