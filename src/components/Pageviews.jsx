import React, { useState, useEffect } from "react";

const Pageviews = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const timer = setInterval(() => {
        setViews((views) => {
          if (views < 100) {
            return views + 4;
          } else {
            clearInterval(timer);
            return 100;
          }
        });
      }, 20);
    }, 1000);
  }, []);

  return (
    <div className="pageviews">
      <p>{views}k Pageviews</p>
    </div>
  );
};

export default Pageviews;
