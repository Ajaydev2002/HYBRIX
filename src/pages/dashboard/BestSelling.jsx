import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bestSelling from "../../consts/bestSelling";
import StarIcon from '@mui/icons-material/Star';


const BestSelling = () => {

    const [page, setPage] = useState(0);
    const itemsPerPage = 3;

    const totalItems = bestSelling.length;

    const handlePrev = () => {
        setPage(prev => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setPage(prev => (prev < totalItems - itemsPerPage ? prev + 1 : prev));
    };

    const visibleItems = bestSelling.slice(page, page + itemsPerPage);

    return (
        <div className="best-selling">
            <div className="best-selling-container">

                <div className="bestselling-header">

                    <h4>Best Selling Products</h4>

                    <div className="page-change-btn">
                        <div onClick={handlePrev} className="backward-btn">
                            <ArrowBackIosIcon className="back-icon" sx={{ fontSize: "20px", backgroundColor: "rgb(236, 243, 255)",padding: "2px",borderRadius:"4px" }} /> 
                        </div>
                        <div onClick={handleNext} className="forward-btn">
                             <ArrowForwardIosIcon className="forward-icon" sx={{ fontSize: "20px",backgroundColor: "rgb(236, 243, 255)",padding: "2px",borderRadius:"4px"  }} /> 
                        </div>
                    </div>
                </div>

                <div className="bestselling-items-container">

                    {visibleItems.map((item, index) => (

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