import { motion } from "framer-motion";
import { FaGlobe, FaGithub } from "react-icons/fa";  // Importing icons

const projects = [
  {
    "title": "Todo App",
    "description": "A todo app where you can create and delete tasks. The database used is DynamoDB.",
    "image": "/todoImg.png",
    "website": "https://sagaryadav-todo.netlify.app/",
    "github": "https://github.com/xagar18/TODO-APP"
  }
  ,
  {
    "title": "Weather App",
    "description": "A weather application that provides up-to-date weather information using the OpenWeather API.",
    "image": "/weatherImg.png",
    "website": "#",
    "github": "https://github.com/xagar18/Weather-App"
  },
  
  {
    "title": "Currency Converter App",
    "description": "A user-friendly application for converting currencies in real-time, utilizing the latest exchange rates.",
    "image": "/currencyImg.png",
    "website": "#",
    "github": "https://github.com/xagar18/Currency-Convertor"
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
              <div className="flex justify-between mt-4">
                <a 
                  href={project.website} 
                  className="btn flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  <FaGlobe className="mr-2" />
                  Website
                </a>
                <a 
                  href={project.github} 
                  className="btn flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
