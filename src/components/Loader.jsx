import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100px",
        marginTop: "40px"
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: "40px",
          textAlign: "center"
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
