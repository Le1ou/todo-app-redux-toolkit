import { useAppSelector, useAppDispatch } from "../hooks";
import { clearData } from "../store/todoSlice";
import TasksFilter from "./tasksFilter";

function Footer() {
  const completed = useAppSelector((state) => state.todos.todos);
  const resCompleted = completed.filter((el) => !el.check).length;
  const dispatch = useAppDispatch();

  return (
    <footer className="footer">
      <span className="todo-count">{resCompleted} items left</span>
      <ul className="filters">
        <TasksFilter />
      </ul>
      <button className="clear-completed" onClick={() => dispatch(clearData())}>
        Clear Completed
      </button>
    </footer>
  );
}

export default Footer;
