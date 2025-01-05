import { motion } from "framer-motion";

const projects = [
  {
    "title": "Todo App",
    "description": "A todo app where you can create and delete tasks. The database used is DynamoDB.",
    "image": "/placeholder.svg"
  }
  ,
  {
    "title": "Weather App",
    "description": "A weather application that provides up-to-date weather information using the OpenWeather API.",
    "image": "/placeholder.svg"
  },
  
  {
    "title": "Currency Converter App",
    "description": "A user-friendly application for converting currencies in real-time, utilizing the latest exchange rates.",
    "image": "/placeholder.svg"
  }
  
];

export function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}