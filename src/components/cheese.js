import React, { useState } from "react";

export default props => {
  let cheeseSlice = null;
  let cheeseSlices = [cheeseSlice];

  const addSlice = () => {
    //Find a way to add cheese slices on click! (Hint: use React Hooks, in particular the useState hook)
  };

  return cheeseSlices.map(cheese => (
    <div className="cheese">
      <div className="cheese__container">
        <img
          src={null}
          onClick={() => {
            addSlice();
          }}
        />
      </div>
    </div>
  ));
};
