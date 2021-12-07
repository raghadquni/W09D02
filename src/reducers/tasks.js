const initialState = {
    task: [],
    isDel: false,
  };

const Tasks = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
      case "ADD":
        const tasks = [...state.task, payload]
        return {task};

      case "GET":
        return payload;
  
      case "UPDATE":
        const task = [...state.task, payload]
        return { task };
  
      case "DELETE":
        return payload;
  
      default:
        return state;
    }
  };

export default Tasks;

export const addTask = (data) => {
    return {
      type: "ADD",
      payload: data,
    };
  };

export const allTasks = (data) => {
    return {
      type: "GET",
      payload: data,
    };
  };

export const updateTask = (data) => {
    return {
      type: "UPDATE",
      payload: data,
    };
  };

export const deleteTask = (data) => {
    return {
      type: "DELETE",
      payload: data,
    };
  };