interface newTaskFormProps {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const NewTaskForm: React.FC<newTaskFormProps> = ({ handleChange, label }) => {
  return (
    <input
      className="new-todo"
      type="text"
      placeholder="What needs to be down?"
      onChange={handleChange}
      value={label}
      autoFocus
    />
  );
}

export default NewTaskForm;
