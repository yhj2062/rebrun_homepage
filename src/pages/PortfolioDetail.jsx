import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const contactUrl = "https://open.kakao.com/o/sdjw3eWe";

function PortfolioDetail() {
  const { id } = useParams();
  const [portfolioItem, setPortfolioItem] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}portfolio/portfolio_data.json`);
        const data = await res.json();
        const matchedItem = data.find((item) => item.id === id);

        if (matchedItem) {
          setPortfolioItem(matchedItem);
          setImages(
            matchedItem.images.filter((name) => {
              const lower = name.toLowerCase();
              return !lower.endsWith("thumb.jpg") && !lower.endsWith("thunb.jpg");
            })
          );
        }
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, [id]);

  const title = portfolioItem?.title || id.replace(/_/g, " ");

  return (
    <Box sx={{ bgcolor: "#faf8f4", color: "#27231f", minHeight: "100vh" }}>
      <Container maxWidth={false} sx={{ px: { xs: 2.5, md: 6 }, py: { xs: 4, md: 7 } }}>
        <Box
          sx={{
            alignItems: { xs: "flex-start", md: "flex-end" },
            borderBottom: "1px solid #ded6cc",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "space-between",
            mb: { xs: 4, md: 6 },
            pb: { xs: 3, md: 4 }
          }}
        >
          <Box>
            <Button
              component={Link}
              to="/"
              startIcon={<ArrowBackIcon />}
              sx={{
                borderRadius: 0,
                color: "#756b61",
                mb: 2,
                px: 0,
                textTransform: "none",
                "&:hover": { bgcolor: "transparent", color: "#27231f" }
              }}
            >
              Portfolio
            </Button>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Nanum Myeongjo', serif",
                fontSize: { xs: "2.2rem", md: "4rem" },
                fontWeight: 500,
                lineHeight: 1.08
              }}
            >
              {title.replace(/_/g, " ")}
            </Typography>
          </Box>

          <Button
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              border: "1px solid rgba(39, 35, 31, 0.28)",
              borderRadius: 0,
              color: "#27231f",
              px: 3,
              py: 1.1,
              textTransform: "none",
              "&:hover": { bgcolor: "#f0ebe3" }
            }}
          >
            예약문의
          </Button>
        </Box>

        <Box
          sx={{
            columnCount: { xs: 1, sm: 2, lg: 3 },
            columnGap: { xs: "24px", md: "36px" }
          }}
        >
          {images.map((src, idx) => (
            <Box
              key={src}
              component="img"
              src={src}
              alt={`${title.replace(/_/g, " ")} 사진 ${idx + 1}`}
              loading={idx > 4 ? "lazy" : "eager"}
              sx={{
                breakInside: "avoid",
                display: "block",
                mb: { xs: 3, md: 4.5 },
                width: "100%"
              }}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default PortfolioDetail;
