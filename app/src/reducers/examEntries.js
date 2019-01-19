import { reject } from 'lodash';
import { EXAM_ENTRY_ACTION_TYPES } from '../actions/examEntry';
const INITIAL_STATE = {
  edit: {
    isOpen: false,
    entry: {},
  },
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
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
    case EXAM_ENTRY_ACTION_TYPES.OPEN_EDIT:
      return {
        ...state,
        edit: {
          isOpen: true,
          entry: {
            id: action.payload.id,
            grade: action.payload.grade,
          },
        },
      };
    case EXAM_ENTRY_ACTION_TYPES.CLOSE_EDIT:
      return {
        ...state,
        edit: {
          isOpen: false,
          entry: {},
        },
      };
    default:
      return state;
  }
}
