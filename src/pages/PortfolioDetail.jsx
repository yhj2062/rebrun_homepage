// src/pages/PortfolioDetail.jsx

import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PortfolioDetail() {
  const { id } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // portfolio_data.json 파일 불러오기
        const res = await fetch(`${import.meta.env.BASE_URL}portfolio/portfolio_data.json`);
        const data = await res.json();
        // 현재 id와 일치하는 항목 찾기
        const portfolioItem = data.find(item => item.id === id);
        if (portfolioItem) {
          // JSON에 정의된 이미지 URL을 그대로 사용 (thumb 관련 항목은 제외)
          const imageUrls = portfolioItem.images.filter(name => {
            const lower = name.toLowerCase();
            return lower !== "thumb.jpg" && lower !== "thunb.jpg";
          });
          setImages(imageUrls);
        }
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, [id]);

  return (
    <Box sx={{ bgcolor: "#121212", minHeight: "100dvh", py: 4 }}>
      <Container sx={{ color: "#fff" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <IconButton
            component={Link}
            to="/"
            sx={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 1300,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(6px)",
              color: "#fff",
              width: 56,
              height: 56,
              borderRadius: "50%",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.3)"
              }
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 28 }} />
          </IconButton>

          <Typography variant="h5" sx={{ ml: 2, fontFamily: "'Playfair Display', serif" }}>
            {id.replace(/_/g, " ")}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {images.map((src, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <Box
                component="img"
                src={src}
                alt={`사진 ${idx + 1}`}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                  boxShadow: 3,
                  display: "block"
                }}
                onError={(e) => (e.target.style.display = "none")}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PortfolioDetail;
