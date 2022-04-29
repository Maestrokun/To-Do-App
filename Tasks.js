import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, onClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default Tasks;
