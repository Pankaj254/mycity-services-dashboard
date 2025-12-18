import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
const SideBar = () => {
  const [services, setServices] = useState(false);
  const [application, setApplication] = useState(false);
  const [reports, setReports] = useState(false);
  return (
    <div className="bg-[rgb(119,155,235)] w-1/4">
      <img
        src="/src/assets/images/picture-2.jpg"
        alt=""
        className="rounded-full w-40 h-40 object-cover"
      />
      <p className="text-[25px] font-bold border">
        {localStorage.getItem("username")}
      </p>
      <p className="text-[18px] font-light">Working title</p>
      {/* Services */}
      <button
        onClick={() => setServices(!services)}
        className="bg-blue-200 w-full text-left p-1 border hover:cursor-pointer flex items-center justify-between"
      >
        <span>Services</span>
        <span>
          {services ? (
            <img
              src="/src/assets/icons/right-arrow.png"
              alt=""
              className="w-4 h-4 object-cover"
            />
          ) : (
            <img
              src="/src/assets/icons/down-arrow.png"
              alt=""
              className="w-4 h-4 object-cover"
            />
          )}
        </span>
      </button>
      {services && (
        <div className="hover:cursor-pointer">
          <button className="border w-full text-left">Electricity</button>
          <button className="border w-full text-left">Water</button>
          <button className="border w-full text-left">Waste</button>
        </div>
      )}

      {/* Applications */}

      <button
        className="bg-blue-200 w-full text-left p-1 border hover:cursor-pointer flex items-center justify-between"
        onClick={() => setApplication(!application)}
      >
        <span>Applications</span>
        <span>
          {application ? (
            <img
              src="/src/assets/icons/right-arrow.png"
              alt=""
              className="w-4 h-4 object-cover"
            />
          ) : (
            <img
              src="/src/assets/icons/down-arrow.png"
              alt=""
              className="w-4 h-4 object-cover"
            />
          )}
        </span>
      </button>
      {application && (
        <div className="hover:cursor-pointer">
          <button className="border w-full text-left">Existing</button>
          <button className="border w-full text-left">New</button>
        </div>
      )}

      {/* Reports */}

      <button
        onClick={() => setReports(!reports)}
        className="bg-blue-200 w-full text-left p-1 border hover:cursor-pointer flex items-center justify-between"
      >
        <span>Reports</span>
        <span>
          {reports ? (
            <img
              src="/src/assets/icons/right-arrow.png"
              alt=""
              className="w-4 h-4 object-cover"
            />
          ) : (
            <img
              src="/src/assets/icons/down-arrow.png"
              alt=""
              className="w-4 h-4 object-cover"
            />
          )}
        </span>
      </button>
      {reports && (
        <div className="hover:cursor-pointer">
          <button className="border w-full text-left">Electricity</button>
          <button className="border w-full text-left">Water</button>
          <button className="border w-full text-left">Waste</button>
        </div>
      )}
    </div>
  );
};

export default SideBar;
