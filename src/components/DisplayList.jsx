import {useState, useEffect} from "react";
import {TaskItem} from "./TaskItem";

const style = {
  width: "64rem",
  display: "flex",
  margin: "0 auto",
  padding: ".4rem",
  // height: "8rem",
  justifyContent: "space-evenly",
  border: "1px solid #444",
  background: "#d5d5d5",
  flexWrap: "wrap"
}

export const DisplayList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://todos.com/list");
    const tasks = await response.json();
    setTasks(tasks);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return <div style={style}>
  	{
      tasks.map((props) => <TaskItem key={props.id} {...props}/>)
    }
  </div>
}
