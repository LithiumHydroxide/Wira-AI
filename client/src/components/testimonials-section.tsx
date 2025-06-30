import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useCounter } from "@/hooks/use-counter";
import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  const placements = useCounter({ target: 5000, isVisible });
  const passRate = useCounter({ target: 98, isVisible });
  const timeToJob = useCounter({ target: 3, isVisible });
  const salaryIncrease = useCounter({ target: 85, isVisible });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Software Engineer at Safaricom",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&face",
      testimonial: "Wira AI Jobs helped me land my dream job at Safaricom! The ATS checker improved my resume score from 65% to 98%, and the interview coaching gave me the confidence I needed."
    },
    {
      name: "James Mwangi",
      role: "Financial Analyst at KCB Bank",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&face",
      testimonial: "The bulk apply feature saved me hours of work. I applied to 50 relevant positions in one day, and got 12 interview calls within a week. Incredible efficiency!"
    },
    {
      name: "Grace Akinyi",
      role: "Marketing Manager at Equity Bank",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&face",
      testimonial: "From unemployed to my dream job in 3 weeks! The job matching algorithm found opportunities I would never have discovered on my own. Life-changing!"
    }
  ];

  const metrics = [
    { value: placements, label: "Successful Job Placements", color: "kenyan-orange" },
    { value: passRate, label: "ATS Pass Rate", suffix: "%", color: "kenyan-green" },
    { value: timeToJob, label: "Average Time to Job", suffix: " weeks", color: "kenyan-gold" },
    { value: salaryIncrease, label: "Salary Increase Rate", suffix: "%", color: "kenyan-amber" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[var(--kenyan-green)]/5 to-[var(--kenyan-orange)]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories from
            <span className="kenyan-orange"> Kenyan Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real results. See how our AI platform has transformed careers across Kenya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
                  <div className="flex kenyan-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h3>
            <p className="text-gray-600">Real results from real professionals across Kenya</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                  {metric.value.toLocaleString()}{metric.suffix || ""}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
