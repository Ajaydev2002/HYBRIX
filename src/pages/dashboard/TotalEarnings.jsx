import React from "react"



const TotalEarnings = () => {
    return (
        <div className="totalearnings-container">

            <div className="balance-content">
                <div className="available-balance">
                    <p>TOTAL EARNINGS</p>
                    <h4>$745.35</h4>
                </div>
                <div className="dollar-icon">
                    <svg width="24" height="24" fill="rgb(45, 203, 115)" >
                        <path d="M 12 2 C 6.48 2 2 6.48 2 12 s 4.48 10 10 10 s 10 -4.48 10 -10 S 17.52 2 12 2 Z m 0 18 c -4.41 0 -8 -3.59 -8 -8 s 3.59 -8 8 -8 s 8 3.59 8 8 s -3.59 8 -8 8 Z m 0.31 -8.86 c -1.77 -0.45 -2.34 -0.94 -2.34 -1.67 c 0 -0.84 0.79 -1.43 2.1 -1.43 c 1.38 0 1.9 0.66 1.94 1.64 h 1.71 c -0.05 -1.34 -0.87 -2.57 -2.49 -2.97 V 5 H 10.9 v 1.69 c -1.51 0.32 -2.72 1.3 -2.72 2.81 c 0 1.79 1.49 2.69 3.66 3.21 c 1.95 0.46 2.34 1.15 2.34 1.87 c 0 0.53 -0.39 1.39 -2.1 1.39 c -1.6 0 -2.23 -0.72 -2.32 -1.64 H 8.04 c 0.1 1.7 1.36 2.66 2.86 2.97 V 19 h 2.34 v -1.67 c 1.52 -0.29 2.72 -1.16 2.73 -2.77 c -0.01 -2.2 -1.9 -2.96 -3.66 -3.42 Z" />
                    </svg>
                </div>
            </div>
        
            <div className="lastweek-context">
                <h5>
                    <svg width="15" height="15" viewBox="0 0 25 30" fill="rgb(45, 203, 115)">
                        <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
                    </svg>
                    +18.30%
                </h5>
                <p>than last week</p>
            </div>
        </div>
    )
}

export default TotalEarnings;