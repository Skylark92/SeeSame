import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "./router/Router";
import getUserData from "./firebase/getUserData";
import { LOGIN } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("seesame-t");

    if (token) {
      getUserData(token)
        .then((res) => {
          dispatch(LOGIN(res));
        });
    }
  }, [])

  return (
    <div className="app-container">
      <Router />
    </div>
  );
}
export default App;
