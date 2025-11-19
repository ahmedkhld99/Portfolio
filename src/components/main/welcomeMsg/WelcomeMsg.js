import SplitText from "./SplitText";
import "./SplitText.css";
import MyWork from "./myWork/MyWork";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function WelcomeMsg() {
  return (
    <>
      <div className="el-style">
        <SplitText
          text="Hi, I'm Ahmed Khaled"
          className="text-2xl font-semibold text-center custom-style"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <MyWork />
      </div>
    </>
  );
}
