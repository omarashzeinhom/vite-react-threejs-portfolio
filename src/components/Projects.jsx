import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef,useState } from "react";
import { urlFor, client } from "../../client";

export const projects = [
  {
    title: "ToDo",
    url: "about:blank",
    image: "projects/tstodo.webp",
    description:
      "Built from scratch Back4app, MongoDB , Parse , Ionic Typescript and Parse js-sdk.",
  },
  {
    title: "Gym",
    url: "https://gymcompanyportfolio.netlify.app/",
    image: "projects/gym.webp",
    description: "Full Stack Gym in MUI and Sanity API",
  },

  {
    title: "Trophy House",
    url: "www.gifthouseeg.org",
    image: "projects/th.webp",
    description: " A Custom Luxurious Theme Developed From Scratch.",
  },
];





const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  /* Getting Data from Backend Start */

/*

  const [activeFilter, setActiveFilter] = useState("All");
  const [animCard, setAnimCard] = useState({ y: 0, opacity: 1 });
  const [workProjects, setWorkProjects] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "work"]';
    client.fetch(query).then((data) => {
      setWorkProjects(data);
      setFilterWork(data);
    });
  }, []);

  console.log(workProjects);

const handleWorkFilter = (item) => {
    //TODO: Handle Category Filter Finish before 02/08/2022
    setActiveFilter(item);
    setAnimCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(workProjects);
      } else {
        setFilterWork(workProjects.filter((worked) => worked?.categories?.includes(item)));
      }
    }, 500);
  };
*/

  /* Getting Data from Backend End */




  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      {/*
      
      {workProjects.map((workProject,index)=>
      (
        <Text>
        {workProject.name}
        {workProject.description}
        {workProject.projectGitHubLink}
        {workProject.projectLink}
        {workProject.categories}

        </Text>

        
      )
      
      )}
      
      */}




      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
        loading="lazy"
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  

 


  
  return (
    <group position-y={-viewport.height * 2 + 1}>
     
 
            
    
     
     
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
