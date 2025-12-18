import React, { useState } from "react";

const SideBarSection = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-1 flex items-center justify-between cursor-pointer border bg-sidebar-accent text-sidebar-accent-foreground hover:bg-info-surface"
      >
        <span>{title}</span>
        <span className="flex items-center">
          {/* LIGHT THEME */}
          <img
            src={
              open
                ? "/src/assets/icons/right-arrow.png"
                : "/src/assets/icons/down-arrow.png"
            }
            alt="toggle-arrow"
            className="w-4 h-4 object-cover dark:hidden"
          />

          {/* DARK THEME */}
          <img
            src={
              open
                ? "/src/assets/icons/right-arrow-white.png"
                : "/src/assets/icons/down-arrow-white.png"
            }
            alt="toggle-arrow"
            className="w-4 h-4 object-cover hidden dark:block"
          />
        </span>
      </button>
      {open && (
        <div className="hover:cursor-pointer">
          {items.map((item, index) => (
            <button
              key={index}
              className="w-full text-left px-2 py-1 border bg-sidebar text-sidebar-foreground hover:bg-info-surface hover:cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarSection;
