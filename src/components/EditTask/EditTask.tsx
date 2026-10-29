import "./style.css";
import { useTodoStore } from "../../store/StoreTodo";

function EditTask() {
  const editTitle = useTodoStore((state) => state.editTitle);
  const handleEditTitleChange = useTodoStore(
    (state) => state.handleEditTitleChange
  );
  const editTasks = useTodoStore((state) => state.editTasks);
  const selectId = useTodoStore((state) => state.selectId);
  const cancel = useTodoStore((state) => state.cancel);

  return (
    <div className="wrapper-edit-task">
      <input
        value={editTitle}
        onChange={handleEditTitleChange}
        type="text"
        placeholder="Edit task..."
      />

      <div className="wrapper-button-edit">
        <button
          onClick={() => {
            editTasks(selectId, editTitle);
          }}
          className="btn-edit-task"
        >
          Save
        </button>
        <button onClick={() => cancel()} className="btn-cancel">
          Cancel
        </button>
      </div>
      
    </div>
  );
}

export default EditTask;
