// src/App.jsx

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioDetail from "./pages/PortfolioDetail";
import Header from "./components/Header";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

function App() {
  const AboutPage = () => (
    <Box sx={{ bgcolor: "#121212", minHeight: "100vh", py: 8 }}>
      {/* 전체 너비 영역: 좌우 여백 제거 */}
      <Container maxWidth={false} disableGutters>
        {/* 내부 콘텐츠는 중앙에 정렬 */}
        <Box sx={{ maxWidth: "md", mx: "auto", px: 2, color: "#fff", fontFamily: "'Noto Serif KR', serif" }}>
          <Typography variant="h5" gutterBottom>
            순간을 작품으로, 감성을 기록합니다
          </Typography>
          <Typography paragraph>
            르브랑 갤러리는 아기의 첫 생일이라는 가장 소중한 하루를 오롯이 기록해드리는 감성 돌스냅 전문 브랜드입니다. 
            우리는 아이의 자연스러운 표정, 부모님의 따뜻한 시선, 가족의 웃음까지 순간순간을 놓치지 않고 담아내며,
            단순한 사진이 아닌 이야기를 전하는 작품을 만들어냅니다.
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 5 }}>
            촬영에 대한 우리의 철학
          </Typography>
          <Typography paragraph>
            촬영은 단순한 기술이 아닌 감정의 교류라고 믿습니다. 
            현장에서는 최대한 자연스럽고 편안한 분위기를 이끌어내어, 
            아이와 가족 모두가 부담 없이 웃을 수 있는 순간을 만들어 드립니다. 
            촬영 전 안내부터 촬영 후 보정까지, 하나의 흐름처럼 정성스럽게 진행합니다.
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 5 }}>
            르브랑이 드리는 약속
          </Typography>
          <Typography component="ul" sx={{ pl: 3, lineHeight: 2 }}>
            <li>보정본은 약속된 일정 내에 정성스럽게 전달드립니다.</li>
            <li>사진 한 장 한 장에 진심을 담아 예술로 완성합니다.</li>
          </Typography>
          <Typography variant="body1" sx={{ mt: 6, fontStyle: "italic", textAlign: "center", fontSize: "1.2rem" }}>
            “아기의 첫 생일, 그 날의 공기와 감정을 오랫동안 기억하실 수 있도록.”
          </Typography>
        </Box>
      </Container>
    </Box>
  );

  const PricingPage = () => (
    <Box sx={{ bgcolor: "#121212", minHeight: "100vh", py: 8 }}>
      <Container maxWidth={false} disableGutters>
        <Box sx={{ maxWidth: "md", mx: "auto", px: 2, color: "#fff", fontFamily: "'Noto Serif KR', serif" }}>
          <TableContainer component={Paper} sx={{ mb: 4, backgroundColor: '#1e1e1e' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#fff' }}>상품명</TableCell>
                  <TableCell sx={{ color: '#fff' }}>가격</TableCell>
                  <TableCell sx={{ color: '#fff' }}>구성</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: '#fff' }}>기본형</TableCell>
                  <TableCell sx={{ color: '#fff' }}>260,000원</TableCell>
                  <TableCell sx={{ color: '#fff' }}>보정사진 25~30컷 + 원본 400장 이상</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: '#fff' }}>앨범형</TableCell>
                  <TableCell sx={{ color: '#fff' }}>400,000원</TableCell>
                  <TableCell sx={{ color: '#fff' }}>기본형 + 12×10인치, 20페이지 앨범</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h5" gutterBottom>
            촬영 절차
          </Typography>
          <Typography paragraph>
            - 행사 1시간 전 연출 촬영<br/>
            - 양가 직계 가족 원판 촬영<br/>
            - 돌잡이 이벤트 및 스케치 촬영
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            보정 범위
          </Typography>
          <Typography paragraph>
            색감 보정, 피부 톤 보정, 잡티 제거 등 자연스럽고 감성적인 결과물 제공
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            파일 수령
          </Typography>
          <Typography paragraph>
            촬영일 기준 4주 후 일요일 18시 이후<br/>
            <a href="http://14.52.162.203" style={{ color: "#90caf9" }} target="_blank" rel="noopener noreferrer">
              http://14.52.162.203
            </a> 에서 아기 이름으로 검색하여 다운로드 가능 (업로드 시점 별도 안내 없음)
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            위약금 안내
          </Typography>
          <Typography paragraph>
            - 예약 후 24시간 이후 취소 시 위약금 20,000원 발생<br/>
            - 촬영일 기준 1개월 이내 취소 시 예약금 전액이 위약금으로 대체됩니다
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              color="primary"
              href="https://open.kakao.com/o/sdjw3eWe"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ backgroundColor: '#ffca28', color: '#000', fontWeight: 'bold', px: 4, py: 1.5 }}
            >
              실시간 상담하러 가기
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  return (
    <>
      <Header />


      {/* 네비게이터 아래 전체 배경 영역 */}
      <Box sx={{ mt: { xs: 8, md: 16 }, bgcolor: "#121212" }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
