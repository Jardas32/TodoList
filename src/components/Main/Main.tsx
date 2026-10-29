import "./style.css";
import { useTodoStore } from "../../store/StoreTodo";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import EditTask from "../EditTask/EditTask";

function Main() {
  const todos = useTodoStore((state) => state.todos);
  const deleteTasks = useTodoStore((state) => state.deleteTasks);
  const completedChange = useTodoStore((state) => state.completedChange);
  const handleSelectId = useTodoStore((state) => state.handleSelectId);
  const selectId = useTodoStore((state) => state.selectId);

  return (
    <>
      <div className="wrapper-list">
        <ol className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo ${todo.completed ? "active" : ""}`}
            >
              {selectId === todo.id ? (
                <EditTask />
              ) : (
                <>
                  <div className="li-group">
                    <div className="wrapper-checked">
                      <input
                        onChange={() => completedChange(todo.id)}
                        type="checkbox"
                        checked={todo.completed}
                      />
                      <span
                        className={`title ${todo.completed ? "active" : ""}`}
                      >
                        {todo.title}
                      </span>
                    </div>

                    <div className="wrapper-button">
                      <button className="btn-edit">
                        <CiEdit
                          onClick={() => {
                            handleSelectId(todo.id);
                          }}
                          className="icon-edit"
                        />
                      </button>
                      <button className="btn-delete">
                        <MdDeleteForever
                          onClick={() => deleteTasks(todo.id)}
                          className="icon-delete"
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* {openEdit && <EditTask setOpenEdit={setOpenEdit} />} */}
    </>
  );
}

export default Main;
