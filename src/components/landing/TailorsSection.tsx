import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Download, MessageCircle, TrendingUp, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Download,
    title: "Digital Cutting Patterns",
    description: "Download precise PDF/DXF patterns for each order. No more guesswork.",
  },
  {
    icon: TrendingUp,
    title: "AI Fit Recommendations",
    description: "Get fabric-specific fit adjustments based on customer preferences.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Receive orders and communicate with customers via WhatsApp.",
  },
  {
    icon: Store,
    title: "Grow Your Business",
    description: "Access customers across India. Build your reputation with verified reviews.",
  },
];

export function TailorsSection() {
  return (
    <section id="tailors" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              For Tailors & Boutiques
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-6">
              Partner with <span className="text-gold">VastraAI</span>
            </h2>
            <p className="text-ivory/70 text-lg leading-relaxed mb-8">
              Join our network of expert tailors. Receive pre-measured orders with 
              AI-generated cutting patterns. Focus on your craft, we handle the measurements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/tailor-dashboard">
                <Button variant="gold" size="lg" className="group">
                  <span>Join as Tailor</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="elegant" size="lg">
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-ivory/60 text-sm">
              <span>✓ No joining fee</span>
              <span>✓ 500+ tailors onboarded</span>
            </div>
          </motion.div>

          {/* Right Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-ivory/5 backdrop-blur-sm rounded-2xl p-6 border border-ivory/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ivory mb-2">
                  {benefit.title}
                </h3>
                <p className="text-ivory/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
