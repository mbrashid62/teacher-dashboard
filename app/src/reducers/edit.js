import { EXAM_EDIT_ACTION_TYPES } from '../actions/examEdit';

const INITIAL_STATE = {
  isOpen: false,
  entry: {},
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EXAM_EDIT_ACTION_TYPES.OPEN_EDIT:
      return {
        isOpen: true,
        entry: {
          id: action.payload.id,
          name: action.payload.name,
          grade: action.payload.grade,
        },
      };
    case EXAM_EDIT_ACTION_TYPES.SAVE_EDIT:
    case EXAM_EDIT_ACTION_TYPES.CLOSE_EDIT:
      return {
        isOpen: false,
        entry: {},
      };
    default:
      return state;
  }
}
