import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/xagar18", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/xagar", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/xagarr18", label: "Twitter" },
    { icon: Mail, href: "mailto:sagaryadav6352@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto glass rounded-2xl p-8"
      >
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:scale-110 transition-transform duration-300"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          <p className="text-muted-foreground text-sm">
          Passionately created with ❤️ by Sagar.
          </p>

        </div>
      </motion.div>
    </footer>
  );
}