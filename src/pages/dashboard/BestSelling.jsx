import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bestSelling from "../../consts/bestSelling";
import StarIcon from '@mui/icons-material/Star';


const BestSelling = () => {

    const [page, setPage] = useState(0);

    const handlePrev = () => {
        setPage();
    };

    const handleNext = () => {
        setPage();
    };

    return (
        <div className="best-selling">
            <div className="best-selling-container">

                <div className="bestselling-header">

                    <h4>Best Selling Products</h4>

                    <div className="page-change-btn">
                        <div>
                            <button onClick={handlePrev}> <ArrowBackIosIcon className="back-icon" sx={{ fontSize: "20px", padding: "3px" }} /> </button>
                        </div>
                        <div>
                            <button onClick={handleNext}> <ArrowForwardIosIcon className="forward-icon" sx={{ fontSize: "20px", padding: "3px" }} /> </button>
                        </div>
                    </div>
                </div>

                <div className="bestselling-items-container">

                    {bestSelling.map((item, index) => (

                        <div className="bestsell-item-div" key={index}>

                            <div className="bestselling-item" >

                                <div className="bestselling-image-container">
                                    <img src={item.img} className="bestsell-image" />
                                </div>

                                <div className="bestsell-details">

                                    <div className="bestsell-PriceRating">
                                        <div className="bestsell-price"><h4>${item.price}</h4></div>
                                        <div className="bestsell-ratings">{item.rating} <StarIcon sx={{ fontSize: "17px", paddingLeft: "4px" }} /></div>
                                    </div>

                                    <div className="bestsell-productname">
                                        <h5>{item.productName}</h5>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default BestSelling;