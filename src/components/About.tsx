import { motion } from "framer-motion";
import { Code2, Palette, Lightbulb } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code that follows best practices"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Finding innovative solutions to complex challenges"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="glass p-8 rounded-2xl mb-12">
          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate developer focused on creating beautiful and functional web experiences. 
            With a keen eye for design and a love for clean code, I bring ideas to life through modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}