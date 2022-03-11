import React, { useEffect } from "react";

const Counter = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setCounter((count) => count + 1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [props.counter]);

  return <div>{props.counter}</div>;
};

export default Counter;
