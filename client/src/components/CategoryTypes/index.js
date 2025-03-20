import React from "react";
import "./index.css";
const index = (props) => {
  const { each, index } = props;
  return (
    <li
      style={{
        width: "200px",
        backgroundColor: index % 2 !== 0 && "lightgrey",
        marginLeft: "0px",
        padding: "20px",
        boxSizing: "border-box",
        flexShrink: "0",
      }}
    >
      <p style={{ fontWeight: "600", marginBottom: "5px" }}>{each[0]}</p>
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "0px",
          marginLeft: "0px",
          gap: "10px",
        }}
      >
        {each[1].map((type) => (
          <li key={type} style={{ marginBottom: "5px" }}>
            {type}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default index;
