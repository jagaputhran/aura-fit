import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Trash2, Eye, Lock, Server, FileCheck } from "lucide-react";

const privacyPoints = [
  {
    icon: Trash2,
    title: "Immediate Image Deletion",
    description: "Your photos are processed in real-time and permanently deleted within seconds. We never store, cache, or retain any images you capture.",
  },
  {
    icon: Eye,
    title: "No Face Storage",
    description: "Our AI focuses only on body measurements. Faces are never detected, stored, or processed. Your identity remains completely private.",
  },
  {
    icon: Lock,
    title: "Encrypted Measurements",
    description: "Your body measurements are encrypted at rest and in transit using AES-256 encryption. Only you and your chosen tailors can access them.",
  },
  {
    icon: Server,
    title: "Data Centers in India",
    description: "All data is processed and stored in secure data centers within India, ensuring compliance with local data protection regulations.",
  },
  {
    icon: FileCheck,
    title: "DPDP & GDPR Compliant",
    description: "We comply with India's Digital Personal Data Protection Act (DPDP) 2023 and EU GDPR standards for maximum privacy protection.",
  },
  {
    icon: Shield,
    title: "Your Data, Your Control",
    description: "Request deletion of all your data at any time. We provide complete data portability and the right to be forgotten.",
  },
];

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Privacy is <span className="text-gradient-gold">Sacred</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We understand that body measurements are deeply personal. That's why we've built Riva AI 
                with privacy at its core - not as an afterthought.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every design decision we make starts with the question: 
                "How does this protect our users' privacy?"
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {privacyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                How We Protect Your Data
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Photo Capture (On Your Device)
                  </h3>
                  <p className="text-muted-foreground">
                    When you take photos, they are temporarily stored only on your device. 
                    The app requests camera access only when needed and never accesses your photo library.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Encrypted Transmission
                  </h3>
                  <p className="text-muted-foreground">
                    Photos are encrypted using TLS 1.3 before being sent to our secure processing servers. 
                    They travel through encrypted channels that prevent interception.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    AI Processing (Measurements Only)
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI extracts only numerical measurements from the images. It does not perform 
                    facial recognition, store body contours, or create any visual representations of your body.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-6 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-charcoal font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Immediate Deletion
                  </h3>
                  <p className="text-muted-foreground">
                    The moment measurements are extracted, your photos are permanently deleted from our servers. 
                    This happens within 30 seconds of upload. No copies, no backups, no traces.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-charcoal">
          <div className="container max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-ivory mb-4">
                Have Privacy Questions?
              </h2>
              <p className="text-ivory/70 mb-6">
                We're committed to transparency. If you have any questions about how we handle your data, 
                please reach out to our Data Protection Officer.
              </p>
              <a
                href="mailto:privacy@riva-ai.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-charcoal font-semibold hover:bg-gold-light transition-colors"
              >
                Contact: privacy@riva-ai.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
