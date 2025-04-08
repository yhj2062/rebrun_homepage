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
      <Container maxWidth={false} disableGutters>
        <Box sx={{ maxWidth: "md", mx: "auto", px: 2, color: "#fff" }}>
  
          {/* 제목 */}
          <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Nanum Myeongjo', serif" }}>
            순간을 작품으로, 기억을 감성으로
          </Typography>
  
          {/* 본문 */}
          <Typography paragraph sx={{ fontFamily: "'Gowun Batang', serif" }}>
            르브랑 갤러리는 아기의 첫 번째 생일이라는 특별한 날을 따뜻한 시선과 깊은 감성으로 기록하는 돌스냅 전문 브랜드입니다. 우리는 인생에서 단 한 번뿐인 이 소중한 순간이 시간이 흐를수록 더욱 빛날 수 있도록 정성과 진심을 담아 작업하고 있습니다.
          </Typography>
  
          <Typography variant="h5" gutterBottom sx={{ mt: 5, fontFamily: "'Nanum Myeongjo', serif" }}>
            우리의 촬영 철학
          </Typography>
  
          <Typography paragraph sx={{ fontFamily: "'Gowun Batang', serif" }}>
            우리의 촬영 철학은 인위적인 연출보다는 자연스러운 순간을 중시합니다. 아이의 천진난만한 미소와 작은 움직임, 부모님의 따뜻한 눈길과 다정한 손길, 가족들이 함께 웃으며 나누는 자연스러운 순간들을 포착하고 기록하는 것을 목표로 합니다. 사진 한 장 한 장이 단순히 시간의 흐름을 담는 것이 아니라, 가족이 오랜 시간이 지난 후에도 그 날의 따뜻했던 순간과 감정을 다시금 생생하게 느낄 수 있도록 감성적인 작품으로 완성해 드립니다.
          </Typography>
  
          <Typography paragraph sx={{ fontFamily: "'Gowun Batang', serif" }}>
            촬영은 단순히 카메라로 기록하는 기술적 행위 이상으로, 가족과 작가 간의 진정한 공감과 소통을 통해 이루어집니다. 르브랑 갤러리의 작가들은 촬영 현장에서 아이와 가족들이 편안하게 느낄 수 있도록 세심한 배려와 친근한 분위기를 조성하며, 촬영 내내 가족들이 자연스럽고 편안하게 웃고 행복한 시간을 보낼 수 있도록 돕습니다. 촬영 전에 가족들과 충분히 소통하며 원하는 방향을 함께 논의하고, 촬영 후에는 사진 한 장 한 장을 세밀하고 꼼꼼하게 보정하여, 결과물이 가족들의 기대를 넘어 감동과 기쁨으로 다가갈 수 있도록 최선을 다하고 있습니다.
          </Typography>
  
          <Typography variant="h5" gutterBottom sx={{ mt: 5, fontFamily: "'Nanum Myeongjo', serif" }}>
            르브랑은
          </Typography>
  
          <Typography component="ul" sx={{ pl: 3, lineHeight: 2, fontFamily: "'Gowun Batang', serif" }}>
            촬영된 사진은 약속된 일정 내에 세심하고 정성스럽게 보정하여 전달합니다.<br></br>
            작품 하나하나마다 가족의 진심과 특별한 순간을 담아 감동을 전합니다.<br></br>
            현장에서 느꼈던 따뜻한 분위기와 감동을 고스란히 담아, 언제나 다시 보고 싶어지는 사진을 만들어 드립니다.<br></br>
          </Typography>
  
          <Typography paragraph sx={{ mt: 5, fontFamily: "'Gowun Batang', serif" }}>
            우리는 단순한 사진 이상의 가치를 추구하며, 가족의 이야기를 담은 특별한 작품을 완성하기 위해 끊임없이 노력하고 있습니다. 사진 속에 담긴 감성과 이야기가 오랫동안 가족의 소중한 보물로 남을 수 있도록 항상 진심을 다해 작업하겠습니다.
          </Typography>
  
          {/* 인용문 */}
          <Typography
            variant="body1"
            sx={{
              mt: 6,
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "1.4rem",
              fontFamily: "'Nanum Brush Script', cursive",
            }}
          >
            <h3>“아기의 첫 생일, 그 날의 감동과 따뜻한 기억을 언제나 선명하게 간직할 수 있도록 르브랑 갤러리가 함께하겠습니다.”</h3>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
  
  const DiscountPage = () => (
    <Box sx={{ bgcolor: "#121212", minHeight: "100vh", py: 8 }}>
      <Container maxWidth={false} disableGutters>
        <Box sx={{ maxWidth: "md", mx: "auto", px: 2, color: "#fff", fontFamily: "'Noto Serif KR', serif" }}>
          <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Nanum Myeongjo', serif" }}>
            할인 혜택 안내
          </Typography>
  
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            - 신규 지점 & 미등록 포트폴리오 장소 할인
          </Typography>
          <Typography paragraph>
            저희에게 아직 등록되지 않은 장소에서 촬영을 의뢰하시면, <strong>30,000원 할인 혜택</strong>을 드립니다.<br/>
            이벤트 참여 가능한 지점인지에 대한 확인은 문의주세요^^<br/>
            ※ 촬영된 사진은 홈페이지 내 포트폴리오로 사용됩니다.
          </Typography>
  
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            - 후기 작성 리워드
          </Typography>
          <Typography paragraph>
            촬영 후 인스타(필수 해시태그 2개 - #촬영한 지점명, #르브랑갤러리), 파티수카페 2곳에 촬영 후기를 작성해주시면, <strong>5,000원 환급</strong>을 해드립니다.<br/>
            후기 작성후 아래 오픈채팅방 통해 링크와 계좌번호를 남겨주시면 됩니다.<br/>
            ※ 내용은 동일해도 무방합니다.
          </Typography>
  
          <Typography paragraph sx={{ mt: 5 }}>
            더 궁금한 점이 있다면 언제든지 아래 실시간 상담을 통해 문의 부탁드립니다.
          </Typography>
  
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              href="https://open.kakao.com/o/sdjw3eWe"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ backgroundColor: '#ffca28', color: '#000', fontWeight: 'bold', px: 4, py: 1.5 }}
            >
              카카오 오픈채팅 바로가기
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  const PricingPage = () => (
    <Box sx={{ bgcolor: "#121212", minHeight: "100vh", py: 8 }}>
      <Container maxWidth={false} disableGutters>
        <Box sx={{ maxWidth: "md", mx: "auto", px: 2, color: "#fff", fontFamily: "'Noto Serif KR', serif" }}>
          
          {/* 가격표 */}
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
  
          {/* 촬영주에  */}
          <Typography variant="h5" gutterBottom>
            촬영이 있는 주에 안내전화를 한번 드려요
          </Typography>
          <Typography paragraph>
            - 일정이 정상적으로 등록되어있고 고객분께 촬영 시작시간 안내를 드리기 위함이에요<br /><br /><br />
          </Typography>


          {/* 촬영 절차 */}
          <Typography variant="h5" gutterBottom>
            촬영은 이렇게 진행돼요
          </Typography>
          <Typography paragraph>
            - 행사 시작 1시간 전에 미리 만나 연출 컷을 촬영해요<br />
            - 양가 가족분들과 함께하는 원판 촬영도 빠짐없이 담아드려요<br />
            - 돌잡이 이벤트와 그날의 소중한 순간들을 자연스럽게 스케치해요<br /><br /><br />
          </Typography>
          
  
          {/* 보정 범위 */}
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            사진 보정은 어떻게 해주시나요?
          </Typography>
          <Typography paragraph>
            감성적인 색감 보정은 물론이고, 피부 톤이나 잡티도 자연스럽게 정리해드려요.  
            인위적이지 않게, 있는 그대로의 아름다움을 담아드리는 걸 가장 중요하게 생각해요.<br />
            ※얼굴 내의 성형보정(눈, 코, 입 등)은 진행하고 있지 않아요.<br />
            <br /><br /><br />
          </Typography>
  
          {/* 파일 수령 */}
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            사진은 언제, 어떻게 받을 수 있나요?
          </Typography>
          <Typography paragraph>
            촬영일 기준으로 4주 뒤 일요일 오후 6시 이후부터,  
            아래 링크에서 아기 이름으로 검색하시면 다운로드 가능해요.  
            (업로드 완료 알림은 별도로 드리지 못하고 있습니다. 하지만 업로드 시점으로부터 90일간 자유롭게 다운로드 가능하세요!)
          </Typography>
          <Typography paragraph>
            👉{" "}
            <a href="http://14.52.162.203" style={{ color: "#90caf9" }} target="_blank" rel="noopener noreferrer">
              http://14.52.162.203<br /><br /><br />
            </a>
          </Typography>
  
          {/* 위약금 안내 */}
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            예약 변경이나 취소는 어떻게 되나요?
          </Typography>
          <Typography paragraph>
            - 예약 후 24시간이 지나 취소하시면, 위약금 20,000원이 발생해요<br />
            - 촬영일 기준 한 달 이내에 취소하실 경우, 예약금은 위약금으로 전환돼요<br />
            *변경이나 어려운 부분은 언제든 상담으로 도와드릴게요!
          </Typography>
  
          {/* 상담 버튼 */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              color="primary"
              href="https://open.kakao.com/o/sdjw3eWe"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ backgroundColor: '#ffca28', color: '#000', fontWeight: 'bold', px: 4, py: 1.5 }}
            >
              카카오톡으로 문의하기
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
          <Route path="/discount" element={<DiscountPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
