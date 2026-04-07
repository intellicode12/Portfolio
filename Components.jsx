components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black p-4 flex justify-center gap-10 z-50">
      <a href="#hero">Home</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
-----Components/Hero.jsx-----
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Hi, I'm Your Name 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-lg"
      >
        Aspiring Software Engineer | DSA Enthusiast
      </motion.p>
    </section>
  );
components/projects.jsx
const projects = [
  {
    title: "8x8x8 LED Cube",
    description: "Arduino-based LED cube with animations",
    link: "https://github.com/yourrepo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold">Projects</h2>

      {projects.map((proj, i) => (
        <div key={i} className="border p-5 mt-4 rounded-xl">
          <h3 className="text-xl">{proj.title}</h3>
          <p>{proj.description}</p>
          <a href={proj.link} className="text-blue-400">View</a>
        </div>
      ))}
    </section>
  );
}
}
