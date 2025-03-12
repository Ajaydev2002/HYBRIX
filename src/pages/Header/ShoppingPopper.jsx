import React, { useState } from "react";
import { IconButton, Popper, Paper, Box, Badge } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from "@mui/material/styles";


const CartBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    top: -2,
    right: 0,
  },
});

const ShoppingPopper = ({ handleClick, open, anchorEl }) => {

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Branded T-shirts", quantity: 10, price: 320, img: "https://themes.themesbrand.com/hybrix/react-material/light/static/media/img-1.3479ed54a1fdc6027c39.png" },
    { id: 2, name: "Bendwood T-shirt", quantity: 5, price: 180, img: "https://themes.themesbrand.com/hybrix/react-material/light/static/media/img-2.653d95e8f43c13e97162.png" },
    { id: 3, name: "Titan Watch", quantity: 3, price: 250, img: "https://themes.themesbrand.com/hybrix/react-material/light/static/media/img-3.5937b7accb11fe5add30.png" },
    { id: 4, name: "Adidas best for walk", quantity: 2, price: 400, img: "https://themes.themesbrand.com/hybrix/react-material/light/static/media/img-5.10b7411f7c15d357a411.png" },
    { id: 5, name: "Branded T-shirt", quantity: 1, price: 243, img: "https://themes.themesbrand.com/hybrix/react-material/light/static/media/img-6.f80c5f48c1fa4bb8e9cb.png" }
  ]);


  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };


  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <Box>

      <IconButton onClick={handleClick}>
        <CartBadge badgeContent={cartItems.length} color="primary" overlap="circular">
          <svg width="20" height="20" viewBox="0 0 25 25" fill="rgba(20, 24, 33, 0.75)">
            <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" />
          </svg>
        </CartBadge>
      </IconButton>

      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <Paper sx={{ padding: 2, boxShadow: 3, bgcolor: "background.paper", marginTop: "16px" }}>
          <Box sx={{ zIndex: 100 }}>
            <div className="shopping-container">

              <div className="shopping-header">
                <h3>My Cart</h3>
                <p>{cartItems.length} items</p>
              </div>

              <div className="shoppingitems">

                {cartItems.length > 0 ? (

                  cartItems.map((item) => (

                    <div className="bag-container" key={item.id}>

                      <div className="bag-section1">
                        <img src={item.img} className="bag-image" alt={item.name} />
                        <div className="bag-section1-text">
                          <h4>{item.name}</h4>
                          <p>Quantity: {item.quantity} * ${item.price}</p>
                        </div>
                      </div>

                      <div className="bag-section2">
                        <p className="price">${item.quantity * item.price}</p>
                        <IconButton onClick={() => handleRemove(item.id)} size="small">
                          <CloseIcon sx={{ fontSize: "15px" }} />
                        </IconButton>
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: "center", padding: "10px" }}>Your cart is empty</p>
                )}
              </div>

              <div className="total-container">
                <div className="total">Total:</div>
                <div className="total-price">
                  <h3>${totalPrice.toFixed(2)}</h3>
                </div>
              </div>

              {cartItems.length > 0 && (
                <div className="checkout">
                  <h3>Checkout</h3>
                </div>
              )}
            </div>
          </Box>
        </Paper>
      </Popper>
    </Box>
  );
};

export default ShoppingPopper;
