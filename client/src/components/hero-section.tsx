import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useCounter } from "@/hooks/use-counter";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  const jobsMatched = useCounter({ target: 5000, isVisible });
  const successStories = useCounter({ target: 2500, isVisible });
  const atsPassRate = useCounter({ target: 98, isVisible });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingElements = [
    { size: "w-20 h-20", position: "top-20 left-10", delay: 0, color: "bg-kenyan-gold/20" },
    { size: "w-16 h-16", position: "top-40 right-20", delay: -2, color: "bg-kenyan-orange/20" },
    { size: "w-12 h-12", position: "bottom-40 left-20", delay: -4, color: "bg-kenyan-emerald/20" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--kenyan-green)]/5 to-[var(--kenyan-orange)]/5">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--kenyan-green)]/10 to-[var(--kenyan-orange)]/10"></div>
      
      {/* Floating background elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} ${element.color} rounded-full`}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your AI-Powered
              <span className="kenyan-orange"> Career Partner</span>
              <br />
              in Kenya
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              From perfect resumes to dream jobs - let our AI transform your career journey with personalized coaching, smart matching, and automated applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={onGetStarted}
                className="bg-kenyan-orange text-white hover:bg-kenyan-amber transition-all duration-300 transform hover:scale-105 shadow-lg text-lg px-8 py-6 rounded-full"
              >
                <Rocket className="mr-2" size={20} />
                Start Your Journey
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[var(--kenyan-green)] kenyan-green hover:bg-kenyan-green hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-full"
              >
                <Play className="mr-2" size={20} />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold kenyan-orange">
                  {jobsMatched.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Jobs Matched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold kenyan-green">
                  {successStories.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold kenyan-gold">
                  {atsPassRate}%
                </div>
                <div className="text-sm text-gray-600">ATS Pass Rate</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="African professionals collaborating with technology" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-all duration-500" 
            />
            
            {/* Floating cards */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-kenyan-emerald rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">98% ATS Pass Rate</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: -3,
              }}
              className="absolute -bottom-6 -right-6 bg-kenyan-orange text-white p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center space-x-2">
                <Rocket size={16} />
                <span className="text-sm font-semibold">5,000+ Jobs Matched</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
