import { useAppSelector } from "../hooks";
import { Todo } from "../store/todoSlice";
import Task from "./task";

function TaskList() {
  const todos = useAppSelector((state) => state.todos.todos);
  const status = useAppSelector((state) => state.todos.status);

  const filterTodos = todos.filter((el) => {
    if (status === "active") return !el.check;
    if (status === "completed") return el.check;
    return true;
  });
  const tasks = filterTodos.map((task: Todo) => {
    return <Task key={task.id} id={task.id} props={task} />;
  });

  return <>{tasks}</>;
}

export default TaskList;
