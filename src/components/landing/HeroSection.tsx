import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Smartphone, Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Gold Accent Circle */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground">AI-Powered Precision</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Perfectly Fitted</span>
              <br />
              <span className="text-gradient-burgundy">Saree Blouses</span>
              <br />
              <span className="text-foreground">Using </span>
              <span className="text-gradient-gold">AI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              No more ill-fitting blouses. Our AI captures 15+ body measurements from just 2 photos. 
              Get custom-fitted ethnic wear made for <em>your</em> body.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="group">
                  <Smartphone className="w-5 h-5" />
                  <span>Scan with App</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="hero-outline" size="xl">
                  See How It Works
                </Button>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Privacy-First</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span>Made for Indian Bodies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>10,000+ Happy Customers</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Phone Mockup Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 md:w-72 lg:w-80">
                  {/* Phone Frame */}
                  <div className="relative bg-charcoal rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-gradient-warm rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                      {/* Phone Screen Content */}
                      <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                          <Smartphone className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                          Riva AI App
                        </h3>
                        <p className="text-sm text-charcoal/70 mb-4">
                          Take 2 photos to get your perfect measurements
                        </p>
                        <div className="space-y-2 w-full">
                          <div className="flex items-center justify-between px-3 py-2 bg-card rounded-lg">
                            <span className="text-xs text-charcoal/80">Bust</span>
                            <span className="text-xs font-semibold text-primary">91 cm</span>
                          </div>
                          <div className="flex items-center justify-between px-3 py-2 bg-card rounded-lg">
                            <span className="text-xs text-charcoal/80">Shoulder</span>
                            <span className="text-xs font-semibold text-primary">38 cm</span>
                          </div>
                          <div className="flex items-center justify-between px-3 py-2 bg-card rounded-lg">
                            <span className="text-xs text-charcoal/80">Waist</span>
                            <span className="text-xs font-semibold text-primary">71 cm</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-xs text-charcoal/70">95% Confidence</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-8 -right-8 bg-card p-4 rounded-2xl shadow-medium border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">AI Accuracy</p>
                        <p className="text-lg font-display font-bold text-foreground">98.5%</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute -bottom-4 -left-8 bg-card p-4 rounded-2xl shadow-medium border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="text-lg">👗</span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Perfect Fit</p>
                        <p className="text-lg font-display font-bold text-gold">Guaranteed</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
