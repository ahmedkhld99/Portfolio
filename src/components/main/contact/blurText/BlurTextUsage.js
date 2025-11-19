import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function BlurTextUsage() {
  return (
    <>
      <BlurText
        text="Made it to the end? Pretty cool, right?"
        delay={500}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
    </>
  );
}
