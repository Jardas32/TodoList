import "./style.css";
import { useState } from "react";
import TodoLogo from "/TodoLogo.png";
import { useStoreUser } from "../../store/StoreUser";

function User() {
  const [name, setName] = useState("");
  const handleAddUser = useStoreUser((state) => state.handleAddUser);

  return (
    <div className="wrapper-user">
      <div className="user-card">
        <h2 className="todo-title">My Todo List</h2>

        <div className="wrapper-logo">
          <img src={TodoLogo} alt="logo" />
        </div>

        <div className="wrapper-user-input">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name . . ."
          />
          <button onClick={() => handleAddUser(name)} className="btn-user-add">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
export default User;
