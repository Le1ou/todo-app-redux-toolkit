import { useAppSelector, useAppDispatch } from "../hooks";
import { setStatus } from "../store/todoSlice";

function TasksFilter() {
  const status = useAppSelector((state) => state.todos.status);
  const dispatch = useAppDispatch();

  return (
    <>
      <li>
        <button className={status === "all" ? "selected" : ""} onClick={() => dispatch(setStatus("all"))}>
          All
        </button>
      </li>
      <li>
        <button className={status === "active" ? "selected" : ""} onClick={() => dispatch(setStatus("active"))}>
          Active
        </button>
      </li>
      <li>
        <button className={status === "completed" ? "selected" : ""} onClick={() => dispatch(setStatus("completed"))}>
          Completed
        </button>
      </li>
    </>
  );
}
export default TasksFilter;
