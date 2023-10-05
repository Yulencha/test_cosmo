import React, { useEffect } from "react";

export const useClickOutside = (ref, cb) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      cb();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};
