import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Home from "../components/Home";
// import Products from '../products'
import { add_item } from "../redux/actions/cartAction";

const color = deepOrange[300];

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "10px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "white",
  color: "black",
  borderColor: "black",
  marginTop: 10,

  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "black",
    borderColor: "black",
    boxShadow: "none",
    color: "white",
  },
  "&:active": {
    boxShadow: "none",
  },
});

export default function Index(props) {
  const [loading, setLoading] = useState(true);
  const Products = props.products;
  const category = props.getCategory;
  const [products, setProducts] = useState(Products);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [filter, setFilter] = useState(products);

  const filterProduct = (cat) => {
    const updatedList = products.filter((pd) => pd.category === cat);
    setFilter(updatedList);
  };

  const dispatch = useDispatch();

  {
    /* add item dispatch */
  }
  const handleAddItem = (e) => {
    dispatch(add_item(e));
  };

  return (
    <>
      {loading ? (
        <>
          <Box sx={{ width: "100%" }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        </>
      ) : (
        <>
          <Header />
        </>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={3}>
          <Box sx={{ marginTop: "70px", padding: "10px" }}>
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <BootstrapButton variant="contained" onClick={() => setFilter(products)}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }} style={{ width: "100%" }}>
                    <CardMedia
                      component="img"
                      height={500}
                      image={
                        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      }
                      alt="Paella dish"
                      sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                    />
                    <Typography style={{ fontSize: "30px" }}>All</Typography> <Typography style={{ fontSize: "30px" }}></Typography>
                  </Box>
                </BootstrapButton>

                <BootstrapButton variant="contained" onClick={() => filterProduct("fast_food")}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }} style={{ width: "100%" }}>
                    <CardMedia
                      component="img"
                      height={500}
                      image={
                        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      }
                      alt="Paella dish"
                      sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                    />
                    <Typography style={{ fontSize: "30px" }}>Fast Food</Typography> <Typography style={{ fontSize: "30px" }}></Typography>
                  </Box>
                </BootstrapButton>

                <BootstrapButton variant="contained" onClick={() => filterProduct("fruit")}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }} style={{ width: "100%" }}>
                    <CardMedia
                      component="img"
                      height={500}
                      image={
                        "https://images.unsplash.com/photo-1620882133512-5149956b1261?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      }
                      alt="Paella dish"
                      sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                    />
                    <Typography style={{ fontSize: "30px" }}>Fruits</Typography> <Typography style={{ fontSize: "30px" }}></Typography>
                  </Box>
                </BootstrapButton>

                <BootstrapButton variant="contained" onClick={() => filterProduct("drinks")}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }} style={{ width: "100%" }}>
                    <CardMedia
                      component="img"
                      height={500}
                      image={
                        "https://images.unsplash.com/photo-1621659911279-b08ce9ff421f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      }
                      alt="Paella dish"
                      sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                    />
                    <Typography style={{ fontSize: "30px" }}>Drinks</Typography> <Typography style={{ fontSize: "30px" }}></Typography>
                  </Box>
                </BootstrapButton>

                <BootstrapButton variant="contained" onClick={() => filterProduct("vegetable")}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }} style={{ width: "100%" }}>
                    <CardMedia
                      component="img"
                      height={500}
                      image={
                        "https://images.unsplash.com/photo-1618554182422-ce761974a270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      }
                      alt="Paella dish"
                      sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                    />{" "}
                    <Typography style={{ fontSize: "30px" }}>Vegetables</Typography> <Typography style={{ fontSize: "30px" }}></Typography>
                  </Box>
                </BootstrapButton>

                <BootstrapButton variant="contained" onClick={() => filterProduct("diet")}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }} style={{ width: "100%" }}>
                    <CardMedia
                      component="img"
                      height={500}
                      image={
                        "https://images.unsplash.com/photo-1589960178430-4c300b6a2212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                      }
                      alt="Paella dish"
                      sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                    />
                    <Typography style={{ fontSize: "30px" }}>Deit Food</Typography> <Typography style={{ fontSize: "30px" }}></Typography>
                  </Box>
                </BootstrapButton>
              </ul>
            </nav>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Home />
          <Box>
            {category.map((pd) => {
              return (
                <div key={pd._id}>
                  <h1>{pd.title}</h1>
                  <img src={pd.catImg} alt="" />
                  <Grid container spacing={4}>
                    {pd.products.map((product) => {
                      return (
                        <Grid item xs={12} md={12} lg={3} key={product._id}>
                          <Card sx={{ minWidth: 275 }}>
                            <CardMedia component="img" height="294" image={product.img} alt="Paella dish" />
                            <Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
                              <CardContent>
                                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                  {product.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                  {product.realPrice}
                                </Typography>
                              </CardContent>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}></Box>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </div>
              );
            })}
          </Box>
          <>
            <Box>
              {category.map((pd) => {
                return (
                  <div>
                    <h1>{pd.title}</h1>
                    <Link href={`/category/${pd._id}`}>
                      <img src={pd.catImg} alt="" />
                    </Link>
                  </div>
                );
              })}
            </Box>
            <Typography variant="h3" color="initial" sx={{ textAlign: "center", marginTop: "100px" }}>
              All Products
            </Typography>

            <hr />

            {/* products map */}

            <>
              <Grid container spacing={4}>
                {filter.map((product) => {
                  return (
                    <Grid item xs={12} md={12} lg={3} key={product._id}>
                      <Card sx={{ minWidth: 275 }}>
                        <CardMedia component="img" height="294" image={product.img} alt="Paella dish" />
                        <Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                              {product.name}
                            </Typography>
                            <Typography variant="h5" component="div">
                              {product.price}
                            </Typography>

                            <Typography variant="body2">{product.somedata}</Typography>
                          </CardContent>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
                          <Link href={`/productDetails/${product._id}`}>
                            <Button
                              size="large"
                              sx={{ display: "flex", justifyContent: "between", backgroundColor: `${color}`, color: "black", width: "230px" }}
                              onClick={() => handleAddItem(product)}
                            >
                              Buy Now
                            </Button>
                          </Link>
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </>
          </>
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query._id;
  const { data: products } = await axios.get("http://localhost:5000/products");
  const { data: getCategory } = await axios.get("http://localhost:5000/category");

  return {
    props: {
      products,
      getCategory,
    },
  };
}
