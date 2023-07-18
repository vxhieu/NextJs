"use client";
import SideBar from "@/components/SideBar";
import "../../styles/layout/log.css";
import { useEffect, useState } from "react";
import { useMemo, useRef } from "react";
import Pagination from "@/components/Pagination";
import Header from "@/components/Header";
const pageSize = 6;
const ActionLog = () => {
  const [selected, setSelected] = useState(false);
  const [valueSeacrh, setValueSeacrh] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const data: {
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
  const [dataDevice, setDataDevice] = useState(data);
  useEffect(() => {}, [valueSeacrh]);
  const handleSearchClick = () => {
    if (valueSeacrh === "") {
      setDataDevice(data);
      return;
    }
    const filterBySearch = data.filter((item) => {
      return item.name.toLowerCase().indexOf(valueSeacrh.toLowerCase()) !== -1;
    });
    setDataDevice(filterBySearch);
  };
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return dataDevice.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataDevice]);

  return (
    <div className="action">
      <SideBar selected={selected} />
      <div className="action--wrap">
        <Header />
        <div className="action--main">
          <div className="search">
            <div className="seacrch--title">Action Logs</div>
            <div className="serch--input">
              <div className="serch--input__name">
                <input
                  type="text"
                  className="input searchInput"
                  placeholder="name"
                  style={{
                    backgroundColor: "#eae1e1",
                    marginBottom: "0px",
                    height: "41px",
                  }}
                  value={valueSeacrh}
                  onChange={(e) => setValueSeacrh(e.target.value)}
                />
              </div>
              <div className="serch--input__submit">
                <button className="btn" onClick={handleSearchClick}>
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="table" style={{ maxHeight: "630px" }}>
            <table>
              <thead>
                <tr>
                  <th>
                    <div>Device ID #</div>
                  </th>
                  <th>
                    <div>Name</div>
                  </th>
                  <th>
                    <div>Action</div>
                  </th>
                  <th>
                    <div>Date</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentTableData.map((device, index) => (
                  <tr key={index}>
                    <td>{device.name}</td>
                    <td>{device.mac}</td>
                    <td>{device.ip}</td>
                    <td>{device.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalCount={dataDevice.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};
export default ActionLog;
