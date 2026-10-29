import "./App.css";
import { useStoreUser } from "./store/StoreUser";
import User from "./components/User/User";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useTodoStore } from "./store/StoreTodo";

function App() {
  const userName = useStoreUser((state) => state.userName);
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="wrapper-app">
      {userName === "" ? (
        <User />
      ) : (
        <>
          <Header />
          <Main />
          {todos.length > 0 && <Footer />}
        </>
      )}
    </div>
  );
}

export default App;
