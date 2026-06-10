import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

const contactUrl = "https://open.kakao.com/o/sdjw3eWe";

function Home() {
  const [portfolioList, setPortfolioList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState("");

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}portfolio/portfolio_data.json`)
      .then((res) => res.json())
      .then((data) => {
        setPortfolioList(data);
        if (data.length > 0) {
          setSelectedPlace(data[0].place);
        }
      });
  }, []);

  const uniquePlaces = useMemo(
    () => Array.from(new Set(portfolioList.map((item) => item.place))),
    [portfolioList]
  );

  const filteredList = selectedPlace
    ? portfolioList.filter((item) => item.place === selectedPlace)
    : portfolioList;

  const heroItem = portfolioList[0];

  return (
    <Box sx={{ bgcolor: "#faf8f4", color: "#27231f", minHeight: "100vh" }}>
      <Box
        component="section"
        sx={{
          minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 76px)" },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(320px, 0.8fr) minmax(0, 1.2fr)" },
          alignItems: "center",
          gap: { xs: 4, md: 8 },
          px: { xs: 2.5, md: 6 },
          py: { xs: 5, md: 7 }
        }}
      >
        <Box sx={{ maxWidth: 520 }}>
          <Typography
            sx={{
              color: "#8b6f52",
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "0.86rem",
              mb: 2
            }}
          >
            Baby and family photography
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: { xs: "2.7rem", md: "5rem" },
              fontWeight: 500,
              lineHeight: 1.05,
              mb: 3
            }}
          >
            자연스러운 순간을 오래 남기는 사진
          </Typography>
          <Typography
            sx={{
              color: "#645b52",
              fontFamily: "'Gowun Batang', serif",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.9,
              maxWidth: 440,
              mb: 4
            }}
          >
            르브랑 갤러리는 돌잔치와 가족의 하루를 담백한 시선으로 기록합니다. 사진이 먼저
            보이고, 감정은 천천히 남도록 구성했습니다.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            <Button
              type="button"
              onClick={scrollToPortfolio}
              sx={{
                bgcolor: "#27231f",
                borderRadius: 0,
                color: "#fff",
                px: 3,
                py: 1.2,
                textTransform: "none",
                "&:hover": { bgcolor: "#463b32" }
              }}
            >
              포트폴리오 보기
            </Button>
            <Button
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: "1px solid rgba(39, 35, 31, 0.28)",
                borderRadius: 0,
                color: "#27231f",
                px: 3,
                py: 1.2,
                textTransform: "none",
                "&:hover": { bgcolor: "#f0ebe3" }
              }}
            >
              예약문의
            </Button>
          </Box>
        </Box>

        {heroItem && (
          <Box
            component="img"
            src={heroItem.thumb}
            alt={heroItem.title}
            sx={{
              width: "100%",
              height: { xs: "58vh", md: "calc(100vh - 150px)" },
              maxHeight: 760,
              objectFit: "cover",
              display: "block"
            }}
          />
        )}
      </Box>

      <Container id="portfolio" maxWidth={false} sx={{ px: { xs: 2.5, md: 6 }, pb: { xs: 8, md: 12 } }}>
        <Box sx={{ borderTop: "1px solid #ded6cc", pt: { xs: 4, md: 6 }, mb: 4 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: { xs: "2rem", md: "3.2rem" },
              fontWeight: 500,
              mb: 3
            }}
          >
            Portfolio
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1.5, md: 2.5 } }}>
            {uniquePlaces.map((place) => (
              <Button
                key={place}
                onClick={() => setSelectedPlace(place)}
                sx={{
                  borderBottom: place === selectedPlace ? "1px solid #27231f" : "1px solid transparent",
                  borderRadius: 0,
                  color: place === selectedPlace ? "#27231f" : "#756b61",
                  fontFamily: "'Noto Serif KR', serif",
                  minWidth: "auto",
                  px: 0,
                  py: 0.5,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "transparent",
                    borderBottomColor: "#8b6f52",
                    color: "#27231f"
                  }
                }}
              >
                {place.replace(/_/g, " ")}
              </Button>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: 3.5, md: 5 }
          }}
        >
          {filteredList.map((item) => (
            <Box key={item.id} component={Link} to={`/portfolio/${encodeURIComponent(item.id)}`} sx={{ color: "inherit", textDecoration: "none" }}>
              <Box
                component="img"
                src={item.thumb}
                alt={item.title}
                sx={{
                  aspectRatio: "4 / 5",
                  display: "block",
                  height: "auto",
                  objectFit: "cover",
                  transition: "opacity 180ms ease",
                  width: "100%",
                  "&:hover": { opacity: 0.86 }
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "0.95rem",
                  mt: 1.5
                }}
              >
                {item.title.replace(/_/g, " ")}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
