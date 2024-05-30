import {useState} from "react";

const style = (completed) => ({
  width: "8rem",
  height: "8rem",
  margin: ".2rem",
  border: "1px solid #444",
  cursor: "pointer",
  background: !completed ? "yellow" : "gray"
})

export const TaskItem = ({id, title, userId, completed}) => {
  const [done, setDone] = useState(completed);

  return <div
    key={id}
    style={style(done)}
    onClick={() => setDone(!done)}
  >
  	<p>{title}</p>
    <p>{userId}</p>
  </div>
}