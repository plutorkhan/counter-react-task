import React, { useEffect, useState } from "react";

const RandomList = (props) => {
  const [numArr, setNumArr] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < props.randomNumber; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    setNumArr(arr);
  }, [props.randomNumber]);

  return (
    <div>
      {numArr.map((n) => (
        <span>{n}</span>
      ))}
    </div>
  );
};

export default RandomList;
