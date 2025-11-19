import "./Summary.css";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const scrollTo = (id, offset = 80) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};

export default function Summary() {
  const handleGetInTouch = () => {
    scrollTo("contact", 80);
  };

  return (
    <>
      <div className="summary-container" id="summary">
        <h1>
          <span>About</span> Me
        </h1>
        <div className="summary-parent">
          <div className="summary-cv">
            <p>
              Passionate junior React developer with a strong foundation in
              building fast, clean, and maintainable front-end applications.
            </p>
            <p>
              Specialized in fully responsive designs that look and work
              perfectly across all device sizes (mobile-first approach).
            </p>
            <p>
              Highly focused on delivering intuitive user experiences and
              pixel-perfect UI with great attention to detail, while constantly
              pushing myself to learn and improve every day.
            </p>
            <div className="summary-btns-cv">
              <button
                className="summary-btn touch-btn"
                onClick={handleGetInTouch}>
                Get in touch
              </button>

              <a
                href="../../../../public/files/Ahmed Khaled.pdf"
                download="Ahmed-Khaled.pdf"
                style={{ textDecoration: "none" }}>
                <button className="summary-btn cv-btn">Download CV</button>
              </a>
            </div>
          </div>

          <div className="summary-side">
            <div className="side-els">
              <div className="summary-icon">
                <PeopleAltOutlinedIcon />
              </div>
              <div>
                <h6>Communication</h6>
                <p>
                  Communication Skilled communicator, adept at aligning with
                  designers and stakeholders to deliver user-focused interfaces.
                </p>
              </div>
            </div>

            <div className="side-els">
              <div className="summary-icon">
                <PsychologyOutlinedIcon />
              </div>
              <div>
                <h6>Adaptability</h6>
                <p>
                  Adaptability: Quick to learn and apply new front-end
                  technologies.
                </p>
              </div>
            </div>

            <div className="side-els">
              <div className="summary-icon">
                <GroupsOutlinedIcon />
              </div>
              <div>
                <h6>Teamwork</h6>
                <p>
                  Collaborative team player, experienced in working with
                  cross-functional teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
