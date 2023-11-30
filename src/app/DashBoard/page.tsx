"use client"; // This is a client component 👈🏽
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import DataChart from "@/components/DataChart";
import "../../styles/layout/dashboard.css";
import { useState, useRef, useMemo, useEffect } from "react";
const DashBoard = () => {
  const [deviceName, setDeviceName] = useState("");
  const [deviceIp, setDeviceIP] = useState("");
  const inputFocus = useRef();
  const [selected, setSelected] = useState(true);
  const [requireName, setRequireName] = useState("");
  const [requireIp, setRequireIp] = useState("");
  const [items,setItems] = useState([]);
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
  useEffect(() => {
    const storedItems: string | null = localStorage.getItem('items');
    
    if (storedItems === null) {
      localStorage.setItem('items', JSON.stringify(dataDevice));
    } else {
      try {
        const items = JSON.parse(storedItems);
  
        if (JSON.stringify(items) !== JSON.stringify(dataDevice) && dataDevice.length > items.length ) {
          localStorage.setItem('items', JSON.stringify(dataDevice));
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }, [dataDevice, setDataDevice]);
  useEffect(()=>{
    const storedItems: string | null = localStorage.getItem('items');
    if (storedItems !== null) {
       const items = JSON.parse(storedItems);
      setDataDevice(items);
    }
  },[])
  
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
  const validateDevice = (deviceName: string, deviceIp: string) => {
    if (!deviceName) {
      setRequireName("Name is required");
    } else {
      setRequireName("");
    }
    if (!deviceIp) {
      setRequireIp("Ip is required");
    } else {
      setRequireIp("");
    }
    if (deviceName && deviceIp) {
      return true;
    }
    return false;
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
                    type="text"
                    placeholder="name"
                    value={deviceName}
                    onChange={(e) => {
                      setDeviceName(e.target.value);
                    }}
                    className="input deviceName"
                  />
                  <div className="deviceName err">{requireName}</div>
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
                  <div className="deviceIp err">{requireIp}</div>
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
