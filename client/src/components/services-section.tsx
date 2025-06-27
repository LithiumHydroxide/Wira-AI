import { Button } from "@/components/ui/button";
import { 
  SearchCheck, 
  Target, 
  PenTool, 
  UserCheck, 
  TrendingUp, 
  Send,
  ArrowRight,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: SearchCheck,
      title: "Resume ATS Checker",
      description: "Ensure your resume passes through Applicant Tracking Systems with our advanced ATS optimization tool. Get detailed feedback and suggestions for improvement.",
      tags: ["98% Success Rate", "Real-time Analysis", "Industry-Specific"],
      color: "kenyan-orange",
      bgGradient: "from-[var(--kenyan-orange)]/5 to-[var(--kenyan-orange)]/10",
      action: "Try ATS Checker"
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "Our AI analyzes thousands of job postings daily to find opportunities that perfectly match your skills, experience, and career aspirations.",
      tags: ["5000+ Jobs", "Daily Updates", "Perfect Matches"],
      color: "kenyan-green",
      bgGradient: "from-[var(--kenyan-green)]/5 to-[var(--kenyan-green)]/10",
      action: "Find Jobs"
    },
    {
      icon: PenTool,
      title: "Cover Letter Generator",
      description: "Create compelling, personalized cover letters in minutes. Our AI crafts unique letters tailored to each job application and company culture.",
      tags: ["Personalized", "Company Research", "Fast Generation"],
      color: "kenyan-gold",
      bgGradient: "from-[var(--kenyan-gold)]/5 to-[var(--kenyan-gold)]/10",
      action: "Generate Letter"
    },
    {
      icon: UserCheck,
      title: "Interview Coaching & Research",
      description: "Practice with our AI interview coach, get company-specific research, and receive personalized feedback to ace any interview with confidence.",
      tags: ["Mock Interviews", "Company Insights", "Real Feedback"],
      color: "kenyan-amber",
      bgGradient: "from-[var(--kenyan-amber)]/5 to-[var(--kenyan-amber)]/10",
      action: "Start Coaching"
    },
    {
      icon: TrendingUp,
      title: "Application Tracking",
      description: "Never lose track of your applications again. Monitor status, schedule follow-ups, and get insights on your job search progress.",
      tags: ["Status Updates", "Follow-up Alerts", "Analytics"],
      color: "kenyan-emerald",
      bgGradient: "from-[var(--kenyan-emerald)]/5 to-[var(--kenyan-emerald)]/10",
      action: "Track Applications"
    },
    {
      icon: Send,
      title: "Bulk Apply",
      description: "Apply to multiple relevant positions with one click. Our AI ensures each application is customized while saving you hours of manual work.",
      tags: ["One-Click Apply", "Customized Each", "Time Saving"],
      color: "kenyan-earth",
      bgGradient: "from-[var(--kenyan-earth)]/5 to-[var(--kenyan-earth)]/10",
      action: "Bulk Apply"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete AI-Powered
            <span className="kenyan-orange"> Career Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six powerful tools working together to accelerate your career success in Kenya's competitive job market.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`group bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl hover:shadow-2xl transition-all duration-500`}
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-[var(--${service.color})] rounded-2xl flex items-center justify-center transition-transform duration-300`}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 bg-[var(--${service.color})]/20 text-[var(--${service.color})] rounded-full text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className={`${service.color} font-semibold hover:opacity-80 transition-colors flex items-center`}>
                    {service.action} <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h3>
          <p className="text-lg text-gray-600 mb-8">Join thousands of Kenyan professionals who have accelerated their careers with our AI platform.</p>
          <Button className="bg-kenyan-orange text-white hover:bg-kenyan-amber transition-all duration-300 transform hover:scale-105 shadow-lg text-lg px-12 py-6 rounded-full">
            <Rocket className="mr-2" size={20} />
            Get Started Free Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
