import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import AppIndex from "./AppIndex";

export const StoreContext = React.createContext({});

/**
 * 1. useContext : 전역변수
 */
function App() {
  const [loginUser, setLoginUser] = React.useState({
    id: "",
    pw: "",
  });

  const { pathname } = useLocation();
  const navigation = useNavigate();

  const 주소유효성검증 = () => {
    const 로그인했을떄비접근주소 = ["join", "login"];
    const 주소 = pathname.slice(1);

    if (로그인했을떄비접근주소.includes(주소) && loginUser.id !== "") {
      navigation("/main");
    }
  };

  const 자동로그인 = () => {
    const user = JSON.parse(localStorage.getItem("loginUser"));

    if (user) {
      setLoginUser(user);
    }
  };

  React.useEffect(() => {
    자동로그인();
  }, []);

  React.useEffect(() => {
    주소유효성검증();
  }, [loginUser]);

  return (
    <StoreContext.Provider
      value={{
        loginUser: loginUser,
        setLoginUser: setLoginUser,
      }}
    >
      <AppIndex />
    </StoreContext.Provider>
  );
}

export default App;
