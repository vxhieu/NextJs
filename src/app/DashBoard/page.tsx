"use client"; // This is a client component 👈🏽
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import DataChart from "@/components/DataChart";
import "../../styles/layout/dashboard.css";
import { useEffect, useState, useRef, useMemo } from "react";
import $ from "jquery";
const DashBoard = () => {
  const [deviceName, setDeviceName] = useState("");
  const [deviceIp, setDeviceIP] = useState("");
  const inputFocus = useRef();
  const [selected, setSelected] = useState(true);
  const device: {
    name: string;
    mac: string;
    ip: string;
    created: string;
    powerConsumption: number;
  }[] = [
    {
      name: "TV",
      ip: "172.0.2",
      mac: "00:1B:44:11:3A:B7",
      created: "2021-05-31",
      powerConsumption: 50,
    },
    {
      name: "Washer",
      ip: "172.0.3",
      mac: "00:1B:44:11:3A:B8",
      created: "2021-05-31",
      powerConsumption: 60,
    },
    {
      name: "Refrigerator",
      ip: "172.0.4",
      mac: "00:1B:44:11:3A:B9",
      created: "2021-05-31",
      powerConsumption: 80,
    },
    {
      name: "Selling Fan",
      ip: "172.0.5",
      mac: "00:1B:44:11:3A:B2",
      created: "2021-05-31",
      powerConsumption: 80,
    },
  ];
  const [dataDevice, setDataDevice] = useState(device);
  const handleAddDevice = () => {
    if (validateDevice(deviceName, deviceIp)) {
      const deviceValue = dataDevice.filter(
        (filterDevice) => filterDevice.ip === deviceIp
      );
      if (deviceValue.length < 1) {
        setDataDevice([
          ...dataDevice,
          {
            name: deviceName,
            mac: generateRandomMacAddress(),
            ip: deviceIp,
            created: formatDate(),
            powerConsumption: generateRandomPower(),
          },
        ]);
      } else {
        setDataDevice([
          ...dataDevice,
          {
            name: deviceName,
            mac: generateRandomMacAddress(),
            ip: deviceValue[0].ip,
            created: formatDate(),
            powerConsumption: deviceValue[0].powerConsumption,
          },
        ]);
      }
      setDeviceName("");
      setDeviceIP("");
      inputFocus.current.focus();
    }
  };
  const getTotal = useMemo(() => {
    const result = dataDevice.reduce((total, index) => {
      return total + index.powerConsumption;
    }, 0);
    return result;
  }, [dataDevice]);
  const generateRandomHexDigit = () => {
    const hexDigits = "0123456789ABCDEF";
    return hexDigits[Math.floor(Math.random() * hexDigits.length)];
  };
  const generateRandomMacAddress = () => {
    let macAddress = "";
    for (let i = 0; i < 6; i++) {
      macAddress += generateRandomHexDigit() + generateRandomHexDigit();
      if (i !== 5) {
        macAddress += ":";
      }
    }
    return macAddress;
  };
  const formatDate = () => {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const generateRandomPower = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  const validateDevice = (deviceName, deviceIp) => {
    if (!deviceName && !deviceIp) {
      $(".deviceName").text("Name Is Require.");
      $(".deviceIp").text("Ip Is Require.");
      return false;
    }
    if (!deviceName) {
      $(".deviceName").text("Name Is Require.");
      return false;
    } else {
      $(".deviceName").text("");
    }
    if (!deviceIp) {
      $(".deviceIp").text("Ip Is Require.");
      return false;
    } else {
      $(".deviceIp").text("");
    }
    return true;
  };

  return (
    <div className="dashboard">
      <SideBar selected={selected} />
      <div className="dasboard--wrap">
        <Header />
        <div className="dashboard--main">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>
                    <div>Devices</div>
                  </th>
                  <th>
                    <div>MAC Address</div>
                  </th>
                  <th>
                    <div>IP</div>
                  </th>
                  <th>
                    <div>Created Date</div>
                  </th>
                  <th>
                    <div>Power Consumption (Kw/H)</div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {dataDevice.map((device, index) => (
                  <tr key={index}>
                    <td>{device.name}</td>
                    <td>{device.mac}</td>
                    <td>{device.ip}</td>
                    <td>{device.created}</td>
                    <td>{device.powerConsumption}</td>
                  </tr>
                ))}
                <tr className="totalPower">
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{getTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="chart">
            <div className="chart--view">
              <DataChart data={dataDevice} />
            </div>
            <div className="chart--form">
              <div className="chart--form__data">
                <div className="data--name">
                  <input
                    ref={inputFocus}
                    type="text"
                    placeholder="name"
                    value={deviceName}
                    onChange={(e) => {
                      setDeviceName(e.target.value);
                    }}
                    className="input deviceName"
                  />
                  <div className="deviceName err"></div>
                </div>
                <div className="data--ip">
                  <input
                    type="text"
                    placeholder="ip"
                    className="input deviceIp"
                    value={deviceIp}
                    onChange={(e) => {
                      setDeviceIP(e.target.value);
                    }}
                  />
                  <div className="deviceIp err"></div>
                </div>
              </div>
              <div className="chart--form__submit">
                <button className="btn" onClick={handleAddDevice}>
                  ADD DEVICE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
