import { React, useRef, useState, useEffect } from "react";
import "./style.css";
import Navbar from "../navbar/Navbar";
import headerBackground from "./header-background.svg";
import ForwardBtn from "../forwardBtn/ForwardBtn";
import { useClickOutside } from "../../hooks/useClickOutside";
import BurgerButton from "../burgerButton/BurgerButton";
import stars1 from "./stars_group_1.svg";
import stars2 from "./stars_group_2.svg";
import stars3 from "./stars_group_3.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);
  const closeMenu = () => {
    setMenuActive(false);
  };

  useClickOutside(menuRef, () => {
    if (menuActive) {
      setTimeout(() => setMenuActive(false), 200);
    }
  });

  useEffect(() => {
    if (menuActive) {
      document.body.classList.add("menu-active");
    } else {
      document.body.classList.remove("menu-active");
    }

    return () => {
      document.body.classList.remove("menu-active");
    };
  }, [menuActive]);

  return (
    <header className="header">
      <div className="header__background">
        <img src={headerBackground} alt="" />
        <img src={stars1} alt="" />
        <img src={stars2} alt="" />
        <img src={stars3} alt="" />
      </div>
      <BurgerButton
        isActive={menuActive}
        onClick={() => setMenuActive(!menuActive)}
      />
      <Navbar isActive={menuActive} ref={menuRef} onClose={closeMenu} />

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
