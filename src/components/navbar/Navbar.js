import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = forwardRef(({ isActive }, ref) => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";
  return (
    <nav className={isActive ? "nav nav_open" : "nav"} ref={ref}>
      <ul className="nav-list">
        <li className="nav-list__item">
          <NavLink to="./" className="nav-list__link">
            Описание игры
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="./" className="nav-list__link">
            Уровни
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="./prices" className="nav-list__link">
            Тарифы
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="./" className="nav-list__link">
            Отзывы
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="./" className="nav-list__link">
            Партнеры
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="./" className="nav-list__link">
            Профиль
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="./" className="nav-list__link">
            Игра
          </NavLink>
        </li>
      </ul>
    </nav>
  );
});

export default Navbar;
