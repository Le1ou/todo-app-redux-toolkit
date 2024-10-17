import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { useDispatch } from "react-redux";
import { onToogleCheck, deleteTodo, editSubmit, Todo } from "../store/todoSlice";

interface TaskProps {
  props: Todo;
  id: string;
}

const Task: React.FC<TaskProps> = ({ props, id }) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(props.label);

  const dispatch = useDispatch();

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(editSubmit({ id, value: editText }));
    setEdit(false);
  };

  let className = props.check ? "completed" : "";
  if (edit && !props.check) {
    className = "editing";
  }
  const timeAgo = `created ${formatDistanceToNow(new Date(props.date), { addSuffix: true, includeSeconds: true })}`;

  return (
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.check}
          onClick={() => dispatch(onToogleCheck(id))}
          readOnly
        />
        <label onClick={() => dispatch(onToogleCheck(id))}>
          <span className="description">{props.label}</span>
          <span className="created">{timeAgo}</span>
        </label>
        <button className="icon icon-edit" onClick={() => setEdit(!edit)}></button>
        <button className="icon icon-destroy" onClick={() => dispatch(deleteTodo(id))}></button>
      </div>
      {edit && (
        <form onSubmit={onSubmit}>
          <input
            className="edit"
            type="text"
            onChange={(evt) => setEditText(evt.target.value)}
            value={editText}
            onBlur={() => setEdit(!edit)}
            autoFocus
          />
        </form>
      )}
    </li>
  );
}

export default Task;
