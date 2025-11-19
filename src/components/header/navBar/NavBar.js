import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ThemeToggle from "../themeToggle/ThemeToggle";
import "./NavBar.css";
import "../../../index.css";

// دالة السكرول السلس
const scrollTo = (id, offset) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior: "smooth",
    });
  }
};

export default function NavBar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const scrollOffset = isDesktop ? 100 : 70;

  const [anchorEl, setAnchorEl] = useState(null);
  const [themeMode, setThemeMode] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const open = Boolean(anchorEl);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  useEffect(() => {
    const update = () => {
      setThemeMode(
        document.documentElement.getAttribute("data-bs-theme") || "light"
      );
    };
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });
    return () => obs.disconnect();
  }, []);

  // تتبع السكرول + تحديد القسم النشط
  useEffect(() => {
    const sections = ["home", "summary", "skills", "projects", "contact"];

    const handleScroll = () => {
      // للـ backdrop
      setIsScrolled(window.scrollY > 20);

      // تحديد القسم النشط
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ستايل اللينكات حسب الثيم والحالة النشطة
  const getLinkStyle = (section) => ({
    fontFamily: '"Momo Trust Display", sans-serif',
    textTransform: "capitalize",
    fontWeight: activeSection === section ? 700 : 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
    color:
      activeSection === section
        ? "var(--color-hovering)" // لون الهوفر للقسم النشط
        : themeMode === "dark"
        ? "#ffffff"
        : "#000000", // غامق جدًا في اللايت مود
    "&:hover": {
      color: "var(--color-hovering)",
    },
  });

  // مكونات اللينكات (موحدة)
  const NavLink = ({ section, label, mobile, onClose }) => {
    const handleClick = () => {
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollTo(section, scrollOffset);
      }
      onClose?.();
    };

    return mobile ? (
      <MenuItem onClick={handleClick} sx={getLinkStyle(section)}>
        {label}
      </MenuItem>
    ) : (
      <Typography
        component="button"
        onClick={handleClick}
        sx={{
          ...getLinkStyle(section),
          background: "none",
          border: "none",
          p: 0,
          font: "inherit",
        }}>
        {label}
      </Typography>
    );
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        top: 0,
        zIndex: 1200,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled
          ? themeMode === "dark"
            ? "#000000b2"
            : "rgba(255,255,255,0.85)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(3px)" : "none",
        borderBottom: isScrolled
          ? themeMode === "light"
            ? "1px solid #e0e0e0"
            : "1px solid #3916b949"
          : "1px solid transparent",
      }}>
      <Toolbar sx={{ justifyContent: "space-between", py: 1.5 }}>
        {/* زر المينيو في الموبايل */}
        {!isDesktop && (
          <IconButton
            color="inherit"
            onClick={open ? handleMenuClose : handleMenuOpen}
            sx={{
              opacity: 0.8,
              color: themeMode === "dark" ? "#fff" : "#000000",
              "&:hover": { opacity: 1 },
            }}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}

        {/* لينكات الديسكتوب */}
        {isDesktop && (
          <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
            <NavLink section="home" label="Home" />
            <NavLink section="summary" label="Summary" offset={scrollOffset} />
            <NavLink section="skills" label="Skills" offset={scrollOffset} />
            <NavLink
              section="projects"
              label="Projects"
              offset={scrollOffset}
            />
            <NavLink section="contact" label="Contact" offset={scrollOffset} />
          </Box>
        )}

        {/* Theme Toggle للديسكتوب */}
        <div className="theme-toggle-desktop d-none d-lg-block">
          <ThemeToggle />
        </div>

        {/* مينيو الموبايل */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              minWidth: 220,
              height: "70vh",
              bgcolor: themeMode === "dark" ? "#000000b2" : "#ffffff6e",
              color: themeMode === "dark" ? "white" : "grey.900",
              boxShadow: "0 8px 32px #00000080",
              backdropFilter: "blur(3px)",
              borderRadius: "20px",
              mt: 1.5,
            },
          }}>
          <NavLink
            section="home"
            label="Home"
            mobile
            onClose={handleMenuClose}
          />
          <NavLink
            section="summary"
            label="Summary"
            mobile
            onClose={handleMenuClose}
          />
          <NavLink
            section="skills"
            label="Skills"
            mobile
            onClose={handleMenuClose}
          />
          <NavLink
            section="projects"
            label="Projects"
            mobile
            onClose={handleMenuClose}
          />
          <NavLink
            section="contact"
            label="Contact"
            mobile
            onClose={handleMenuClose}
          />
        </Menu>

        {/* Theme Toggle للموبايل */}
        <div className="theme-toggle-mobile">
          <ThemeToggle />
        </div>
      </Toolbar>
    </AppBar>
  );
}
