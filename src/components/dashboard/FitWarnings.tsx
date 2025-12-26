import { motion } from "framer-motion";
import { BlouseMeasurements } from "@/types/measurements";
import { AlertTriangle, Info } from "lucide-react";

interface FitWarning {
  type: "warning" | "info";
  title: string;
  description: string;
  measurement: string;
}

interface FitWarningsProps {
  measurements: BlouseMeasurements;
}

export function FitWarnings({ measurements }: FitWarningsProps) {
  // Generate warnings based on measurements
  const warnings: FitWarning[] = [];

  if (measurements.armholeDepth.confidenceScore < 85) {
    warnings.push({
      type: "warning",
      title: "Armhole Measurement",
      description: "The armhole depth has lower confidence. For silk sarees, consider adding 0.5cm for comfort.",
      measurement: "armholeDepth",
    });
  }

  if (measurements.shoulderSlope.value > 25) {
    warnings.push({
      type: "info",
      title: "Shoulder Slope Adjustment",
      description: "Your shoulder slope is higher than average. We'll adjust the pattern for a better fit.",
      measurement: "shoulderSlope",
    });
  }

  if (measurements.bustCircumference.value - measurements.underbustCircumference.value > 18) {
    warnings.push({
      type: "info",
      title: "Bust Fit Recommendation",
      description: "For a comfortable fit, we recommend the 'Comfort' fit preference for daily wear.",
      measurement: "bustCircumference",
    });
  }

  if (warnings.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-accent/10 rounded-xl p-6 border border-accent/20"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <span className="text-lg">✓</span>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-1">
              All Measurements Look Great!
            </h4>
            <p className="text-muted-foreground text-sm">
              Your measurements have high confidence scores. You're ready to customize your blouse style.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-semibold text-foreground">
        Fit Recommendations
      </h3>
      
      {warnings.map((warning, index) => (
        <motion.div
          key={warning.measurement}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`rounded-xl p-4 border ${
            warning.type === "warning"
              ? "bg-secondary/10 border-secondary/30"
              : "bg-accent/10 border-accent/20"
          }`}
        >
          <div className="flex items-start gap-3">
            {warning.type === "warning" ? (
              <AlertTriangle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            )}
            <div>
              <h4 className="font-medium text-foreground mb-1">{warning.title}</h4>
              <p className="text-muted-foreground text-sm">{warning.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
