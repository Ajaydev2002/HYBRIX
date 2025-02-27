import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import oneYearData from '../../consts/oneYearData';


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

const CustomLegand = () => {
    return (
        <div className='legand-context'>
            <button className='order-btn'>
                <FiberManualRecordIcon sx={{ color: "#eff2f7", fontSize: "14px", paddingRight: "5px" }} />
                <p> Orders </p>
            </button>
            <button className='earning-btn'>
                <FiberManualRecordIcon sx={{ color: "#438eff", fontSize: "14px", paddingRight: "5px" }} />
                <p> Earnings </p>
            </button>
            <button className='refund-btn'>
                <FiberManualRecordIcon sx={{ color: "#8561f9", fontSize: "14px", paddingRight: "5px" }} />
                <p> Refunds</p>
            </button>
        </div>
    )
}


const DashboardChart = () => {
    return (

        <div className='dashboard-chart-container'>

            <div className="revenue-container">
                <div className="revenue-header">
                    <h6>Revenue</h6>
                    <div className="revenue-header-btn">
                        <button>ALL</button>
                        <button>1M</button>
                        <button>6M</button>
                        <button>1Y</button>
                    </div>
                </div>

                <div className="orders-details">
                    <div className="revene-order">
                        <h6>7,585</h6>
                        <p>Orders</p>
                    </div>
                    <div className="revenue-earnings">
                        <h6>$22.89k</h6>
                        <p>Earnings</p>
                    </div>
                    <div className="revenue-Refunds">
                        <h6>367</h6>
                        <p>Refunds</p>
                    </div>
                    <div className="revenue-ratio">
                        <h6>18.92%</h6>
                        <p>Conversation <br />Ratio</p>
                    </div>
                </div>
            </div>

            <div className='dashboard-chart'>
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={oneYearData}>

                        <XAxis dataKey="Month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10 }} />

                        <YAxis axisLine={false}
                            tickLine={false}
                            domain={[0, 100]}
                            ticks={[0.00, 20.00, 40.00, 60.00, 80.00, 100.00]}
                            tickFormatter={(value) => value.toFixed(2)}
                            tick={{ fontSize: 10 }} />

                        <Tooltip content={<CustomTooltip />} />

                        <Legend content={<CustomLegand />} />

                        <Bar dataKey="Earnings"
                            fill='#438eff'
                            radius={[40, 1, 40, 1]}
                            barSize={9} />

                        <Line type="linear"
                            dataKey="Refunds"
                            stroke="#8561f9" strokeWidth={2}
                            strokeDasharray="7 8"
                            dot={false} />

                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DashboardChart;