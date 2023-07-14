const DashBoard = () => {

    return (
        <div className="dashboard">
            <div className="dasboard--wrap">
                <div className="header">
                    <div className="header--account">
                        <div className="header--account__image">
                            <span>
                                <img src={imageUser} />
                            </span>
                        </div>
                        <div className="header--account__name">Welcome Xhieu</div>
                    </div>
                </div>
                <div className="dashboard--main">
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th><div>Devices</div></th>
                                    <th><div>MAC Address</div></th>
                                    <th><div>IP</div></th>
                                    <th><div>Created Date</div></th>
                                    <th><div>Power Consumption (Kw/H)</div></th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                    <div className="chart">
                        <div className="chart--view">
                            <canvas id="myChart"
                                style={{
                                    width: '100%',
                                    maxWidth: '600px',
                                    height: '40vh',
                                }}></canvas>
                        </div>
                        <div className="chart--form">
                            <div className="chart--form__data">
                                <div className="data--name">
                                    <input
                                        type="text"
                                        placeholder="name"
                                        className="input deviceName"
                                    />
                                    <div className="deviceName err"></div>
                                </div>
                                <div className="data--ip">
                                    <input
                                        type="text"
                                        placeholder="ip"
                                        className="input deviceIp"
                                    />
                                    <div className="deviceIp err"></div>
                                </div>
                            </div>
                            <div className="chart--form__submit">
                                <button className="btn">ADD DEVICE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default DashBoard;