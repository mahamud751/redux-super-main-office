import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsDescription from "../../components/DetailsDescription";
import Products from "../../products";
import { add_item, delete_cart, remove_item } from "../../redux/actions/cartAction";
import style from "../../styles/Home.module.css";

const color = deepOrange[300];

const ProductDetails = () => {
  {
    /* data from store */
  }
  const getState = useSelector((state) => state.cartReducer.cart);

  {
    /* filter for single cart*/
  }
  const router = useRouter();
  const productId = router.query.productId;

  const [products, setProducts] = useState([]);

  const setState = () => {
    const item = getState.filter((pd) => pd._id == productId);
    setProducts(item);
  };

  useEffect(() => {
    setState();
  }, [productId]);

  console.log(products);

  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    dispatch(add_item(e));
  };

  const handleRemoveItem = (e) => {
    dispatch(remove_item(e));
  };

  const handleDeleteCart = (_id) => {
    dispatch(delete_cart(_id));
    router.push("/");
  };

  return (
    <Box className="m-lg-5" sx={{ marginTop: "10px" }}>
      {products.map((product) => {
        return (
          <Box key={product._id}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={10}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={6}>
                    <CardMedia component="img" height={500} image={product.img} alt="Paella dish" />
                  </Grid>
                  <Grid item xs={12} md={12} lg={5} sx={{ padding: "40px" }}>
                    <Box>
                      <CardContent>
                        <Typography sx={{ fontSize: 44 }} color="text.secondary" gutterBottom>
                          {product.name}
                        </Typography>
                        <hr />
                        <Typography>Availability: In Stock</Typography>

                        <Typography sx={{ mb: 1.5, fontSize: 34 }} color="text.secondary">
                          Price: ${product.price}
                        </Typography>
                        <Typography sx={{ marginBottom: 4 }}>Hurry up! only 7 products left in stock!</Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio doloribus mollitia expedita tempore impedit!
                        </Typography>
                        <Typography sx={{ marginTop: 3 }}>Size: XL</Typography>

                        <Button
                          size="large"
                          sx={{
                            display: "flex",
                            justifyContent: "between",
                            color: "black",
                            background: "gray",
                            width: "230px",
                            background: "rgb(34,193,195)",
                            background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);",
                          }}
                        >
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              style={{ fontSize: "20px", padding: "0 20px" }}
                              onClick={product.qtn <= 1 ? () => handleDeleteCart(product._id) : () => handleRemoveItem(product)}
                            >
                              -
                            </Typography>
                            <Typography style={{ fontSize: "20px", padding: "0 20px" }}>{product.qtn}</Typography>
                            <Typography style={{ fontSize: "20px", padding: "0 20px" }} onClick={() => handleAddItem(product)}>
                              +
                            </Typography>
                          </Box>
                        </Button>

                        <Typography sx={{ mb: 1.5, fontSize: 34, marginTop: "20px" }} color="text.secondary">
                          Total Price: {product.price * product.qtn}
                        </Typography>
                        {/* <DeleteIcon sx={{ fontSize: '80px' }} onClick={() => handleDeleteCart(product._id)} /> */}
                      </CardContent>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={2}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <LocalShippingIcon fontSize="large" />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Delivery info
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, pariatur!
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275, marginTop: 4 }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <LocalShippingIcon fontSize="large" />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Delivery info
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, pariatur!
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275, marginTop: 4 }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <LocalShippingIcon fontSize="large" />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Delivery info
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, pariatur!
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <DetailsDescription />
            <Box>
              <Typography variant="h5" color="initial" sx={{ marginBottom: 4 }}>
                Related Products
              </Typography>
              <Grid container spacing={4}>
                {Products.slice(0, 4).map((product) => {
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
                          <Button
                            size="large"
                            sx={{ display: "flex", justifyContent: "between", backgroundColor: `${color}`, color: "black", width: "230px" }}
                            onClick={() => handleAddItem(product)}
                          >
                            Buy Now
                          </Button>
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProductDetails;
