const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const DB = {
  user: [
    {
      id: "a",
      pw: "a",
    },
  ],
};

app.get("/", function (req, res) {
  res.send("?");
});

app.get("/login", (req, res) => {
  const { user } = req.query;
  const id = user.id;
  const pw = user.pw;
  const 유효성배열 = [1];

  const result = {
    code: "success",
    message: "로그인되었습니다",
    user: null,
  };

  // 유효성 검증
  for (let key in 유효성배열) {
    if (id === "") {
      result.code = "fail";
      result.message = "아이디를 입력해주세요";
      break;
    }
    if (pw === "") {
      result.code = "fail";
      result.message = "비밀번호를 입력해주세요";
      break;
    }

    const findUser = DB.user.find((item) => {
      return item.id === id && item.pw === pw;
    });

    if (findUser === undefined) {
      result.code = "fail";
      result.message = "정보가 일치하지않습니다";
      break;
    }

    result.user = findUser;
    res.send(result);
  }

  if (result.code === "fail") {
    res.send(result);
  }

  //
});

app.post("/join", (req, res) => {
  console.log(req.query);
});

app.listen(5000, function () {
  console.log("서버켜짐");
});
