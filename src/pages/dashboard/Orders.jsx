import React from "react";

const Orders = () => {

    return (
        <div className="orders-container">
            <div className="orders-context">

                <div className="cart-icon">
                    <svg width="30" height="30" viewBox="0 0 25 30" fill="rgb(74, 176, 193) ">
                        <path d="M 18 6 h -2 c 0 -2.21 -1.79 -4 -4 -4 S 8 3.79 8 6 H 6 c -1.1 0 -2 0.9 -2 2 v 12 c 0 1.1 0.9 2 2 2 h 12 c 1.1 0 2 -0.9 2 -2 V 8 c 0 -1.1 -0.9 -2 -2 -2 Z m -6 -2 c 1.1 0 2 0.9 2 2 h -4 c 0 -1.1 0.9 -2 2 -2 Z m 6 16 H 6 V 8 h 2 v 2 c 0 0.55 0.45 1 1 1 s 1 -0.45 1 -1 V 8 h 4 v 2 c 0 0.55 0.45 1 1 1 s 1 -0.45 1 -1 V 8 h 2 v 12 Z" />
                    </svg>
                </div>

                <div className="orders-text">
                    <p>ORDERS</p>
                    <h4>698.36k</h4>
                </div>
            </div>

            <div className="orders-lastweek">

                <h5>
                    <svg width="15" height="15" viewBox="0 0 25 30" fill="rgb(255, 108, 108)">
                        <path d="M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z" />
                    </svg>
                    -2.74 %
                </h5>

                <p>than last week</p>
            </div>
        </div>
    )
}

export default Orders;