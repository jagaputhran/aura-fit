import { motion } from "framer-motion";

const sareeTypes = [
  {
    name: "Banarasi Silk",
    description: "Rich zari work for weddings & festivals",
    gradient: "from-amber-600 to-amber-800",
  },
  {
    name: "Kanjeevaram",
    description: "Temple-inspired South Indian heritage",
    gradient: "from-rose-600 to-rose-800",
  },
  {
    name: "Chiffon",
    description: "Lightweight elegance for parties",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    name: "Cotton",
    description: "Daily comfort with ethnic charm",
    gradient: "from-emerald-500 to-emerald-700",
  },
];

const blouseStyles = [
  "Round Neck",
  "Boat Neck",
  "Deep V",
  "High Collar",
  "Halter",
  "Sweetheart",
  "Princess Cut",
  "Designer Back",
];

export function UseCasesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            For Every Occasion
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sarees, Blouses & <span className="text-gradient-burgundy">Lehengas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From daily wear to bridal couture. Perfect fit for every fabric, every style, every celebration.
          </p>
        </motion.div>

        {/* Saree Types Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sareeTypes.map((saree, index) => (
            <motion.div
              key={saree.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${saree.gradient} p-6 flex flex-col justify-end relative overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                {/* Pattern Overlay */}
                <div className="absolute inset-0 pattern-overlay opacity-20" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                    {saree.name}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {saree.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blouse Styles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 border border-border"
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Blouse Styles We Support
            </h3>
            <p className="text-muted-foreground">
              Choose from 20+ necklines, backs, and sleeve designs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {blouseStyles.map((style) => (
              <span
                key={style}
                className="px-4 py-2 rounded-full bg-gold/10 text-foreground text-sm font-medium border border-gold/30 hover:bg-gold/20 transition-colors cursor-pointer"
              >
                {style}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
