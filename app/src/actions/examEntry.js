export const EXAM_ENTRY_ACTION_TYPES = {
  CREATE: 'CREATE_EXAM_ENTRY',
  UPDATE: 'UPDATE_EXAM_ENTRY',
  DELETE: 'DELETE_EXAM_ENTRY',
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

export const update = (id, data) => {
  return {
    type: EXAM_ENTRY_ACTION_TYPES.UPDATE,
    payload: {
      id,
      data,
    },
  };
};

export const remove = id => {
  return {
    type: EXAM_ENTRY_ACTION_TYPES.DELETE,
    payload: { id },
  };
};
