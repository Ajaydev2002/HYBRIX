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



const Dashboard = () => {

    const { isOpen } = useOutletContext() || {}; 

    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <div className="dashboard-container">
                    <div className="dashboard-section1">
                        <div className="D-total-orders-container">
                            <TotalEarnings isOpen={isOpen}/>
                            <Orders isOpen={isOpen}/>
                            <TotalEarning isOpen={isOpen}/>
                        </div>
                        <div className="D-revenue">
                            <DashboardChart isOpen={isOpen}/>
                        </div>
                    </div>
                    <div className="RO-MS-container">
                        <MoreSales isOpen={isOpen}/>
                        <RecentOrders isOpen={isOpen}/>
                    </div>
                    <div className="product-selling">
                        <BestSelling isOpen={isOpen}/>
                        <ProductDelivery isOpen={isOpen}/>
                    </div>
                    <div className="sales-stock">
                        <SalesByCategory isOpen={isOpen}/>
                        <StockReport isOpen={isOpen}/>
                    </div>
                    <div>
                        <SalesLocation isOpen={isOpen}/>
                    </div>
                </div>
                <div>
                    <RecentChat isOpen={isOpen}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;