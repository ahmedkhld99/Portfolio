// ThemeToggle.js
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlineIcon from "@mui/icons-material/LightbulbOutline";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      setIsDark(false);
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button
      variant="text"
      onClick={toggleTheme}
      className="p-0 border-0 shadow-none"
      style={{
        outline: "none",
        boxShadow: "none",
        lineHeight: 1,
      }}
      onMouseDown={(e) => e.preventDefault()}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      {isDark ? (
        <LightbulbOutlineIcon fontSize="small" />
      ) : (
        <LightbulbIcon fontSize="small" />
      )}
    </Button>
  );
}
