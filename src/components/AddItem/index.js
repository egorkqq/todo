import React from "react";

const AddItem = ({ onAddItem }) => {
  return (
    <div>
      <input className="form-control " type="text" />
      <button onClick={() => onAddItem("Hello")} className="form-control btn">
        Add
      </button>
    </div>
  );
};

export default AddItem;
