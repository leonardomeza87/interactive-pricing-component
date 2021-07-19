import React, { useState, useEffect } from "react";

const Pageviews = ({ sliderValue }) => {
  const [views, setViews] = useState("100k");

  useEffect(() => {
    const viewsList = ["10k", "50k", "100k", "500k", "1M"];

    setViews(viewsList[sliderValue]);
  }, [sliderValue]);

  return (
    <div className="pageviews">
      <p>{views} Pageviews</p>
    </div>
  );
};

export default Pageviews;
