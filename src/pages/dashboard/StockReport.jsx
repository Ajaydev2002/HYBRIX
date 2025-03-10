import React from "react";
import stockReportDetails from "../../consts/stockReportDetails";

const StockReport = ({ isOpen }) => {
    return (
        <div className="stockreport">
            <div className={`stockreport-container ${isOpen ? "open" : "closed"}`}>

                <div className="stockreport-header">
                    <div className="stockreport-heading">
                        <h5>Stock Report</h5>
                    </div>

                    <div className="generate-report">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(74, 176, 193)" >
                            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                        </svg>
                        <h5>Generate Report</h5>
                    </div>
                </div>

                <div className="stockreport-product-detail-container">
                    <div className="stockreport-product-details">
                        <table>
                            <thead>
                                <tr className="stockreport-product-header">
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Updated Date</th>
                                    <th>Amount</th>
                                    <th>Stock Status</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stockReportDetails.map((item) => (
                                    <tr className="stockreport-product-items" key={item.productID}>
                                        <td className="SR-product-id">{item.productID}</td>
                                        <td className="SR-product-name"><img src={item.productImage} className="SR-product-image" />{item.productName}</td>
                                        <td className="SR-product-date">{item.updateDate}</td>
                                        <td className="SR-product-price">${item.amount}</td>
                                        <td className="SR-product-status">
                                            <div className="SR-product-status-details">
                                                <div className={`stock-status ${item.stockStatus === "In Stock" ? "stockstatus-paid" :
                                                item.stockStatus === "Out of Stock" ? "stockstatus-unpaid" : "stockstatus-pending"
                                                }`}>
                                                    <h5>{item.stockStatus}</h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="SR-product-qty">{item.quantity} PCS</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StockReport;