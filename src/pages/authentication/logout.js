import React from "react";
import { useHistory } from "react-router-dom";

import Login from "./login";


function Logout() {
  let history = useHistory();

  function handleLogOut() {
    localStorage.setItem("token", '');

    localStorage.clear();
    history.push("/login");
  }

  return (
    <div>
      <Login />
    </div>
  );
}
export default Logout;