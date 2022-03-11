import React, { useEffect, useState } from "react";

const RandomList = (props) => {
  const [numArr, setNumArr] = useState([]);
  useEffect(() => {
    let arr = [...numArr];
    arr.push(Math.floor(Math.random() * 100));
    setNumArr(arr);
  }, [props.randomNumber]);

  return (
    <div>
      <ul>
        {numArr.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomList;
