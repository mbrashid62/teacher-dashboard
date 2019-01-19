export const EXAM_EDIT_ACTION_TYPES = {
  OPEN_EDIT: 'OPEN_EDIT',
  CLOSE_EDIT: 'CLOSE_EDIT',
  SAVE_EDIT: 'SAVE_EDIT',
};

export const openEdit = (id, name, grade) => {
  return {
    type: EXAM_EDIT_ACTION_TYPES.OPEN_EDIT,
    payload: {
      id,
      name,
      grade,
    },
  };
};

export const closeEdit = () => {
  return {
    type: EXAM_EDIT_ACTION_TYPES.CLOSE_EDIT,
    payload: {},
  };
};
