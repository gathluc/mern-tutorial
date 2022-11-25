import React from "react";

const View = ({ data }) => {
  return (
    <div>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
      <p>description: {data?.description}</p>
    </div>
  );
};

export default View;