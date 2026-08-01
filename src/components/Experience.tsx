import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
const experiences = [
  {
    title: "Sr .NET Developer",
    company: "TheRapidHire Pvt Ltd",
    location: "Indore, India",
    period: "Dec 2024 – Present",
    summary:
      "Leading cloud-native content and notice generation services with .NET 8, Elasticsearch, Cosmos DB, Azure Event Hubs, and AKS.",
    highlights: [
      "Built content access and entitlement services for publications, books, alerts, and multimedia content.",
      "Developed multi-tenant insurance notice generation APIs with PostgreSQL, EF Core 8, Auth0, and OpenTelemetry.",
      "Implemented tenant isolation using EF Core global filters, save changes interceptors, and a transactional outbox pattern.",
      "Delivered asynchronous PDF generation workflows with SignalR, Scriban templates, IronPDF, and Azure Blob Storage",
      "Automated database migrations and CI/CD deployments while improving observability with Prometheus, Serilog, and New Relic.",
    ],
  },
  {
    title: "Jr Software Developer",
    company: "Revalsys Technology",
    location: "Hyderabad, India",
    period: "Sep 2023 – Nov 2024",
    summary:
      "Developed scalable ASP.NET applications and backend services while improving database performance and maintainability.",
    highlights: [
      "Built web applications using ASP.NET, ADO.NET, and Web API to improve performance and user experience.",
      "Created Windows Services to automate bill processing, reducing manual effort and operational risk.",
      "Improved SQL queries, stored procedures, and database speed while updating UI based on client requirements.",
      "Implemented dependency injection and factory design patterns for maintainable, scalable code.",
      "Collaborated with teams on agile sprints using Jira and delivered robust solutions aligned with business needs.",
    ],
  },
];

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "Manipal University, Sikkim",
    period: "2025 – Present",
  },
  {
    title: "Bachelor of Science",
    institution: "Anand Niketan College, Anandwan",
    period: "2019 – 2022",
  },
];

const Experience = () => {
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

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
          <div className="space-y-10 relative">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card">
                  <div className="absolute -left-[3.25rem] top-8 w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{experience.title}</h3>
                      <p className="text-lg text-primary font-medium">{experience.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{experience.location}</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="font-mono text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{experience.summary}</p>

                  <div className="space-y-3">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: highlightIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-foreground/90">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-primary mt-1">{item.institution}</p>
                <p className="text-muted-foreground font-mono text-sm mt-2">{item.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;