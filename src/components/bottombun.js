import React from "react";

export default props => {
  let styles = {
    fill: null
  };

  return (
    <div className="bottom-bun">
      <div className="bottom-bun__container">
        <div style={styles} dangerouslySetInnerHTML={{ __html: null }} />
      </div>
    </div>
  );
};
