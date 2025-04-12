import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} 
        className="text-center z-10 px-4"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-muted-foreground mb-4 tracking-wider uppercase"
        >
          Hi there, I'm 
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold md:h-20 h-11 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
        >
          Sagar Yadav
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Passionate about crafting digital experiences that combine clean code with elegant design. 
          Specializing in modern web technologies and creative solutions.
        </motion.p>
        
        <div className="flex justify-center gap-4">
          <motion.a
            href="/Sagar Resume.pdf" 
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-primary/10 transition-colors duration-300"
          >
            <FileText className="w-4 h-4" />
            Download CV
          </motion.a>
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-primary/10 transition-colors duration-300"
          >
            Dive In
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </div>
      </motion.div>
      
      <div className="absolute inset-0 animated-bg -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
