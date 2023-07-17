"use client"; // This is a client component 👈🏽
import imageUser from "../assets/img/user.svg";
import imageMenu from "../assets/img/navigation-menu.svg";
import "../styles/base/sidebar.css";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import $ from "jquery";
import Link from "next/link";
import { memo } from "react";
const SideBar = (props) => {
  const handleSidebar = () => {
    $(".sidebar--responsive").css("display", "block");
    $(".sidebar--nav").css("display", "none");
    $(".dasboard--wrap").click((e) => {
      if ($(".sidebar--responsive").css("display") == "block") {
        $(".sidebar--responsive").css("display", "none");
        $(".sidebar--nav").css("display", "block");
      }
    });
  };
  const router = useRouter();
  const handleRedirectDashBoard = () => {
    router.push("/DashBoard");
  };

  const handleRedirectLog = () => {
    router.push("/Log");
  };
  console.log(props.selected);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar--option">
          <div className="sidebar--option__icon">
            <i className="fa-regular fa-computer-speaker"></i>
          </div>
          <div className="sidebar--option__select">Device Management</div>
        </div>
        <div
          className={
            "sidebar--option dashboard" + (props.selected ? " selected" : "")
          }
          onClick={handleRedirectDashBoard}
        >
          <div className="sidebar--option__icon"> </div>
          <div className="sidebar--option__select">
            <div>Dashboard</div>
          </div>
        </div>
        <div
          className={
            "sidebar--option logAction" + (props.selected ? "" : " selected")
          }
          onClick={handleRedirectLog}
        >
          <div className="sidebar--option__icon"></div>
          <div className="sidebar--option__select">
            <div>Logs</div>
          </div>
        </div>
        <div className="sidebar--option">
          <div className="sidebar--option__icon"></div>
          <div className="sidebar--option__select">Device Management</div>
        </div>
      </div>
      <div className="sidebar--nav" onClick={handleSidebar}>
        <img src={imageMenu} />
      </div>
      <div className="sidebar--responsive">
        <div className="sidebar--responsive__account">
          <div className="account--icon">
            {" "}
            <img src={imageUser} />{" "}
          </div>
          <div className="account--name">Welcome John</div>
        </div>
        <div className="sidebar--responsive__select">
          <div className="sidebar--option">
            <div className="sidebar--option__icon">
              <i className="fa-regular fa-computer-speaker"></i>
            </div>
            <div className="sidebar--option__select">Device Management</div>
          </div>
          <div
            className="sidebar--option selected dashboard"
            onClick={handleRedirectDashBoard}
          >
            <div className="sidebar--option__icon"></div>
            <div className="sidebar--option__select">Dashboard</div>
          </div>
          <div
            className="sidebar--option logAction"
            onClick={handleRedirectLog}
          >
            <div className="sidebar--option__icon"></div>
            <div className="sidebar--option__select">Logs</div>
          </div>
          <div className="sidebar--option">
            <div className="sidebar--option__icon"></div>
            <div className="sidebar--option__select">Device Management</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(SideBar);
