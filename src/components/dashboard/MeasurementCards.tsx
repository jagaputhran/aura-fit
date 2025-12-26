import { motion } from "framer-motion";
import { BlouseMeasurements } from "@/types/measurements";
import { AlertTriangle, CheckCircle } from "lucide-react";

interface MeasurementCardProps {
  measurements: BlouseMeasurements;
}

export function MeasurementCards({ measurements }: MeasurementCardProps) {
  const measurementList = Object.values(measurements);

  const getConfidenceColor = (score: number) => {
    if (score >= 90) return "bg-accent";
    if (score >= 75) return "bg-secondary";
    return "bg-destructive";
  };

  const getConfidenceText = (score: number) => {
    if (score >= 90) return "High";
    if (score >= 75) return "Medium";
    return "Low";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-xl font-semibold text-foreground">
          All Measurements
        </h3>
        <span className="text-sm text-muted-foreground">
          {measurementList.length} captured
        </span>
      </div>

      <div className="grid gap-3">
        {measurementList.map((measurement, index) => (
          <motion.div
            key={measurement.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-8 rounded-full ${getConfidenceColor(measurement.confidenceScore)}`} />
              <div>
                <p className="font-medium text-foreground">{measurement.name}</p>
                <p className="text-xs text-muted-foreground">
                  Confidence: {getConfidenceText(measurement.confidenceScore)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-foreground">
                {measurement.value} <span className="text-sm text-muted-foreground">{measurement.unit}</span>
              </p>
              <div className="flex items-center gap-1 justify-end">
                {measurement.confidenceScore >= 85 ? (
                  <CheckCircle className="w-3 h-3 text-accent" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-secondary" />
                )}
                <span className="text-xs text-muted-foreground">{measurement.confidenceScore}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
