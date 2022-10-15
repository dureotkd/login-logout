import React from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../App";

function Main() {
  const { loginUser, setLoginUser } = React.useContext(StoreContext);
  const navigation = useNavigate();

  return (
    <div>
      안녕하세요 {loginUser.id}님 !{" "}
      <button
        onClick={() => {
          localStorage.removeItem("loginUser");
          setLoginUser({
            id: "",
            pw: "",
          });
          navigation("/Login");
        }}
      >
        로그아웃
      </button>
    </div>
  );
}

export default Main;
