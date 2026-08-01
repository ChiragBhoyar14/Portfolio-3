import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";

const projects = [
  {
    title: "Content Access & Entitlement Platform",
    subtitle: "TheRapidHire Pvt Ltd • Content Services",
    description: "Worked on content access and entitlement services for publications, books, alerts, and multimedia content, focusing on scalable delivery and secure access flows.",
    tech: [".NET 8", "Azure", "Cosmos DB", "Elasticsearch", "AKS"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Insurance Notice Generation Platform",
    subtitle: "TheRapidHire Pvt Ltd • Multi-tenant Notices",
    description: "Built tenant-aware insurance notice generation APIs with PostgreSQL, EF Core 8, Auth0, event-driven processing, and asynchronous PDF workflows.",
    tech: [".NET 8", "PostgreSQL", "EF Core 8", "Auth0", "SignalR"],
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Data Engineering & ETL Automation",
    subtitle: "TheRapidHire Pvt Ltd • Data Platform Work",
    description: "Worked on SQL Server stored procedures, C# ETL workflows, Azure Data Factory, Databricks, and Windows Services for data migration and automation.",
    tech: ["SQL Server", "C#", "ASP.NET MVC", "Azure Data Factory", "Databricks"],
    gradient: "from-teal-500/20 to-emerald-500/20",
  },
  {
    title: "ASP.NET Web Applications & Automation Services",
    subtitle: "Revalsys Technology • Business Solutions",
    description: "Delivered scalable ASP.NET applications and Windows services for bill processing automation, database optimization, and client-driven enhancements.",
    tech: ["ASP.NET", "ADO.NET", "Web API", "SQL Server", "Windows Services"],
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "Blood Donor API",
    subtitle: "Personal Project • Donor Management",
    description: "Built a .NET 8 API for donor registration, authentication, search, and secure role-based access with SQL Server and EF Core.",
    tech: [".NET 8", "SQL Server", "JWT", "Entity Framework Core"],
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    title: "Developer Portfolio Website",
    subtitle: "Personal Project • Showcase Site",
    description: "Created a responsive portfolio experience with React, TypeScript, and Tailwind CSS to present professional work, projects, and contact details.",
    tech: ["React.js", "Tailwind CSS", "TypeScript", "Vite"],
    gradient: "from-purple-500/20 to-blue-500/20",
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
            Highlights from RapidHire, Revalsys, and personal projects across backend systems, automation, and modern web apps
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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