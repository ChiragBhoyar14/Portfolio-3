import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gradient">Let's Work Together</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Open to new opportunities in .NET, cloud, and backend development. Feel free to connect for projects, collaborations, or hiring.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-3 mb-12"
        >
          <a
            href="mailto:chiragbhoyar@gmail.com"
            className="group flex flex-col items-center p-6 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
          >
            <div className="p-4 bg-gradient-primary rounded-xl mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-muted-foreground text-sm mb-1">Email</span>
            <span className="text-foreground font-medium text-center break-all">chiragbhoyar@gmail.com</span>
          </a>

          <a
            href="tel:+919834194933"
            className="group flex flex-col items-center p-6 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
          >
            <div className="p-4 bg-gradient-primary rounded-xl mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-muted-foreground text-sm mb-1">Phone</span>
            <span className="text-foreground font-medium">+91-9834194933</span>
          </a>

          <div className="group flex flex-col items-center p-6 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500">
            <div className="p-4 bg-gradient-primary rounded-xl mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-muted-foreground text-sm mb-1">Location</span>
            <span className="text-foreground font-medium">SR Nagar, Hyderabad, India</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="mailto:chiragbhoyar@gmail.com?subject=Hello%20Chirag!"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold text-lg rounded-xl shadow-glow hover:shadow-float transition-all duration-300 hover:-translate-y-1"
          >
            <Send className="w-5 h-5" />
            Send Me a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;