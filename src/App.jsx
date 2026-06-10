import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioDetail from "./pages/PortfolioDetail";
import Header from "./components/Header";
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

const contactUrl = "https://open.kakao.com/o/sdjw3eWe";

const pageSx = {
  bgcolor: "#faf8f4",
  color: "#27231f",
  minHeight: "100vh",
  py: { xs: 6, md: 10 }
};

const contentSx = {
  maxWidth: 920,
  mx: "auto",
  px: { xs: 2.5, md: 4 }
};

const headingSx = {
  fontFamily: "'Nanum Myeongjo', serif",
  fontSize: { xs: "2.4rem", md: "4rem" },
  fontWeight: 500,
  lineHeight: 1.1,
  mb: 4
};

const sectionHeadingSx = {
  fontFamily: "'Nanum Myeongjo', serif",
  fontSize: { xs: "1.55rem", md: "2rem" },
  fontWeight: 500,
  mt: 6,
  mb: 2
};

const bodySx = {
  color: "#5f554c",
  fontFamily: "'Gowun Batang', serif",
  fontSize: "1.05rem",
  lineHeight: 1.95
};

const ctaSx = {
  bgcolor: "#27231f",
  borderRadius: 0,
  color: "#fff",
  mt: 4,
  px: 3,
  py: 1.2,
  textTransform: "none",
  "&:hover": { bgcolor: "#463b32" }
};

function AboutPage() {
  return (
    <Box sx={pageSx}>
      <Container maxWidth={false} sx={contentSx}>
        <Typography component="h1" sx={headingSx}>
          순간을 작품으로, 기억을 감성으로
        </Typography>

        <Typography paragraph sx={bodySx}>
          르브랑 갤러리는 아기의 첫 번째 생일이라는 특별한 날을 따뜻한 시선과 깊은
          감성으로 기록하는 돌스냅 전문 브랜드입니다. 인생에서 단 한 번뿐인 순간이 시간이
          흐를수록 더욱 빛날 수 있도록 정성과 진심을 담아 작업합니다.
        </Typography>

        <Typography component="h2" sx={sectionHeadingSx}>
          우리의 촬영 철학
        </Typography>
        <Typography paragraph sx={bodySx}>
          인위적인 연출보다는 자연스러운 순간을 중시합니다. 아이의 미소와 작은 움직임,
          부모님의 따뜻한 눈길, 가족들이 함께 웃는 장면을 포착해 시간이 지나도 그날의
          감정을 다시 느낄 수 있는 사진으로 완성합니다.
        </Typography>
        <Typography paragraph sx={bodySx}>
          촬영 전에는 원하는 방향을 충분히 논의하고, 촬영 중에는 가족들이 편안하게 머물 수
          있도록 분위기를 조성합니다. 촬영 후에는 사진 한 장 한 장을 세밀하게 보정합니다.
        </Typography>

        <Typography component="h2" sx={sectionHeadingSx}>
          르브랑은
        </Typography>
        <Box component="ul" sx={{ ...bodySx, pl: 3 }}>
          <li>촬영된 사진을 약속된 일정 내에 세심하게 보정해 전달합니다.</li>
          <li>작품마다 가족의 진심과 특별한 순간을 담습니다.</li>
          <li>현장의 따뜻한 분위기를 다시 보고 싶은 사진으로 남깁니다.</li>
        </Box>

        <Typography
          sx={{
            borderTop: "1px solid #ded6cc",
            color: "#3a332d",
            fontFamily: "'Nanum Myeongjo', serif",
            fontSize: { xs: "1.35rem", md: "1.8rem" },
            lineHeight: 1.65,
            mt: 7,
            pt: 4
          }}
        >
          “아기의 첫 생일, 그 날의 감동과 따뜻한 기억을 선명하게 간직할 수 있도록
          르브랑 갤러리가 함께하겠습니다.”
        </Typography>
      </Container>
    </Box>
  );
}

function PricingPage() {
  return (
    <Box sx={pageSx}>
      <Container maxWidth={false} sx={contentSx}>
        <Typography component="h1" sx={headingSx}>
          금액 안내
        </Typography>

        <TableContainer sx={{ borderTop: "1px solid #27231f", mb: 5 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#27231f", fontWeight: 700 }}>상품명</TableCell>
                <TableCell sx={{ color: "#27231f", fontWeight: 700 }}>가격</TableCell>
                <TableCell sx={{ color: "#27231f", fontWeight: 700 }}>구성</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>기본형</TableCell>
                <TableCell>260,000원</TableCell>
                <TableCell>보정사진 25~30컷 + 원본 400장 이상</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>앨범형</TableCell>
                <TableCell>400,000원</TableCell>
                <TableCell>기본형 + 12×10인치, 20페이지 앨범</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography component="h2" sx={sectionHeadingSx}>
          촬영은 이렇게 진행돼요
        </Typography>
        <Typography sx={bodySx}>
          촬영이 있는 주에 안내전화를 드리고, 행사 시작 1시간 전에 미리 만나 연출 컷을
          촬영합니다. 양가 가족 원판 촬영과 돌잡이 이벤트, 그날의 소중한 순간도 자연스럽게
          스케치합니다.
        </Typography>

        <Typography component="h2" sx={sectionHeadingSx}>
          사진 보정과 전달
        </Typography>
        <Typography sx={bodySx}>
          감성적인 색감 보정과 자연스러운 피부 정리를 진행합니다. 사진은 촬영일 기준 4주 뒤
          일요일 오후 6시 이후부터 다운로드할 수 있으며, 업로드 시점부터 90일간 보관됩니다.
        </Typography>

        <Typography component="h2" sx={sectionHeadingSx}>
          예약 변경 및 취소
        </Typography>
        <Typography sx={bodySx}>
          예약 후 24시간이 지나 취소하면 위약금 20,000원이 발생합니다. 촬영일 기준 한 달
          이내 취소 시 예약금은 위약금으로 전환됩니다. 변경이 필요한 경우 상담으로 문의해 주세요.
        </Typography>

        <Button href={contactUrl} target="_blank" rel="noopener noreferrer" sx={ctaSx}>
          카카오톡으로 문의하기
        </Button>
      </Container>
    </Box>
  );
}

function DiscountPage() {
  return (
    <Box sx={pageSx}>
      <Container maxWidth={false} sx={contentSx}>
        <Typography component="h1" sx={headingSx}>
          할인 혜택 안내
        </Typography>

        <Typography component="h2" sx={sectionHeadingSx}>
          신규 지점 & 미등록 포트폴리오 장소 할인
        </Typography>
        <Typography sx={bodySx}>
          아직 등록되지 않은 장소에서 촬영을 의뢰하시면 30,000원 할인 혜택을 드립니다.
          이벤트 참여 가능한 지점인지 상담으로 확인해 주세요. 촬영된 사진은 홈페이지
          포트폴리오로 사용됩니다.
        </Typography>

        <Typography component="h2" sx={sectionHeadingSx}>
          후기 작성 리워드
        </Typography>
        <Typography sx={bodySx}>
          촬영 후 인스타그램과 파티수카페 2곳에 후기를 작성해주시면 5,000원을 환급해
          드립니다. 후기 작성 후 오픈채팅방으로 링크와 계좌번호를 남겨주세요.
        </Typography>

        <Button href={contactUrl} target="_blank" rel="noopener noreferrer" sx={ctaSx}>
          카카오 오픈채팅 바로가기
        </Button>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <>
      <Header />
      <Box component="main" sx={{ pt: { xs: "64px", md: "76px" }, bgcolor: "#faf8f4" }}>
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
