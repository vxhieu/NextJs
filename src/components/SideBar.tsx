"use client"; // This is a client component 👈🏽
import imageUser from "../assets/img/user.svg";
import "../styles/base/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import $ from "jquery";
import { memo } from "react";
import {
  faComputer,
  faClockRotateLeft,
  faGear,
  faBars,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

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
  return (
    <>
      <div className="sidebar">
        <div className="sidebar--option">
          <div className="sidebar--option__icon">
            <FontAwesomeIcon icon={faComputer} style={{ fontSize: 16 }} />
          </div>
          <div className="sidebar--option__select">Device Management</div>
        </div>
        <div
          className={
            "sidebar--option dashboard" + (props.selected ? " selected" : "")
          }
          onClick={handleRedirectDashBoard}
        >
          <div className="sidebar--option__icon">
            <FontAwesomeIcon icon={faChartLine} style={{ fontSize: 16 }} />{" "}
          </div>
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
          <div className="sidebar--option__icon">
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              style={{ fontSize: 16 }}
            />
          </div>
          <div className="sidebar--option__select">
            <div>Logs</div>
          </div>
        </div>
        <div className="sidebar--option">
          <div className="sidebar--option__icon">
            <FontAwesomeIcon icon={faGear} style={{ fontSize: 16 }} />
          </div>
          <div className="sidebar--option__select">Settings</div>
        </div>
      </div>
      <div className="sidebar--nav" onClick={handleSidebar}>
        <FontAwesomeIcon icon={faBars} style={{ fontSize: 12 }} />
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
              <FontAwesomeIcon icon={faComputer} style={{ fontSize: 12 }} />
            </div>
            <div className="sidebar--option__select">Device Management</div>
          </div>
          <div
            className="sidebar--option selected dashboard"
            onClick={handleRedirectDashBoard}
          >
            <div className="sidebar--option__icon">
              <FontAwesomeIcon icon={faChartLine} style={{ fontSize: 12 }} />{" "}
            </div>
            <div className="sidebar--option__select">Dashboard</div>
          </div>
          <div
            className="sidebar--option logAction"
            onClick={handleRedirectLog}
          >
            <div className="sidebar--option__icon">
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="fas computer"
                style={{ fontSize: 12 }}
              />
            </div>
            <div className="sidebar--option__select">Logs</div>
          </div>
          <div className="sidebar--option">
            <div className="sidebar--option__icon">
              <FontAwesomeIcon icon={faGear} style={{ fontSize: 12 }} />
            </div>
            <div className="sidebar--option__select">Settings</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(SideBar);
