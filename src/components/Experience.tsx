import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const highlights = [
    "Developing Cube Oden, an Angular-based SaaS insurance platform using PrimeNG and RxJS",
    "Designed and maintained a Storybook component library for reusable UI components",
    "Developed Microsoft Word and Outlook Add-ins using Office.js API for legal workflows",
    "Implemented microfrontend architecture enabling modular development",
    "Achieved 80–90% unit test coverage using Jest and React Testing Library",
    "Active participation in Agile ceremonies, code reviews, and direct client interactions",
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">CAREER</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gradient">Work Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="relative pl-20">
            {/* Company card */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card">
              <div className="absolute -left-[3.25rem] top-8 w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Software Developer</h3>
                  <p className="text-lg text-primary font-medium">Just Be Techsoft Pvt Ltd, Pune</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="font-mono text-sm text-muted-foreground">Nov 2020 – Present</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full-stack developer on multiple enterprise applications in insurance, legal tech, and public health domains, 
                delivering scalable and maintainable solutions.
              </p>

              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground/90">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative pl-20"
        >
          <div className="absolute -left-[3.25rem] top-6 w-10 h-10 rounded-xl glass border border-border flex items-center justify-center">
            <span className="text-lg">🎓</span>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground">Bachelor of Technology in Mechanical Engineering</h3>
            <p className="text-primary">Lovely Professional University, Punjab</p>
            <p className="text-muted-foreground font-mono text-sm mt-2">2013 – 2017 | CGPA: 7.03 / 10</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;