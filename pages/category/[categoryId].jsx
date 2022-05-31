import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Box } from "@mui/system";
import axios from "axios";
import Link from "next/link";
import React from "react";
const color = deepOrange[300];
function CategorySingle(props) {
  const product = props.category.products;
  return (
    <div>
      CategorySingle
      <Grid container spacing={4}>
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
      </Grid>
    </div>
  );
}

export default CategorySingle;

export async function getServerSideProps(context) {
  const id = context.params.categoryId;
  const { data: category } = await axios.get(`http://localhost:5000/category/${id}`);
  return {
    props: { category },
  };
}
