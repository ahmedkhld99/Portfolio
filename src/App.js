import "./App.css";
import "./index.css";
import Background from "./components/background/Background";
import Header from "./components/header/Header";
import WelcomeMsg from "./components/main/welcomeMsg/WelcomeMsg";
import ArrowDown from "./components/main/arrowDown/ArrowDown";
import Summary from "./components/main/summary/Summary";
import Skills from "./components/main/skills/Skills";
import Projects from "./components/main/projects/Projects";
import Contact from "./components/main/contact/Contact";

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <WelcomeMsg />
      <ArrowDown />
      <Summary />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
