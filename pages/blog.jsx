import SearchIcon from "@mui/icons-material/Search";
import { Card, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import style from "../styles/Home.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Blog() {
  return (
    <>
      <Box className={style.container} sx={{ marginTop: 10, marginX: 10 }}>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12} md={12} lg={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card sx={{ marginBottom: 4 }}>
                  <CardMedia
                    component="img"
                    image="https://media.istockphoto.com/photos/paleo-diet-healthy-food-background-picture-id1301565375?b=1&k=20&m=1301565375&s=170667a&w=0&h=D-u_kxPS9SL5MWmhN0xbwfNxPmqbqzhyjYvypM7V7xU="
                    alt="green iguana"
                    height={350}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Green Onion Knife And Salad Placed
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ marginBottom: 4 }}>
                  <CardMedia
                    component="img"
                    image="https://media.istockphoto.com/photos/inflation-growth-of-food-sales-growth-of-market-basket-or-consumer-picture-id1315699311?b=1&k=20&m=1315699311&s=170667a&w=0&h=2ylL-XmYgjulHTMUvpblXESoNk-xenNuSAC2A4JfstQ="
                    alt="green iguana"
                    height={350}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Green Onion Knife And Salad Placed
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ marginBottom: 4 }}>
                  <CardMedia
                    component="img"
                    image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="green iguana"
                    height={350}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Green Onion Knife And Salad Placed
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ marginBottom: 4 }}>
                  <CardMedia
                    component="img"
                    image="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="green iguana"
                    height={350}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Green Onion Knife And Salad Placed
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            <Typography variant="h5" color="initial">
              Search
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} sx={{ backgroundColor: "whitesmoke" }} />
            </Search>
            <Typography variant="h5" color="initial" sx={{ marginY: 5 }}>
              Archive
            </Typography>
            <Typography variant="h5" color="initial">
              Recent Post
            </Typography>
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                height={500}
                image={
                  "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt="Paella dish"
                sx={{ width: "100px", height: "80px" }}
              />
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="body1" color="initial">
                  Feb 13,2022
                </Typography>
                <Typography variant="caption" color="initial">
                  Health And Mix
                </Typography>
              </Box>
            </Box>
            <hr />
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                height={500}
                image={
                  "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt="Paella dish"
                sx={{ width: "100px", height: "80px" }}
              />
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="body1" color="initial">
                  Feb 13,2022
                </Typography>
                <Typography variant="caption" color="initial">
                  Health And Mix
                </Typography>
              </Box>
            </Box>
            <hr />
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                height={500}
                image={
                  "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt="Paella dish"
                sx={{ width: "100px", height: "80px" }}
              />
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="body1" color="initial">
                  Feb 13,2022
                </Typography>
                <Typography variant="caption" color="initial">
                  Health And Mix
                </Typography>
              </Box>
            </Box>
            <hr />
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                height={500}
                image={
                  "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt="Paella dish"
                sx={{ width: "100px", height: "80px" }}
              />
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="body1" color="initial">
                  Feb 13,2022
                </Typography>
                <Typography variant="caption" color="initial">
                  Health And Mix
                </Typography>
              </Box>
            </Box>
            <hr />
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                height={500}
                image={
                  "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt="Paella dish"
                sx={{ width: "100px", height: "80px" }}
              />
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="body1" color="initial">
                  Feb 13,2022
                </Typography>
                <Typography variant="caption" color="initial">
                  Health And Mix
                </Typography>
              </Box>
            </Box>
            <hr />
            <Typography variant="h5" color="initial">
              Tags
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Button variant="text" className="bg-dark text-white ">
                Freshmeat
              </Button>
              <Button variant="text" className="bg-dark text-white ms-2">
                Freshmeat
              </Button>
            </Box>
            <Box sx={{ display: "flex", marginTop: 3 }}>
              <Button variant="text" className="bg-dark text-white ">
                Freshmeat
              </Button>
              <Button variant="text" className="bg-dark text-white ms-2">
                Freshmeat
              </Button>
              <Button variant="text" className="bg-dark text-white ms-2">
                Freshmeat
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
