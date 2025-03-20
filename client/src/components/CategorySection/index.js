import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CategorySection = (props) => {
  const { each, addDrop, removeDrop, activeCat } = props;
  const { title, img } = each;

  const handleArrowDown = () => {
    addDrop(each);
  };
  const handleArrowUp = () => {
    removeDrop();
  };
  return (
    <div
      onMouseEnter={handleArrowDown}
      onMouseLeave={handleArrowUp}
      style={{
        paddingTop: "10px",
        display: "flex",
        flexDirection: "column",
        height: "140px",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "70px",
          height: "70px",
          alignSelf: "center",
          cursor: "pointer",
        }}
      />
      <div style={{ display: "flex", gap: "5px", alignSelf: "center" }}>
        <p
          style={{
            fontSize: "15px",
            alignSelf: "center",
            textAlign: "center",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {title}{" "}
        </p>
        <div
          style={{
            alignSelf: "center",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            opacity: "1",
            transform: activeCat === each ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          {activeCat !== undefined ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
    </div>
  );
};
export default CategorySection;
