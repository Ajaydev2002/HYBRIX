import React, { useState } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from "recharts";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AnimatedCounter from '../../consts/customCounter';
import oneYearData from '../../consts/oneYearData';
import sixMonthData from '../../consts/sixMonthData';
import oneMonthData from '../../consts/oneMonthData';
import allMonthData from '../../consts/allMonthData';


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {

        const { Month, Orders, Earnings, Refunds } = payload[0].payload;

        return (
            <div className='tooltip-container'>
                <div className='tooltip-month'>
                    <p>{Month}</p>
                </div>
                <div className='tooltip-OER'>
                    <p className='order-div'> <FiberManualRecordIcon sx={{ color: "#eff2f7", fontSize: "18px", paddingRight: "5px" }} /> Orders <strong>{Orders}</strong></p>
                    <p className='earning-div'> <FiberManualRecordIcon sx={{ color: "#438eff", fontSize: "18px", paddingRight: "5px" }} /> Earnings <strong>${Earnings}k</strong></p>
                    <p className='refund-div'> <FiberManualRecordIcon sx={{ color: "#8561f9", fontSize: "18px", paddingRight: "5px" }} /> Refunds <strong>{Refunds} sales</strong></p>
                </div>
            </div>
        );
    }
    return null;
}

const CustomLegand = ({ setHoveredButton }) => {

    return (
        <div className='legand-context'>
            <button className='order-btn'
                onMouseEnter={() => setHoveredButton("Orders")}
                onMouseLeave={() => setHoveredButton(null)}>
                <FiberManualRecordIcon sx={{ color: "#eff2f7", fontSize: "15px", paddingRight: "5px" }} />
                <p> Orders </p>
            </button>

            <button className='earning-btn'
                onMouseEnter={() => setHoveredButton("Earnings")}
                onMouseLeave={() => setHoveredButton(null)}>
                <FiberManualRecordIcon sx={{ color: "#438eff", fontSize: "14px", paddingRight: "5px" }} />
                <p> Earnings </p>
            </button>

            <button className='refund-btn'
                onMouseEnter={() => setHoveredButton("Refund")}
                onMouseLeave={() => setHoveredButton(null)}>
                <FiberManualRecordIcon sx={{ color: "#8561f9", fontSize: "14px", paddingRight: "5px" }} />
                <p> Refunds</p>
            </button>
        </div>
    )
}


const DashboardChart = ({ isOpen }) => {
    
    const [pieData, setPieData] = useState(oneYearData);
    const [activeButton, setActiveButton] = useState("1Y");
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleButtonClick = (button, newData) => {
        setActiveButton(button);
        setPieData(newData);
    }

    return (

        <div className={`dashboard-chart-container ${isOpen ? "open" : "closed"}`}>

            <div className="revenue-container" >
                <div className="revenue-header">
                    <h6>Revenue</h6>
                    <div className="revenue-header-btn">
                        <button
                            onClick={() => { handleButtonClick("ALL", allMonthData) }}
                            className={activeButton === "ALL" ? "active" : ""}
                        >ALL
                        </button>

                        <button
                            onClick={() => { handleButtonClick("1M", oneMonthData) }}
                            className={activeButton === "1M" ? "active" : ""}
                        >1M
                        </button>

                        <button
                            onClick={() => { handleButtonClick("6M", sixMonthData) }}
                            className={activeButton === "6M" ? "active" : ""}
                        >6M
                        </button>

                        <button
                            onClick={() => { handleButtonClick("1Y", oneYearData) }}
                            className={activeButton === "1Y" ? "active" : ""}
                        >1Y
                        </button>
                    </div>
                </div>

                <div className="orders-details" >
                    <div className='orders-details-section-1'>
                        <div className="revene-order" >
                            <h6><AnimatedCounter
                                initial={6999}
                                target={7585}
                                intervaltime={1}
                            /></h6>
                            <p>Orders</p>
                        </div>
                        <div className="revenue-earnings" >
                            <h6>$<AnimatedCounter
                                initial={0}
                                target={22}
                                intervaltime={100}
                            />k</h6>
                            <p>Earnings</p>
                        </div>
                    </div>

                    <div className='orders-details-section-2'>
                        <div className="revenue-Refunds" >
                            <h6><AnimatedCounter
                                initial={159}
                                target={367}
                                intervaltime={10}
                            /></h6>
                            <p>Refunds</p>
                        </div>
                        <div className="revenue-ratio" >
                            <h6><AnimatedCounter
                                initial={0}
                                target={18.92}
                                intervaltime={100}
                            />%</h6>
                            <p>Conversation <br />Ratio</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='dashboard-chart'>

                <ResponsiveContainer height={315}>

                    <ComposedChart data={pieData}>

                        <XAxis dataKey="Month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 13 }} />

                        <YAxis axisLine={false}
                            tickLine={false}
                            domain={[0, 100]}
                            ticks={(pieData === oneMonthData || pieData === oneYearData) ? [0.00, 20.00, 40.00, 60.00, 80.00, 100.00] : [0.00, 30.00, 60.00, 90.00, 120.00]}
                            tickFormatter={(value) => value.toFixed(2)}
                            tick={{ fontSize: 11.5 }} />

                        <Tooltip content={<CustomTooltip />} />

                        {pieData.map((entry, index) => (
                            <ReferenceLine
                                key={index}
                                x={entry.Month}
                                stroke="rgba(203, 203, 203, 0.75)"
                                strokeWidth={1}
                            />
                        ))}

                        <Bar dataKey="Earnings"
                            fill={hoveredButton === "Refund" || hoveredButton === "Orders" ? "#ddebff" : "#438eff"}
                            radius={[40, 1, 40, 1]}
                            barSize={9}
                        />

                        <Line type="linear"
                            dataKey="Refunds"
                            stroke={hoveredButton === "Earnings" || hoveredButton === "Orders" ? "#ddebff" : "#8561f9"}
                            strokeWidth={2}
                            strokeDasharray="7 8"
                            dot={false} 
                            className="custom-line" />

                        <Legend content={<CustomLegand setHoveredButton={setHoveredButton} />} />

                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DashboardChart;