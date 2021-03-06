import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/login";


const BASE_URL = "http://localhost:4000";

const Tasks = ({}) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [update, setUpdate] = useState("");

  const state = useSelector((state) => {
    return {
      signIn: state.signIn,
      task: state.Task,
      
    };
  });

  const dispatch = useDispatch()


  useEffect(() => {
    allTasks();
  }, []);

useEffect(() => {
    const token = localStorage.getItem("token");
    // setLocal(token);
    allTasks();
  }, []);

  const logOut = () => {
    localStorage.clear();
    dispatch(logout({ user: null , token: "" }))
    // window.location.reload(false)
    // clearToken("");
  };

  const allTasks = async () => {
    try {
      const todo = await axios.get(`${BASE_URL}/allTask`, {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
      );
      setTasks(todo.data);
    } catch (error) {
      console.log(error);
    }
  };



    const addTask = async () => {
    try {
      await axios.post(
        `${BASE_URL}/addTask`,
        {
          name: task,
        },
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    allTasks(state.signIn.token);
  };


   const deleteTask = async (id) => {
    try {
      await axios.delete(
        `${BASE_URL}/deleteTask/${id}`, {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
    })
    allTasks(state.signIn.token);
  } catch (error) {
    console.log(error);
  }
   };

   const updateTask = async (id) => {
    try {
      await axios.put(
        `${BASE_URL}/updateTask/${id}`,
        {
          _id: id,
          name: update,
        },
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      allTasks(state.signIn.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={logOut}>logOut</button>
      </div>
      <hr />
      <br />

      <div>
        <input
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new Task"
        />
        <button onClick={addTask}>
          Add New Task
        </button>
      </div>

      <div>
        {tasks.length &&
          tasks.map((item) => (
            <>
              <h2 key={item._id}>{item.name}</h2>
              <input onChange={(val) => setUpdate(val.target.value)}/>
              <button onClick={() => updateTask(item._id)}> Update </button>
              <button onClick={() => deleteTask(item._id)}> Delete </button>

            </>
          ))}
      </div>
      <br />
    </>
  );
};

export default Tasks;
