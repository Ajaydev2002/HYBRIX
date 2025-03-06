import React from "react";
import TotalEarnings from "../pages/dashboard/TotalEarnings";
import '../styles/Dashboard.css';
import Orders from "../pages/dashboard/Orders";
import TotalEarning from "../pages/dashboard/TotalEarning";
import DashboardChart from "../pages/dashboard/DashboardChart";
import MoreSales from "../pages/dashboard/MoreSales";
import RecentOrders from "../pages/dashboard/RecentOrders";
import BestSelling from "../pages/dashboard/BestSelling";
import ProductDelivery from "../pages/dashboard/ProductDelivery";
import SalesByCategory from "../pages/dashboard/SalesByCategory";
import StockReport from "../pages/dashboard/StockReport";
import SalesLocation from "../pages/dashboard/SalesLocation";
import RecentChat from "../pages/dashboard/RecentChat";
import { useOutletContext } from "react-router-dom";
import Demo from "../pages/dashboard/ChatApp";
import ChatApp from "../pages/dashboard/ChatApp";


const Dashboard = () => {

    const { isOpen = false } = useOutletContext() || {}; 


    console.log("isOpen context:", isOpen);  

    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <div className="dashboard-container">
                    <div className="dashboard-section1">
                        <div className="D-total-orders-container">
                            <TotalEarnings isOpen={isOpen}/>
                            <Orders />
                            <TotalEarning />
                        </div>
                        <div className="D-revenue">
                            <DashboardChart />
                        </div>
                    </div>
                    <div>
                        <MoreSales />
                        <RecentOrders />
                    </div>
                    <div className="product-selling">
                        <BestSelling />
                        <ProductDelivery />
                    </div>
                    <div className="sales-stock">
                        <SalesByCategory />
                        <StockReport />
                    </div>
                    <div>
                        <SalesLocation />
                    </div>
                </div>
                <div>
                    <RecentChat />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;