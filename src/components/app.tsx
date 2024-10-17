import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createData, setStatus } from "../store/todoSlice";
import NewTaskForm from "./newTaskForm";
import TaskList from "./taskList";
import Footer from "./footer";

function App() {
  const [label, setLabel] = useState<string>("");
  const dispatch = useDispatch();

  const newData = () => {
    dispatch(createData(label));
    dispatch(setStatus("all"));
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (label.trim() === "") {
      return;
    }
    newData();
    setLabel("");
  };

  return (
    <section className="todoapp">
      <form className="header" onSubmit={handleSubmit}>
        <h1>todos</h1>
        <NewTaskForm handleChange={handleChange} label={label} />
      </form>
      <section className="main">
        <ul className="todo-list">
          <TaskList />
        </ul>
        <Footer />
      </section>
    </section>
  );
}

export default App;
