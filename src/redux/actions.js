import { nanoid } from 'nanoid';

export const addTask = (text = 'без названя') => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      text,
      complited: false,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
