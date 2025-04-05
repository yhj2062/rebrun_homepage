// src/pages/Home.jsx

import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardActionArea,
    CardMedia
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  
  function Home() {
    const [portfolioList, setPortfolioList] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState("");
  
    useEffect(() => {
      fetch("/portfolio_data.json")
        .then(res => res.json())
        .then(data => {
          setPortfolioList(data);
          if (data.length > 0) {
            setSelectedPlace(data[0].place);
          }
        });
    }, []);
  
    const uniquePlaces = Array.from(new Set(portfolioList.map(p => p.place)));
  
    const filteredList = selectedPlace
      ? portfolioList.filter(p => p.place === selectedPlace)
      : portfolioList;
  
    return (
      <Box sx={{ bgcolor: "#121212", minHeight: "100vh", py: 5 }}>
        <Container>

  
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1, mb: 4 }}>
            {uniquePlaces.map(place => (
              <Button
                key={place}
                variant={place === selectedPlace ? "contained" : "outlined"}
                onClick={() => setSelectedPlace(place)}
                sx={{
                  borderRadius: 5,
                  textTransform: "none",
                  px: 3,
                  color: "#fff",
                  borderColor: "#aaa",
                  '&:hover': {
                    backgroundColor: "#333",
                    borderColor: "#fff"
                  }
                }}
              >
                {place.replace(/_/g, " ")}
              </Button>
            ))}
          </Box>
  
          <Grid container spacing={4} justifyContent="center">
            {filteredList.map(item => (
              <Grid item key={item.id} xs={12}>
                <Card
                  sx={{
                    transition: "transform 0.3s ease",
                    ":hover": { transform: "scale(1.02)" },
                    borderRadius: 5,
                    boxShadow: 5,
                    overflow: "hidden"
                  }}
                >
                  <CardActionArea component={Link} to={`/portfolio/${encodeURIComponent(item.id)}`}>
                    <CardMedia
                      component="img"
                      image={`/${item.thumb}`}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "4/3",
                        objectFit: "cover"
                      }}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }
  
  export default Home;