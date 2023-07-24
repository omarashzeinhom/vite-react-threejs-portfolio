const Section = (props) => {
  const { children } = props;

  return (
    <section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
    >
      {children}
    </section>
  );
};

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
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
      <p className="text-lg text-gray-600 mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, cum
        exercitationem deserunt iusto quaerat repellat beatae laborum ipsam
        dolorem eligendi? Modi repellat non voluptas voluptates, totam
        blanditiis accusamus est commodi.
      </p>
      <button
        href="#contact"
        className="bg-blue-500 text-white py-4 px-8 rounded-lg font-bold"
      >
        Contact Me
      </button>
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

const SkillsSection = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold"> Skills</h2>

        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <h3 className="text-xl font-bold text-gray-800">
                {skill?.title}
              </h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${skill?.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-5xl font-bold">Languages</h2>
        <div className="mt-8 space-y-4">
          {languages.map((language, index) => (
            <div className="w-64" key={index}>
              <h3 className="text-xl font-bold text-gray-800">
                {language?.title}
              </h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${language?.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const ProjectsSection = () => {
  return <Section>Projects</Section>;
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact Me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input type="text" name="name" id="name" />
          <label for="email" className="font-medium text-gray-900 block mb-1">
            Email
          </label>
          <input type="text" name="email" id="email" />

          <label
            for="message"
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
    </Section>
  );
};

export default Interface;
