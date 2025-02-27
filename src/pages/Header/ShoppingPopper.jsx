import React, { useState } from "react";
import { IconButton, Popper, Paper, Box, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from "@mui/material/styles";


const CartBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    top: -8,
    right: -4,
  },
});

const ShoppingPopper = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);


  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Branded T-shirts", quantity: 10, price: 32, img: "https://themes.themesbrand.com/hybrix/react-material/light/static/media/img-1.3479ed54a1fdc6027c39.png" },
    { id: 2, name: "Branded T-shirts", quantity: 5, price: 18, img: "https://themes.themesbrand.com/hybrix/react-material/light/static/media/img-2.653d95e8f43c13e97162.png" },
    { id: 3, name: "Branded T-shirts", quantity: 3, price: 250, img: "https://themes.themesbrand.com/hybrix/react-material/light/static/media/img-3.5937b7accb11fe5add30.png" },
    { id: 4, name: "Branded T-shirts", quantity: 2, price: 495, img: "https://themes.themesbrand.com/hybrix/react-material/light/static/media/img-5.10b7411f7c15d357a411.png" }
  ]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

 
  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

 
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <Box>

      <IconButton onClick={handleClick}>
        <CartBadge badgeContent={cartItems.length} color="primary" overlap="circular">
          <ShoppingCartIcon fontSize="small" />
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
