import React, { useEffect, useState } from "react";
import moment from "moment";

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("LLLL"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("LLLL"));
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <span className="text-[13px] font-medium">
      {currentTime}
    </span>
  );
};

export default LiveClock;
