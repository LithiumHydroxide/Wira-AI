import { Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const services = [
    "Resume ATS Checker",
    "Job Matching", 
    "Cover Letter Generator",
    "Interview Coaching",
    "Application Tracking",
    "Bulk Apply"
  ];

  const company = [
    "About Us",
    "Careers", 
    "Contact",
    "Privacy Policy",
    "Terms of Service"
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-instagram", href: "#" }
  ];

  return (
    <footer className="bg-kenyan-green text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <div className="text-3xl font-bold mb-4 flex items-center">
              <Brain className="kenyan-orange mr-2" size={32} />
              KenyaAI Jobs
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Empowering Kenyan professionals with AI-powered career tools. From resume optimization to dream job placements.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-kenyan-orange transition-colors duration-300"
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-[var(--kenyan-orange)] transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[var(--kenyan-orange)] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm">
            © 2024 KenyaAI Jobs. All rights reserved. Made with ❤️ in Kenya.
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Proudly serving Kenyan professionals nationwide.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
