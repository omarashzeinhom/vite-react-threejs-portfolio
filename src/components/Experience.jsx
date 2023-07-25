import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "./index";
import { useControls } from "leva";
import { Office } from "./Office";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Waving", "Falling", "Standing"],
    },
  });
  return (
    <>
      <OrbitControls />
      <Office/>
      <Sky />
      <Environment preset="sunset" />
      <group position-y={1.04} position-x={0.25}>
        <ContactShadows
          opacity={0.3}
          scale={10}
          blur={1}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};
