import "./style.css";
import { useTodoStore } from "../../store/StoreTodo";

function Footer() {
  const totalTasks = useTodoStore((state) => state.todos.length);
  const completedTasks = useTodoStore(
    (state) => state.todos.filter((t) => t.completed).length
  );
  const activeTasks = useTodoStore(
    (state) => state.todos.filter((t) => !t.completed).length
  );

  return (
    <footer className="footer">
      <h3 className="status">Statistics</h3>

      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
      <p>Active tasks: {activeTasks}</p>
    </footer>
  );
}

export default Footer;
