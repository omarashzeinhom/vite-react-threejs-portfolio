import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "./index";
import { useControls } from "leva";
import { Office } from "./Office";
import { motion } from "framer-motion-3d";

export const Experience = (props) => {
  const { section } = props;
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Waving", "Falling", "Standing"],
    },
  });
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <motion.group
        animate={{
          y: section === 0 ? 0 : 1,
        }}
        position-x={1.25}
      >
        <Office section={section} />
      </motion.group>

      <Sky />
      <Environment preset="sunset" />
      <motion.group
        position-y={1.04}
        position-x={0.25}
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
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
      </motion.group>
    </>
  );
};
