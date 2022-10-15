import { Login, Join, Main } from "./pages";

import { Routes, Route } from "react-router-dom";

function AppIndex() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/join" element={<Join />} />
      <Route exact path="/main" element={<Main />} />
    </Routes>
  );
}

export default AppIndex;
