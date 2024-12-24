import React, { useState } from "react";

const SortBalls = () => {
  const [balls, setBalls] = useState(["R", "G", "B", "G", "G", "R", "B", "B", "G"]);
  const [sortedBalls, setSortedBalls] = useState([]);

  const sortBalls = () => {
    let low = 0,
      mid = 0,
      high = balls.length - 1;
    const tempBalls = [...balls];

    while (mid <= high) {
      if (tempBalls[mid] === "B") {
        [tempBalls[low], tempBalls[mid]] = [tempBalls[mid], tempBalls[low]];
        low++;
        mid++;
      } else if (tempBalls[mid] === "G") {
        mid++;
      } else {
        [tempBalls[mid], tempBalls[high]] = [tempBalls[high], tempBalls[mid]];
        high--;
      }
    }

    setSortedBalls(tempBalls);
  };

  return (
    <div>
      <h2>Input Balls: {balls.join(", ")}</h2>
      <button onClick={sortBalls}>Sort Balls</button>
      {sortedBalls.length > 0 && <h2>Sorted Balls: {sortedBalls.join(", ")}</h2>}
    </div>
  );
};

export default SortBalls;
