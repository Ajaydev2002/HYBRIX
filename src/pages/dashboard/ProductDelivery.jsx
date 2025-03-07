import React, {useState} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import productDeliveryDetails from "../../consts/productDeliveryDetails"

const ProductDelivery = ({ isOpen }) => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <div className="product-delivery">
            <div className="product-delivery-container" style={{ width: isOpen ? "300px" : "342px", }}>
                <div className="product-delivery-header">
                    <h5>Product Delivery</h5>
                    
                    <p onClick={toggle} >View All <ArrowForwardIcon sx={{fontSize:"14px", paddingLeft:"5px"}}/></p>
                </div>

                <div className="product-items-container" style={{ height: open ? "100%" : "320px"}}>
                    {productDeliveryDetails.map((items,index) => (

                        <div className="product-delivery-details" key={index}>

                            <div className="product-image-container"><img src={items.img} className="product-image"/></div>

                            <div className="product-name-details">
                                <h5>{items.productName}</h5>
                                <h6><span>by :</span>{items.name}</h6>
                            </div>

                            <div className={ `product-status ${items.status === "shipping" ? "status-shipping" : "status-outofdelivery"}`}>
                                <h5>{items.status}</h5>
                            </div>  

                        </div>
                        
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ProductDelivery;