import { motion } from "framer-motion";
import { Code2, Database, Globe, LineChart, Cpu, Monitor } from "lucide-react";

export function Skills() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, HTML5, CSS3, JavaScript, Tailwind CSS",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, SQL, MongoDB, DynamoDB",
    },
    {
      icon: Monitor,
      title: "Other Programming Languages",
      description: "C#, PHP, C++, Python",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "RESTful APIs, WebSockets",
    },
    {
      icon: Cpu,
      title: "DevOps",
      description: "Git, AWS, Vercel, Netlify",
    },
    {
      icon: LineChart,
      title: "Analytics",
      description: "Data Visualization, Performance Optimization",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
