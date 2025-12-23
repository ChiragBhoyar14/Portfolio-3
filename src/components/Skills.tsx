import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Angular", "RxJS", "Redux", "Redux Toolkit", "PrimeNG", "Kendo UI", "Fluent UI", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Remix.js", "REST APIs"],
  },
  {
    title: "Integrations",
    skills: ["Microsoft Graph API", "Office.js", "Azure AD", "Axios"],
  },
  {
    title: "Testing & Tools",
    skills: ["Jest", "React Testing Library", "Git", "SonarQube", "Chrome DevTools"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gradient">Technical Skills</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group bg-gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-muted/50 text-muted-foreground rounded-lg border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 glass rounded-2xl">
            <span className="text-muted-foreground">Also experienced in:</span>
            <span className="font-mono text-sm text-foreground">Microfrontend Architecture • Agile/Scrum • Component-Driven Development</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;