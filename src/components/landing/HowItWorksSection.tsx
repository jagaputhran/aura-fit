import { motion } from "framer-motion";
import { Smartphone, Scan, Sparkles, Scissors, Package } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Download the App",
    description: "Get the VastraAI app on your phone. Available on iOS and Android.",
    color: "gold",
  },
  {
    icon: Scan,
    title: "Take 2 Photos",
    description: "Stand in front of your camera. Our AI guides you for perfect captures.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "AI Extracts Measurements",
    description: "15+ precise measurements extracted in under 30 seconds. Your photos are deleted instantly.",
    color: "accent",
  },
  {
    icon: Scissors,
    title: "Choose Your Style",
    description: "Select saree type, blouse design, and fit preferences on the website.",
    color: "burgundy",
  },
  {
    icon: Package,
    title: "Perfect Fit Delivered",
    description: "Expert tailors craft your blouse. Delivered to your doorstep.",
    color: "gold",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How VastraAI Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From scanning to delivery, get your perfect-fitting blouse in 5 simple steps. 
            No tape measures, no guesswork.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold/20 via-primary/20 to-gold/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 border-gold flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-gold">{index + 1}</span>
                </div>

                {/* Card */}
                <div className="bg-card rounded-2xl p-6 pt-8 shadow-soft border border-border group-hover:shadow-medium group-hover:border-gold/30 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    step.color === 'gold' ? 'bg-gold/10' :
                    step.color === 'primary' ? 'bg-primary/10' :
                    step.color === 'accent' ? 'bg-accent/10' :
                    'bg-burgundy/10'
                  }`}>
                    <step.icon className={`w-7 h-7 ${
                      step.color === 'gold' ? 'text-gold' :
                      step.color === 'primary' ? 'text-primary' :
                      step.color === 'accent' ? 'text-accent' :
                      'text-burgundy'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
