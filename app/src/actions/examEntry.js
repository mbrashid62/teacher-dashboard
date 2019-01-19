export const EXAM_ENTRY_ACTION_TYPES = {
  CREATE: 'CREATE_EXAM_ENTRY',
  UPDATE: 'UPDATE_EXAM_ENTRY',
  DELETE: 'DELETE_EXAM_ENTRY',
  OPEN_EDIT: 'OPEN_EDIT',
  CLOSE_EDIT: 'CLOSE_EDIT',
};

export const create = (id, data) => {
  return {
    type: EXAM_ENTRY_ACTION_TYPES.CREATE,
    payload: {
      id,
      data,
    },
  };
};

export const update = () => {
  return {
    type: '',
    payload: '',
  };
};

export const openEdit = (id, grade) => {
  return {
    type: EXAM_ENTRY_ACTION_TYPES.OPEN_EDIT,
    payload: {
      id,
      grade,
    },
  };
};

export const closeEdit = () => {
  return {
    type: EXAM_ENTRY_ACTION_TYPES.CLOSE_EDIT,
    payload: {},
  };
};
export const remove = id => {
  return {
    type: EXAM_ENTRY_ACTION_TYPES.DELETE,
    payload: { id },
  };
};
