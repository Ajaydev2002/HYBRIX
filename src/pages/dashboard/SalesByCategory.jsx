import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import pieData from "../../consts/pieData";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const SalesByCategory = () => {

    const [hoveredPie, setHoveredPie] = useState(null);

    const handleMouseEnter = (data) => setHoveredPie(data);

    const handleMouseLeave = () => setHoveredPie(null); 

    const totalValue = pieData.reduce((acc, item) => acc + item.value, 0);


    const CustomLegand = () => {
        return (
            <div className="pielegand-container">
                <div className='pielegand-context1'>
                    <button className='fashion-btn'>
                        <FiberManualRecordIcon sx={{ color: "#438eff", fontSize: "18px", paddingRight: "7px" }} />
                        <p> Fashion </p>
                    </button>
                    <button className='electronics-btn'>
                        <FiberManualRecordIcon sx={{ color: "#4ab0c1", fontSize: "18px", paddingRight: "7px" }} />
                        <p> Electronics </p>
                    </button>
                </div>
                <div className='pielegand-context2'>
                    <button className='groceries-btn'>
                        <FiberManualRecordIcon sx={{ color: "#4ab0c1", fontSize: "18px", paddingRight: "7px" }} />
                        <p> Groceries</p>
                    </button>
                    <button className='others-btn'>
                        <FiberManualRecordIcon sx={{ color: "#8561f9", fontSize: "18px", paddingRight: "7px" }} />
                        <p> Others</p>
                    </button>
                </div>
            </div>
        )
    }

    return (

        <div className="sales-by-category">

            <div className="sales-by-category-container">

                <div className="sales-category-header">
                    <div className="sales-category-header-name">
                        <h5>Sales by Category</h5>
                    </div>

                    <div className="sales-category-dropdown">
                        <p>Report</p>
                        <svg width="30" height="30" viewBox="0 0 25 30" fill="rgba(20, 24, 33, 0.75)">
                            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                        </svg>
                    </div>
                </div>

                <div>
                    <PieChart width={300} height={300}>


                        {pieData.map((entry, index) => (
                            <Pie
                                key={`bg-${index}`}
                                data={[{ value: 100 }]}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius={55 + index * 11}
                                outerRadius={60 + index * 11}
                                startAngle={90}
                                endAngle={-270}
                                fill="#f0f0f0"
                                stroke="none"
                            />
                        ))}

                        {pieData.map((entry, index) => (
                            <Pie
                                key={index}
                                data={[entry]}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={55 + index * 11}
                                outerRadius={60 + index * 11}
                                startAngle={90}
                                endAngle={90 - entry.value * 3.6}
                                fill={entry.color}
                                stroke="none"
                                onMouseEnter={() => handleMouseEnter(entry)}
                                onMouseLeave={handleMouseLeave}
                            />
                        ))}

                        <text x="50%" y="40%" textAnchor="middle" dominantBaseline="middle" fontSize={18} fontWeight="bold">
                            {hoveredPie ? hoveredPie.name : "Total"}
                        </text>
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={16}>
                            {hoveredPie ? `${hoveredPie.value}%` : totalValue}
                        </text>

                        <Legend content={<CustomLegand />} />

                    </PieChart>
                </div>
            </div>
        </div>
    )
}

export default SalesByCategory;