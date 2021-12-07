const initialState = {
    task: "",
    isDel: false,
  };

const Tasks = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD":
        const { task, isDel } = payload;
        return { task, isDel: false };

      case "GET":
        return { task, isDel };
  
      case "UPDATE":
        const { task, isDel } = payload;
        return { task, isDel };
  
      case "DELETE":
        return { task, isDel: true };
  
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