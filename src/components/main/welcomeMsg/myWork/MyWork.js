import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function MyWork() {
  const handleViewProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;

    const isDesktop = window.innerWidth >= 1280;
    const offset = isDesktop ? 100 : 70;

    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
        <Button
          onClick={handleViewProjects}
          sx={{
            backgroundColor: "var(--color-background-primary)",
            borderRadius: "15px",
            fontFamily: "inherit",
            textTransform: "capitalize",
          }}
          variant="contained">
          View My Projects
        </Button>
      </Stack>
    </div>
  );
}
