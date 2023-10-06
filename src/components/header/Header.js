import { React, useRef, useState, useEffect } from "react";
import "./style.css";
import Navbar from "../navbar/Navbar";
import headerBackground from "./header-background.svg";
import ForwardBtn from "../forwardBtn/ForwardBtn";
import { useClickOutside } from "../../hooks/useClickOutside";
import BurgerButton from "../burgerButton/BurgerButton";

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
