import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onGetStarted: () => void;
}

export default function Navigation({ onGetStarted }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Services", id: "services" },
    { label: "Stories", id: "testimonials" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold kenyan-green flex items-center">
              <Brain className="kenyan-orange mr-2" size={32} />
              Wira AI 
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-[var(--kenyan-orange)] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={onGetStarted}
              className="bg-kenyan-orange text-white hover:bg-kenyan-amber transition-all duration-300 transform hover:scale-105 rounded-full"
            >
              Get Started Free
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[var(--kenyan-orange)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[var(--kenyan-orange)]"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onGetStarted();
                  setIsOpen(false);
                }}
                className="w-full bg-kenyan-orange text-white hover:bg-kenyan-amber rounded-lg mt-2"
              >
                Get Started Free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
