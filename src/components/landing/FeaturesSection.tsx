import { motion } from "framer-motion";
import { Ruler, Brain, Shield, Users, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Precision",
    description: "Our computer vision AI captures 15+ measurements with 98.5% accuracy. Trained on diverse Indian body types.",
    highlight: "98.5% Accuracy",
  },
  {
    icon: Ruler,
    title: "Blouse-Specific Measurements",
    description: "Shoulder slope, armhole depth, bust fit, back neck depth - every detail that matters for the perfect blouse.",
    highlight: "15+ Measurements",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your photos are processed instantly and deleted. We only store measurements, never images. DPDP compliant.",
    highlight: "Zero Image Storage",
  },
  {
    icon: Sparkles,
    title: "Fit Visualization",
    description: "See how your blouse will fit before ordering. Get AI-powered warnings about potential fit issues.",
    highlight: "Visual Preview",
  },
  {
    icon: Clock,
    title: "30-Second Scan",
    description: "No appointments, no tape measures. Get accurate measurements in under 30 seconds from home.",
    highlight: "< 30 Seconds",
  },
  {
    icon: Users,
    title: "Expert Tailors",
    description: "Partner network of verified tailors across India. Real craftsmanship meets AI precision.",
    highlight: "500+ Tailors",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Riva AI
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for <span className="text-gradient-gold">Every Body</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Traditional measurements miss the nuances. Our AI understands Indian body types 
            and captures what really matters for ethnic wear.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 border border-border hover:border-gold/30 hover:shadow-gold transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-charcoal" />
                </div>

                {/* Highlight Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                  {feature.highlight}
                </span>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
