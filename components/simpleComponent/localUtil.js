import React from "react";

const localUtil = () => {
  return `Bearer ${localStorage.getItem("user").slice(1, -1)}`;
};

export default localUtil;
