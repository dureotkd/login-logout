import React from "react";

import { StoreContext } from "../App";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Login() {
  const { setLoginUser } = React.useContext(StoreContext);
  const navigation = useNavigate();

  const [user, setUser] = React.useState({
    id: "",
    pw: "",
  });

  const 로그인 = async () => {
    await axios({
      url: "http://localhost:5000/login",
      params: {
        user: user,
      },
    }).then(({ data }) => {
      setLoginUser(data.user);
      localStorage.setItem("loginUser", JSON.stringify(data.user));
      navigation("/main");
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          onChange={(event) => {
            const cloneUser = { ...user };
            cloneUser.id = event.target.value;
            setUser(cloneUser);
          }}
        />
        <input
          style={{ marginTop: 10 }}
          type="password"
          onChange={(event) => {
            const cloneUser = { ...user };
            cloneUser.pw = event.target.value;
            setUser(cloneUser);
          }}
        />
        <button style={{ marginTop: 10 }} onClick={로그인}>
          로그인
        </button>
      </header>
    </div>
  );
}

export default Login;
