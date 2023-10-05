import { React, useRef, useState } from "react";
import "./style.css";
import Navbar from "../navbar/Navbar";
import headerBackground from "./header-background.svg";
import ForwardBtn from "../forwardBtn/ForwardBtn";
import { useClickOutside } from "../../hooks/useClickOutside";
import BurgerButton from "../burgerButton/BurgerButton";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (menuActive) {
      setTimeout(() => setMenuActive(false), 200);
    }
  });

  return (
    <header className="header">
      <div className="header__background">
        <img src={headerBackground} alt="" />
      </div>
      <BurgerButton
        isActive={menuActive}
        onClick={() => setMenuActive(!menuActive)}
      />
      <Navbar isActive={menuActive} ref={menuRef} />

      <div className="header__title">Cosmo Script</div>
      <div className="header__subtitle">
        Научитесь программировать <br />с помощью игры
      </div>
      <ForwardBtn />
      <button className="header__button"></button>
    </header>
  );
};

export default Header;

// function handleNav() {
//   setMenuActive(!menuActive);
//   if (menuActive) {
//     document.body.style.overflow = "hidden";
//   }
// }
