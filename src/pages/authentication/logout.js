import React from "react";

const Logout = () => {
  localStorage.removeItem("token");
};

export default Logout;
