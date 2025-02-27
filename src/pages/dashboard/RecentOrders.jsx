import React, { useState } from "react";
import DropdownMenu from "../../consts/DropdownMenu";
import customerDetails from "../../consts/customerDetails";
import TablePagination from '@mui/material/TablePagination';


const RecentOrders = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className="recent-order">
            <div className="recent-order-container">

                <div className="recentorder-header">
                    <div className="RO-header-text">
                        <p>Recent Orders</p>
                    </div>
                    <div className="RO-header-dropdown">
                        <DropdownMenu />
                    </div>
                </div>

                <div className="customer-details-container">
                    <table>
                        <thead>
                            <tr className="customer-details-header">
                                <th>Purchase ID</th>
                                <th>Customer Name</th>
                                <th>Product Name</th>
                                <th>Amount </th>
                                <th>OrderDate</th>
                                <th>Vendor</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {customerDetails
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((customer) => (
                                    <tr key={customer.purchaseID} className="customer-details">

                                        <td className="purchase-id">{customer.purchaseID}</td>
                                        <td className="customer-name"> <img src={customer.img} className="customer-image" />{customer.customerName}</td>
                                        <td className="product-name">{customer.productName}</td>
                                        <td className="product-price">${customer.Amount}</td>
                                        <td className="order-date">{customer.orderDate}</td>
                                        <td className="vendor">{customer.vendor}</td>
                                        <td className="order-status-container">
                                            <div className={`order-status ${customer.status === "Paid" ? "status-paid" :
                                                customer.status === "UnPaid" ? "status-unpaid" : "status-pending"
                                                }`}>
                                                <h5>{customer.status}</h5>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="recentorder-footer">
                    <TablePagination
                        component="div"
                        count={customerDetails.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[5, 10, 15]}
                    />
                </div>
            </div>
        </div>
    )
}

export default RecentOrders;