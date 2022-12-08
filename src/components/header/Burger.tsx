import React, { Fragment, useMemo, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Burger = () => {
  const [isOpen, toggle] = useState<boolean>(false);

  const first = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)",
  });
  const second = useSpring({
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)",
  });
  const third = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(22px, 31px) rotate(0deg)",
  });

  return (
    <Fragment>
      <div className="md:hidden cursor-pointer">
        <svg
          onClick={() => toggle(!isOpen)}
          className="w-5 h-5"
          viewBox="0 0 44 44"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <animated.rect className="w-10 h-1" style={first} />
          <animated.rect className="w-10 h-1" style={second} />
          <animated.rect className="w-5 h-1" style={third} />
        </svg>
      </div>
    </Fragment>
  );
};

export default Burger;
