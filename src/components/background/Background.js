import LiquidEther from "./LiquidEther";

export default function Background() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "auto !important",
        zIndex: "-1",
      }}>
      <LiquidEther
        colors={["#792bda", "#946ad2", "#ffffff"]}
        mouseForce={40}
        cursorSize={55}
        isViscous={true}
        viscous={1}
        resolution={0.9}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={3.2}
        takeoverDuration={0.9}
        autoResumeDelay={1000}
        autoRampDuration={1}
      />
    </div>
  );
}
