import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = forwardRef(({ isActive, onClose }, ref) => {
  const handleLinkClick = () => {
    onClose();
  };
  return (
    <nav className={isActive ? "nav nav_open" : "nav"} ref={ref}>
      <ul className="nav-list">
        <li className="nav-list__item">
          <NavLink to="./" className="nav-list__link" onClick={handleLinkClick}>
            Описание игры
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink
            to="./other"
            className="nav-list__link"
            onClick={handleLinkClick}
          >
            Уровни
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink
            to="./prices"
            className="nav-list__link"
            onClick={handleLinkClick}
          >
            Тарифы
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink
            to="./other"
            className="nav-list__link"
            onClick={handleLinkClick}
          >
            Отзывы
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink
            to="./other"
            className="nav-list__link"
            onClick={handleLinkClick}
          >
            Партнеры
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink
            to="./other"
            className="nav-list__link"
            onClick={handleLinkClick}
          >
            Профиль
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink
            to="./other"
            className="nav-list__link"
            onClick={handleLinkClick}
          >
            Игра
          </NavLink>
        </li>
      </ul>
    </nav>
  );
});

export default Navbar;
