import { Fragment, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const links = [
  { to: "/blog", label: "blog" },
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
];

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
        <nav className="invisible space-x-5 sm:visible">
          {links.map((link) => {
            return (
              <a href={link.to} key={link.label}>
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="flex cursor-pointer flex-col sm:hidden">
          <svg
            onClick={() => toggle(!isOpen)}
            className="h-5 w-5"
            viewBox="0 0 44 44"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <animated.rect className="h-1 w-10" style={first} />
            <animated.rect className="h-1 w-10" style={second} />
            <animated.rect className="h-1 w-5" style={third} />
          </svg>
        </div>
      </div>
      {isOpen && (
        <nav className="flex flex-col items-start space-y-5 p-5">
          {links.map((link) => {
            return (
              <a className="md:text-2xl lg:text-3xl" href={link.to}>
                {link.label}
              </a>
            );
          })}
        </nav>
      )}
      <hr className="mx-5 h-px border-0 bg-neutral-300" />
    </header>
  );
};

export default Header;
