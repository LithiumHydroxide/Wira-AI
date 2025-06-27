import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Shield, Headphones, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  profession: string;
  experience: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    profession: "",
    experience: ""
  });

  const { toast } = useToast();

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your free trial request has been submitted. Check your email for next steps.",
      });
      setFormData({ name: "", email: "", profession: "", experience: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.profession || !formData.experience) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefits = [
    {
      icon: Rocket,
      title: "Quick Setup",
      description: "Get started in less than 5 minutes",
      color: "kenyan-orange"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security",
      color: "kenyan-green"  
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help whenever you need it from our expert team",
      color: "kenyan-gold"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your
              <span className="kenyan-orange"> Success Journey?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of Kenyan professionals who have transformed their careers with our AI-powered platform. Start your free trial today!
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 bg-[var(--${benefit.color})]/10 rounded-xl flex items-center justify-center`}>
                    <benefit.icon className={benefit.color} size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Start Your Free Trial</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-[var(--kenyan-orange)] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-[var(--kenyan-orange)] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Profession
                    </Label>
                    <Select value={formData.profession} onValueChange={(value) => handleInputChange("profession", value)}>
                      <SelectTrigger className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-[var(--kenyan-orange)]">
                        <SelectValue placeholder="Select your profession" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software-developer">Software Developer</SelectItem>
                        <SelectItem value="marketing-professional">Marketing Professional</SelectItem>
                        <SelectItem value="financial-analyst">Financial Analyst</SelectItem>
                        <SelectItem value="sales-representative">Sales Representative</SelectItem>
                        <SelectItem value="hr-professional">HR Professional</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience
                    </Label>
                    <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-[var(--kenyan-orange)]">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={submitContactForm.isPending}
                    className="w-full bg-kenyan-orange text-white hover:bg-kenyan-amber py-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {submitContactForm.isPending ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Rocket className="mr-2" size={20} />
                        Start Free Trial
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    No credit card required. Cancel anytime.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
