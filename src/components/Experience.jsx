import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./index";
import { useControls } from "leva";

export const Experience = () => {
  const {animation} = useControls({

    animation: {
      value:"Typing",
      options: ["Typing", "Waving", "Falling", "Standing" ]
    }

  });
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
      <Avatar animation={animation}/>
      </group>
    <ambientLight intensity={1}/>
    </>
  );
};
