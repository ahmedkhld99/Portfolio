import "./Skills.css";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaGitAlt,
  FaTerminal,
} from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiTypescript, SiRedux, SiFramer } from "react-icons/si";
import { TbJson, TbApi } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import { GiArchiveResearch } from "react-icons/gi";
import { MdStyle } from "react-icons/md";
import { VscGitFetch } from "react-icons/vsc";
import { SiReactrouter } from "react-icons/si";
import { PiWebhooksLogo } from "react-icons/pi";

export default function Skills() {
  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "Responsive design", icon: <DiResponsive /> },
    { name: "JavaScript (ES6+)", icon: <RiNodejsLine /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "Research and Development", icon: <GiArchiveResearch /> },
    { name: "JSON data handling", icon: <TbJson /> },
    { name: "SASS", icon: <FaSass /> },
    { name: "API integration", icon: <TbApi /> },
    { name: "Basic Terminal Commands, Cmder & Cli", icon: <FaTerminal /> },
    { name: "Styling: Tailwind CSS, Material UI", icon: <MdStyle /> },
    { name: "TypeScript", icon: <SiTypescript /> }, // رقم 13
    { name: "Data Fetching: TanStack Query, Axios", icon: <VscGitFetch /> },
    { name: "Routing: React Router", icon: <SiReactrouter /> },
    {
      name: "React.js (Hooks, Context, Custom Hooks)",
      icon: <PiWebhooksLogo />,
    },
    { name: "State Management: Redux Toolkit, Zustand", icon: <SiRedux /> },
    { name: "Animation: Framer Motion", icon: <SiFramer /> },
  ];

  const mid = Math.ceil(skillsData.length / 2);
  const firstColumn = skillsData.slice(0, mid);
  const secondColumn = skillsData.slice(mid);

  // دالة صغيرة تحدد إذا كان الـ index من 0 إلى 11 (أول 12) ياخد كلاس gold
  const getSkillNameClass = (globalIndex) => {
    return globalIndex < 11 ? "skill-name gold-text" : "skill-name";
  };

  return (
    <div className="skills-container" id="skills">
      <h1>
        My <span>Skills</span>
      </h1>

      <div className="skills-child">
        {/* العمود الأول */}
        <div className="sort">
          <p>
            Gold: <span>What I really know</span>
          </p>
          <p>
            White: <span>I have an idea about it</span>
          </p>
        </div>
        <div className="skills-list">
          <div className="skills-grandson">
            <ul>
              {firstColumn.map((skill, index) => (
                <li key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className={getSkillNameClass(index)}>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* العمود الثاني */}
          <div className="skills-grandson">
            <ul>
              {secondColumn.map((skill, index) => {
                const globalIndex = mid + index; // الـ index الحقيقي في المصفوفة كلها
                return (
                  <li key={globalIndex}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className={getSkillNameClass(globalIndex)}>
                      {skill.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
