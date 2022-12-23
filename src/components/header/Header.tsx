import { Fragment, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import { links } from "@utils/links";

const Header = () => {
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
    <header className="flex flex-col justify-between tracking-tighter">
      <div className="flex flex-row items-center justify-between p-5">
        <a className="cursor-pointer text-xl md:text-2xl lg:text-3xl" href="/">
          rubenbrandao
        </a>
        {/* <nav className="invisible sm:visible space-x-5">
          {links.map((link) => {
            return (
              <a href={link.to} key={link.label}>
                {link.label}
              </a>
            );
          })}
        </nav> */}
        <div className="sm:hidden flex flex-col cursor-pointer">
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
      </div>
      {isOpen && (
        <nav className="flex flex-col items-start p-5 space-y-5">
          {links.map((link) => {
            return (
              <a className="md:text-2xl lg:text-3xl" href={link.to}>
                {link.label}
              </a>
            );
          })}
        </nav>
      )}
      <hr className="mx-5 h-px bg-neutral-300 border-0" />
    </header>
  );
};

export default Header;
