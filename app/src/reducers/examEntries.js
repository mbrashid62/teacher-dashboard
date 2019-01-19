import { reject } from 'lodash';
import { EXAM_ENTRY_ACTION_TYPES } from '../actions/examEntry';

export default function(state = {}, action) {
  switch (action.type) {
    case EXAM_ENTRY_ACTION_TYPES.UPDATE:
    case EXAM_ENTRY_ACTION_TYPES.CREATE:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload.data,
          id: action.payload.id,
        },
      };
    case EXAM_ENTRY_ACTION_TYPES.DELETE:
      return {
        ...reject(state, item => item.id === action.payload.id),
      };
    default:
      return state;
  }
}
