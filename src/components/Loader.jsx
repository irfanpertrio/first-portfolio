import { Html, useProgress } from "@react-three/drei"
import { progress } from "framer-motion"

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 16,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
          marginLeft: -27,
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader