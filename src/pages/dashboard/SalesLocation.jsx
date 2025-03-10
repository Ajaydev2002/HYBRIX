import React from "react";
import map from "../../assets/map.png";
import locationData from "../../consts/locationPercent";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const SalesLocation = ({ isOpen }) => {

    return (
        <div className="saleslocation">
            <div className={`saleslocation-container ${isOpen ? "open" : "closed"}`}>

                <div className="saleslocation-header">
                    <h5>Top Retail Sales Location</h5>
                    <p className="export-report-btn">
                        Export Report
                    </p>
                </div>

                <div className="map-userstatistics-container">
                    <div className="location">
                        <img src={map} />
                    </div>

                    <div className="statistics-detail-container">
                        <div className="satistics-header">
                            <h6>ALL USERS STATISTICS</h6>
                            <h4>1,87,42,102 <span>users</span></h4>
                        </div>

                        <div className="satitistic-bardetail-container">

                            <p>Current Activity</p>

                            <div className="progress-bar-container">
                                {locationData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="progress-bar-segment"
                                        style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                                    />
                                ))}
                            </div>

                            <div className="country-percent-details">
                                {locationData.map((item, index) => (
                                    <div className="country-detail" key={index}>
                                        <div className="country-color">
                                            <FiberManualRecordIcon sx={{ color: item.color, fontSize: "22px", paddingRight: "15px" }} />
                                        </div>

                                        <div className="country-name">
                                            {item.name}
                                        </div>
                                        
                                        <div className="country-percent">
                                            {item.percentage}%
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SalesLocation;