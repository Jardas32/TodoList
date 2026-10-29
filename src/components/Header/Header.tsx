import "./style.css";
import { useTodoStore } from "../../store/StoreTodo";
import { useStoreUser } from "../../store/StoreUser";

function Header() {
  const title = useTodoStore((state) => state.title);
  const handleTitleChange = useTodoStore((state) => state.handleTitleChange);
  const addTasks = useTodoStore((state) => state.addTasks);
  const userName = useStoreUser((state) => state.userName);
  const deleteUser = useStoreUser((state) => state.deleteUser);
  const clearTodos = useTodoStore((state) => state.clearTodos);

  return (
    <header className="header">
      <div className="wrapper-header-user">
        <span>User:</span>
        <strong>{userName}</strong>
      </div>

      <div className="wrapper-input">
        <input
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="Enter task . . ."
        />
        <button onClick={() => addTasks(title)} className="btn-add">
          Add
        </button>
      </div>

      <div className="wrapper-user-delete">
        <button
          onClick={() => {
            deleteUser();
            clearTodos();
          }}
          className="btn-delete-user"
        >
          Delete user
        </button>
      </div>
    </header>
  );
}

export default Header;
