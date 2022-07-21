import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';


import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  
  Grid,
  Card,
  CardActions,
  CardContent,
  Rating
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate=useNavigate();
  const data = [
    {
      id: "1",
      name: "Special Item",
      price: "18"
    },
    {
      id: "2",
      name: "Sale Item",
      price: "25"
    },
    {
      id: "3",
      name: "Popular Item",
      price: "40"
    },
    {
      id: "4",
      name: "Sale Item",
      price: "25"
    },
    {
      id: "5",
      name: "Special Item",
      price: "18"
    },
    {
      id: "6",
      name: "Popular Item",
      price: "40"
    }
  ]
  const pages = ['Home', 'About'];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [count, setCount] = useState(0);
  const value = 5;
  const [items, setItems] = useState([]);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


 
  const handleChange = async (e) => {


   if (e.target.textContent === "Add to Cart") {
   
      setCount(count + 1);
      e.target.textContent ="Remove";
      console.log(e.target.textContent);
      
      const cartItem = data.filter(items => e.target.id === items.id);
      //console.log(cartItem)
      await setItems([...items, cartItem[0]]);
     console.log(items)


    }
    else if (e.target.textContent ==="Remove") {
     
     e.target.textContent = "Add to Cart";
      setCount(count - 1);
      const itemsAfterRemoved =items.filter(items => e.target.id !== items.id);
      console.log(itemsAfterRemoved)
      await setItems([itemsAfterRemoved]);


    }

  }


  return (
    <div>
      <div>
        <AppBar position="static" style={{ backgroundColor: "white", color: "black", paddingLeft: "100px" }} >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                Start Bootstrap
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block', textTransform: "none", fontSize: "16px", paddingLeft: "20px" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <select name="shop" style={{ fontSize: "16px", marginRight: "750px", border: "white", padding: "10px" }}>
                <option disabled selected hidden>Shop</option>
                <option>All Products</option>
                <hr />
                <option>Popular Items</option>
                <option>New Arrivals</option>
              </select>

              <button id="cart" onClick={() => navigate('/checkoutPage', { state: {items} })}><ShoppingCartIcon fontSize="small" /> &nbsp;Cart&nbsp;<span id="count">{count}</span></button>
            </Toolbar>
          </Container>
        </AppBar>
        <div style={{
          backgroundColor: "#212529",
          color: "white",
          textAlign: "center",
          paddingTop: "80px",
          fontWeight: "bold",
          fontSize: "50px",
          margin: "0px",
          height: "230px",
          width: "100%"
        }}>Shop in Style<br /><span style={{ fontSize: "20px", color: "#adb5bd", position: "relative", bottom: "20px" }}>with this shop home page template</span></div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} style={{ padding: "50px" }}>
          <Grid item xs={6} sm={4} md={3}>
             <Card sx={{  height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div" >
                  Fancy Product
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $40.00 - $80.00
                </Typography>
                <br /><br />

              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ margin: "auto"}}>View Options</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
             <Card sx={{  height: 400, paddingBottom: "20px" }}>
              <CardContent>
              <div  class="div">
                <span class="sale">sale</span>
                </div>
                <Typography sx={{ fontSize: 30, height: "70px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Special Item
                </Typography>

                <Rating name="read-only" value={value} readOnly sx={{ padding: "10px" }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <del>$20.00</del>&nbsp;$18.00
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ margin: "auto" }} id="1"
                 onClick={(e) => handleChange(e)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{  height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <div  class="div">
                <span class="sale">sale</span>
                </div>
              
                <Typography sx={{ fontSize: 30, height: "70px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Sale Item
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <del>$50.00</del>&nbsp;$25.00
                </Typography>
                <br /><br />

              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ margin: "auto"}} id="2" onClick={(e) => handleChange(e)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{  height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Popular Item
                </Typography>

                <Rating name="read-only" value={value} readOnly sx={{ padding: "10px" }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $40.00
                </Typography>


              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ margin: "auto" }} id="3" onClick={(e) => handleChange(e)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{  height: 400, paddingBottom: "20px" }}>
              <CardContent>
              <div  class="div">
                <span class="sale">sale</span>
                </div>
                <Typography sx={{ fontSize: 30, height: "70px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Sale Item
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <del>$50.00</del>&nbsp;$25.00
                </Typography>
                <br /><br />

              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ margin: "auto" }} id="4" onClick={(e) => handleChange(e)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
             <Card sx={{ height: 400, paddingBottom: "20px" }}>
              <CardContent>

                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>

                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Fancy Product
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $40.00 - $80.00
                </Typography>
                <br /><br />

              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ margin: "auto" }}>View Options</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
             <Card sx={{  height: 400, paddingBottom: "20px" }}>
              <CardContent>
              <div  class="div">
                <span class="sale">sale</span>
                </div>
                <Typography sx={{ fontSize: 30, height: "70px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Special Item
                </Typography>

                <Rating name="read-only" value={value} readOnly sx={{ padding: "10px" }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <del>$20.00</del>&nbsp;$18.00
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ margin: "auto" }} id="5" onClick={(e) => handleChange(e)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{  height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Popular Item
                </Typography>

                <Rating name="read-only" value={value} readOnly sx={{ padding: "10px" }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $40.00
                </Typography>


              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ margin: "auto" }} id="6" onClick={(e) => handleChange(e)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <div style={{
        backgroundColor: "#212529",
        color: "white",
        textAlign: "center",
        paddingTop: "80px",
        fontWeight: "bold",
        fontSize: "20px",
        margin: "0px",
        height: "100px",
        width: "100%"
      }}>Copyright @ Your Website 2022 </div>

    </div>


  );

}
