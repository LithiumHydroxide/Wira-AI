import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, Bot, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Smart Resume Builder",
      description: "AI-powered resume optimization that ensures 98% ATS compatibility and highlights your unique strengths.",
      color: "kenyan-orange",
      bgColor: "bg-[var(--kenyan-orange)]/10"
    },
    {
      icon: Search,
      title: "Intelligent Job Matching",
      description: "Advanced algorithms match you with opportunities that align with your skills, experience, and career goals.",
      color: "kenyan-green",
      bgColor: "bg-[var(--kenyan-green)]/10"
    },
    {
      icon: Bot,
      title: "AI Interview Coach",
      description: "Practice with our AI coach, get real-time feedback, and boost your confidence for any interview.",
      color: "kenyan-gold",
      bgColor: "bg-[var(--kenyan-gold)]/10"
    }
  ];

  const techFeatures = [
    "Natural Language Processing",
    "Machine Learning",
    "Predictive Analytics",
    "Real-time Optimization"
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powered by AI, Built for
            <span className="kenyan-orange"> Kenyan Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive AI platform understands the Kenyan job market and empowers you with intelligent tools for every step of your career journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--${feature.color})] group-hover:text-white transition-all duration-300`}>
                    <feature.icon size={32} className={`${feature.color} group-hover:text-white`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <button className={`${feature.color} font-semibold hover:opacity-80 transition-colors`}>
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--kenyan-green)] to-[var(--kenyan-orange)] rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Built with Cutting-Edge AI Technology</h3>
              <p className="text-lg mb-8 text-white/90">
                Our platform leverages advanced natural language processing, machine learning algorithms, and deep industry insights to provide you with personalized career guidance that works.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {techFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <CheckCircle className="kenyan-gold" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern African tech startup office with diverse team collaborating" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
