import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import "../../styles/layout/log.css"
const ActionLog = () => {

    return (
        <div className="action">
            <SideBar />
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
                                        backgroundColor: '#eae1e1',
                                        marginBottom: '0px',
                                        height: '41px'
                                    }}
                                />
                            </div>
                            <div className="serch--input__submit">
                                <button className="btn" >Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="table" style={{ maxHeight: '630px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th><div>Device ID #</div></th>
                                    <th><div>Name</div></th>
                                    <th><div>Action</div></th>
                                    <th><div>Date</div></th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                    <div className="paging">
                        <div className="paging--posstion">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ActionLog;