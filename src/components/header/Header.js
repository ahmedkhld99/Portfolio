import "./Header.css";
import Title from "./shinyText/Title";
import NavBar from "./navBar/NavBar";

export default function Header() {
  return (
    <>
      <div className="page-title">
        <Title />
      </div>
      <NavBar />
    </>
  );
}
