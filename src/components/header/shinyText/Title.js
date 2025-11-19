import GradientText from "./GradientText";
import "./GradientText.css";

export default function Title() {
  return (
    <>
      <GradientText
        colors={["#6940ffff", "#e0e0e0ff", "#7340ffff", "#4079ff", "#ffffffff"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class">
        Ahmed Portfolio
      </GradientText>
    </>
  );
}
