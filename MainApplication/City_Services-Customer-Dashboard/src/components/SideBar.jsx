import React from "react";
import SideBarSection from "./SideBarSection";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const SideBar = () => {
  return (
    <div className="w-1/4 min-h-screen bg-sidebar text-sidebar-foreground p-3 flex flex-col justify-between">
      <div className="flex flex-col gap-1.5">
        {/* Profile image */}

        <img
          src="/src/assets/images/picture-2.jpg"
          alt="profile-pic"
          className="rounded-full w-40 h-40 object-cover mx-auto"
        />

        {/* Username from LocalStorage(temporary) */}

        <p className="text-[25px] text-center font-bold border mt-3">
          {localStorage.getItem("username")}
        </p>

        {/* UserRole/Title */}

        <p className="text-[18px] text-center font-light mb-4">Working title</p>

        {/* Services Section */}
        <SideBarSection
          title="Services"
          items={["Electricity", "Water", "Waste"]}
        />
        {/* Applications Section */}
        <SideBarSection title="Applications" items={["Existing", "New"]} />

        {/* Reports Section */}
        <SideBarSection
          title="Reports"
          items={["Electricity", "Water", "Waste"]}
        />
      </div>
      <div className="flex justify-between p-2">
        <AnimatedThemeToggler className="cursor-pointer"/>
        <button
          className="px-3 py-2 rounded-md bg-logout-bg text-logout-text hover:bg-logout-hover-bg transition-colors hover:cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
