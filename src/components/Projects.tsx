import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";

const projects = [
  {
    title: "Cube Oden",
    subtitle: "Insurance Notice Management Platform",
    description: "SaaS platform to automate insurance notice generation and ensure regulatory compliance. Built dynamic dashboards and workflow-driven UI.",
    tech: ["Angular", "PrimeNG", "RxJS", "Storybook", "TypeScript"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Lexis Nexis Admin Portal",
    subtitle: "Centralized Administration System",
    description: "Developed a centralized admin portal with CRUD operations and microfrontend architecture for scalability.",
    tech: ["React.js", "Fluent UI", "Redux", "Microfrontend"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Lexis Nexis Word Add-in",
    subtitle: "Legal Research & Citation Management",
    description: "Microsoft Word Add-in for legal research and citation management with seamless Word interaction via Office.js APIs.",
    tech: ["React.js", "TypeScript", "Office.js", "Redux", "Axios"],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "WHO MSAT",
    subtitle: "Malaria Surveillance Assessment Toolkit",
    description: "Global data-intensive application for the WHO with interactive dashboards using Kendo UI React Charts and Grids.",
    tech: ["React.js", "Kendo UI", "Redux", "REST APIs"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Lexis Create for Outlook",
    subtitle: "Legal Workflow Optimization",
    description: "Microsoft Outlook Add-in to streamline legal research workflows. Built CRUD interfaces for managing legal snippets and templates.",
    tech: ["React.js", "TypeScript", "Microsoft Graph API", "Azure AD"],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "WHO MPOWER Web Tool",
    subtitle: "Tobacco Control Data Platform",
    description: "Global data visualization platform supporting WHO tobacco control initiatives with cross-country comparison dashboards.",
    tech: ["React.js", "Redux", "REST APIs"],
    gradient: "from-rose-500/20 to-red-500/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Enterprise applications spanning legal tech, public health, and insurance domains
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-muted/50 rounded-xl border border-border/50 group-hover:border-primary/30 transition-colors">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-muted/50 text-muted-foreground rounded-md border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;