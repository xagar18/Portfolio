import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Message sent!");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <form
          className="glass p-8 rounded-2xl space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-background/50"
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-background/50"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-background/50 min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
