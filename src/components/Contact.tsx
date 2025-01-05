import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <form className="glass p-8 rounded-2xl space-y-6">
          <div>
            <Input
              placeholder="Your Name"
              className="bg-background/50"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-background/50"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              className="bg-background/50 min-h-[150px]"
            />
          </div>
          <Button className="w-full">Send Message</Button>
        </form>
      </motion.div>
    </section>
  );
}