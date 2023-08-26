import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <CertificateSection/>
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, Im
        <br />
        <span className="bg-white px-1 italic rounded"> Omar Zeinhom</span>
      </h1>
      <motion.p
        className="text-lg text-teal-900 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 1.5,
          },
        }}
      >
        I develop 3D and animated Javascript and php websites from scratch.
      </motion.p>
      <motion.button
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 2.5,
          },
        }}
        className="bg-teal-500 text-white py-4 px-8 rounded-lg font-bold"
      >
        <a href="#contact">Contact</a>
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "React",
    level: 85,
  },
  {
    title: " JavaScript",
    level: 80,
  },

  {
    title: "TypeScript",
    level: 75,
  },
  {
    title: "PHP",
    level: 70,
  },
  {
    title: "Threejs",
    level: 70,
  },
  {
    title: "CSS",
    level: 65,
  },
  {
    title: "Node js",
    level: 60,
  },
  {
    title: "SCSS",
    level: 55,
  },

  {
    title: "3D Modelling",
    level: 45,
  },
];

const languages = [
  {
    title: "Arabic 🇪🇬",
    level: 100,
  },
  {
    title: "English 🇺🇸",
    level: 90,
  },
];

const SkillsSection = (props) => {
  const { section } = props;
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold"> Skills</h2>

        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
                className="text-xl font-bold text-gray-800"
              >
                {skill?.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${skill?.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1 + index * 0.2,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-5xl font-bold">Languages</h2>
        <div className="mt-8 space-y-4">
          {languages.map((language, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
                className="text-xl font-bold text-gray-800"
              >
                {language?.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${language?.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 2 + index * 0.2,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const WorkSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-7 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-5xl font-bold">Work</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const CertificateSection = () => {
 
  return (
    <Section>
      <div className="flex w-full h-full gap-7 items-center justify-center">
     
        <h2 className="text-5xl font-bold">Certificates</h2>
       
      </div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <section id="contact">
        <h2 className="text-5xl font-bold">Contact Me</h2>
        <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
          <form>
            <label
              htmlFor="name"
              className="font-medium text-gray-900 block mb-1"
            >
              Name
            </label>
            <input type="text" name="name" id="name" className="w-full" />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1"
            >
              Email
            </label>
            <input className="w-full" type="text" name="email" id="email" />

            <label
              htmlFor="message"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm "
              style={{ resize: "none" }}
            ></textarea>

            <button className="bg-blue-500 text-white py-4 px-8 rounded-lg font-bold mt-15">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Section>
  );
};

export default Interface;
