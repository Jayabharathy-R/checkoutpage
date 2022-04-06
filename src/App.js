import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';

import { styled } from '@mui/material/styles';
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
  Paper,
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
  const [count, setCount] = React.useState(0);
  const value = 5;
  const [items, setItems] = React.useState([]);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handlechange = async (e) => {

   if (e.target.textContent === "Add to Cart") {
      setCount(count + 1);
      e.target.textContent = "Remove";
      const cartItem = data.filter(items => e.target.id === items.id);
      await setItems([...items, cartItem]);
     //console.log(items)


    }
    else if (e.target.textContent === "Remove") {
      setCount(count - 1);
      e.target.textContent = "Add to Cart";
      const itemsAfterRemoved = items.filter(items => e.target.id !== items.id);
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
          <Grid item xs={3}>
            <Item> <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
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
                <Button variant="outlined" sx={{ marginLeft: "75px" }}>View Options</Button>
              </CardActions>
            </Card></Item>
          </Grid>
          <Grid item xs={3}>
            <Item> <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  <span class="sale">sale</span>450 x 300
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
                <Button variant="outlined" sx={{ marginLeft: "75px" }} id="1" name="Popular Item" value={18} onClick={(e) => handlechange(e)}>Add to Cart</Button>
              </CardActions>
            </Card></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  <span class="sale">sale</span>450 x 300
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
                <Button variant="outlined" sx={{ marginLeft: "80px" }} id="2" name="Sale Item" value={25} onClick={(e) => handlechange(e)}>Add to Cart</Button>
              </CardActions>
            </Card></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
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
                <Button variant="outlined" sx={{ marginLeft: "80px" }} id="3" name="Popular Item" value={40} onClick={(e) => handlechange(e)}>Add to Cart</Button>
              </CardActions>
            </Card></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  <span class="sale">sale</span>450 x 300
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
                <Button variant="outlined" sx={{ marginLeft: "80px" }} id="4" name="Sale Item" value={25} onClick={(e) => handlechange(e)}>Add to Cart</Button>
              </CardActions>
            </Card></Item>
          </Grid>
          <Grid item xs={3}>
            <Item> <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
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
                <Button variant="outlined" sx={{ marginLeft: "75px" }}>View Options</Button>
              </CardActions>
            </Card></Item>
          </Grid>
          <Grid item xs={3}>
            <Item> <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  <span class="sale">sale</span>450 x 300
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
                <Button variant="outlined" sx={{ marginLeft: "75px" }} id="5" name="Special Item" value={18} onClick={(e) => handlechange(e)}>Add to Cart</Button>
              </CardActions>
            </Card></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
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
                <Button variant="outlined" sx={{ marginLeft: "80px" }} id="6" name="Popular Item" value={40} onClick={(e) => handlechange(e)}>Add to Cart</Button>
              </CardActions>
            </Card></Item>
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
