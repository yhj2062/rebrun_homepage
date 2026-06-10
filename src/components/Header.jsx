import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Portfolio", path: "/" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Benefit", path: "/discount" },
  { label: "예약문의", path: "https://open.kakao.com/o/sdjw3eWe", external: true }
];

const navButtonSx = {
  color: "#27231f",
  fontFamily: "'Noto Serif KR', serif",
  fontSize: "0.82rem",
  fontWeight: 500,
  letterSpacing: 0,
  minWidth: "auto",
  px: 0,
  py: 0.5,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#8b6f52"
  }
};

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(250, 248, 244, 0.92)",
          borderBottom: "1px solid rgba(39, 35, 31, 0.12)",
          backdropFilter: "blur(16px)",
          color: "#27231f"
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: 76 },
            justifyContent: "space-between",
            px: { xs: 2.5, md: 6 }
          }}
        >
          <Typography
            component={Link}
            to="/"
            sx={{
              color: "inherit",
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: { xs: "1.1rem", md: "1.45rem" },
              fontWeight: 700,
              textDecoration: "none"
            }}
          >
            르브랑 갤러리
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3.5, alignItems: "center" }}>
            {menuItems.map((item) =>
              item.external ? (
                <Button
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ...navButtonSx,
                    border: "1px solid rgba(39, 35, 31, 0.28)",
                    borderRadius: 0,
                    px: 2,
                    py: 0.7
                  }}
                >
                  {item.label}
                </Button>
              ) : (
                <Button key={item.label} component={Link} to={item.path} sx={navButtonSx}>
                  {item.label}
                </Button>
              )
            )}
          </Box>

          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "inherit" }}
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            bgcolor: "#faf8f4",
            color: "#27231f",
            width: "min(82vw, 320px)"
          }
        }}
      >
        <Box sx={{ px: 3, py: 2.5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
            <Typography sx={{ fontFamily: "'Nanum Myeongjo', serif", fontWeight: 700 }}>
              르브랑 갤러리
            </Typography>
            <IconButton onClick={closeDrawer} aria-label="메뉴 닫기">
              <CloseIcon />
            </IconButton>
          </Box>

          <List disablePadding>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ borderTop: "1px solid #e4ded5" }}>
                {item.external ? (
                  <Button
                    fullWidth
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeDrawer}
                    sx={{ ...navButtonSx, justifyContent: "flex-start", py: 2 }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    component={Link}
                    to={item.path}
                    onClick={closeDrawer}
                    sx={{ ...navButtonSx, justifyContent: "flex-start", py: 2 }}
                  >
                    {item.label}
                  </Button>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
