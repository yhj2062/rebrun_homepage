// src/components/Header.jsx

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "About", path: "/about" },
  { label: "예약문의(실시간 상담)", path: "https://open.kakao.com/o/sdjw3eWe", external: true },
  { label: "장소별 포트폴리오", path: "/" },
  { label: "금액안내", path: "/pricing" },
];

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ backgroundColor: "#111", boxShadow: "none", borderBottom: "1px solid #444" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: isMobile ? "space-between" : "center",
            width: "100%",
            px: 2,
            py: isMobile ? 1 : 2,
            boxSizing: "border-box",
          }}
        >
          {/* 로고 */}
          <Typography
            variant={isMobile ? "h6" : "h3"}
            sx={{
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              borderBottom: isMobile ? "none" : "2px solid #888",
              pb: isMobile ? 0 : 1,
              mb: isMobile ? 0 : 1,
            }}
          >
            르브랑 갤러리
          </Typography>

          {/* 햄버거 아이콘 (모바일에서만) */}
          {isMobile && (
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          )}

          {/* 데스크탑 메뉴 */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems.map((item) =>
                item.external ? (
                  <Button
                    key={item.label}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#fff", textTransform: "none" }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{ color: "#fff", textTransform: "none" }}
                  >
                    {item.label}
                  </Button>
                )
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* 모바일 Drawer 메뉴 (오른쪽에서 슬라이드) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#111", // AppBar와 같은 어두운 배경색
            color: "#fff",
            width: 250,
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.label}>
                {item.external ? (
                  <ListItemText
                    primary={
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          fontSize: "1.1rem",
                          padding: "0.5rem 0",
                          display: "block",
                        }}
                      >
                        {item.label}
                      </a>
                    }
                  />
                ) : (
                  <ListItemText
                    primary={
                      <Link
                        to={item.path}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          fontSize: "1.1rem",
                          padding: "0.5rem 0",
                          display: "block",
                        }}
                      >
                        {item.label}
                      </Link>
                    }
                  />
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
