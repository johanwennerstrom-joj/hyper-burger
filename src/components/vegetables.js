import React, { useEffect, useRef } from "react";

export default props => {
  let vegetablesRef = useRef();
  useEffect(() => {
    var elem = vegetablesRef;

    setTimeout(() => {
      var flkty = new window.Flickity(vegetablesRef.current, {
        // options
        cellAlign: "left",
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true
      });
    }, 100);
  }, []);

  return (
    <div className="vegetables">
      <div className="vegetables__container main-carousel" ref={vegetablesRef}>
        {/* {something.map((image, index) => ( */}
        <img className="carousel-cell" src={null} />
        {/* ))} */}
      </div>
    </div>
  );
};
