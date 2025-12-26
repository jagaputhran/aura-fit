import { motion } from "framer-motion";
import { BlouseMeasurements } from "@/types/measurements";

interface BodyVisualizationProps {
  measurements: BlouseMeasurements;
}

export function BodyVisualization({ measurements }: BodyVisualizationProps) {
  const getConfidenceColor = (score: number) => {
    if (score >= 90) return "text-accent";
    if (score >= 75) return "text-secondary";
    return "text-destructive";
  };

  const getConfidenceBg = (score: number) => {
    if (score >= 90) return "bg-accent";
    if (score >= 75) return "bg-secondary";
    return "bg-destructive";
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* SVG Body Outline */}
      <svg
        viewBox="0 0 200 400"
        className="w-full h-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Head */}
        <ellipse cx="100" cy="35" rx="25" ry="30" className="stroke-muted-foreground/40" />
        
        {/* Neck */}
        <path d="M92 65 L92 80 L108 80 L108 65" className="stroke-muted-foreground/40" />
        
        {/* Shoulders */}
        <path
          d="M55 95 Q75 85 92 85 L108 85 Q125 85 145 95"
          className="stroke-primary"
          strokeWidth="2"
        />
        
        {/* Torso outline */}
        <path
          d="M55 95 L50 140 L48 190 L55 240 L70 280 L100 285 L130 280 L145 240 L152 190 L150 140 L145 95"
          className="stroke-primary"
          strokeWidth="2"
        />
        
        {/* Bust line */}
        <path
          d="M55 130 Q75 140 100 140 Q125 140 145 130"
          className="stroke-gold"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        
        {/* Waist line */}
        <path
          d="M60 190 Q80 200 100 200 Q120 200 140 190"
          className="stroke-gold"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        
        {/* Arms */}
        <path
          d="M55 95 L40 130 L35 180 L30 240"
          className="stroke-muted-foreground/40"
          strokeWidth="1.5"
        />
        <path
          d="M145 95 L160 130 L165 180 L170 240"
          className="stroke-muted-foreground/40"
          strokeWidth="1.5"
        />

        {/* Measurement annotation points */}
        {/* Shoulder Width */}
        <line x1="55" y1="92" x2="145" y2="92" className="stroke-accent" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="55" cy="92" r="3" className="fill-accent" />
        <circle cx="145" cy="92" r="3" className="fill-accent" />
        
        {/* Bust */}
        <circle cx="48" cy="130" r="3" className="fill-gold" />
        <circle cx="152" cy="130" r="3" className="fill-gold" />
        
        {/* Waist */}
        <circle cx="56" cy="195" r="3" className="fill-gold" />
        <circle cx="144" cy="195" r="3" className="fill-gold" />
      </svg>

      {/* Measurement Labels */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-[20%] -left-4 bg-card rounded-lg p-3 shadow-medium border border-border"
      >
        <p className="text-xs text-muted-foreground">Shoulder</p>
        <p className="text-sm font-semibold text-foreground">
          {measurements.shoulderWidth.value} {measurements.shoulderWidth.unit}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <div className={`w-2 h-2 rounded-full ${getConfidenceBg(measurements.shoulderWidth.confidenceScore)}`} />
          <span className={`text-xs ${getConfidenceColor(measurements.shoulderWidth.confidenceScore)}`}>
            {measurements.shoulderWidth.confidenceScore}%
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-[30%] -right-4 bg-card rounded-lg p-3 shadow-medium border border-border"
      >
        <p className="text-xs text-muted-foreground">Bust</p>
        <p className="text-sm font-semibold text-foreground">
          {measurements.bustCircumference.value} {measurements.bustCircumference.unit}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <div className={`w-2 h-2 rounded-full ${getConfidenceBg(measurements.bustCircumference.confidenceScore)}`} />
          <span className={`text-xs ${getConfidenceColor(measurements.bustCircumference.confidenceScore)}`}>
            {measurements.bustCircumference.confidenceScore}%
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-[45%] -left-4 bg-card rounded-lg p-3 shadow-medium border border-border"
      >
        <p className="text-xs text-muted-foreground">Waist</p>
        <p className="text-sm font-semibold text-foreground">
          {measurements.waistCircumference.value} {measurements.waistCircumference.unit}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <div className={`w-2 h-2 rounded-full ${getConfidenceBg(measurements.waistCircumference.confidenceScore)}`} />
          <span className={`text-xs ${getConfidenceColor(measurements.waistCircumference.confidenceScore)}`}>
            {measurements.waistCircumference.confidenceScore}%
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute top-[55%] -right-4 bg-card rounded-lg p-3 shadow-medium border border-border"
      >
        <p className="text-xs text-muted-foreground">Armhole</p>
        <p className="text-sm font-semibold text-foreground">
          {measurements.armholeDepth.value} {measurements.armholeDepth.unit}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <div className={`w-2 h-2 rounded-full ${getConfidenceBg(measurements.armholeDepth.confidenceScore)}`} />
          <span className={`text-xs ${getConfidenceColor(measurements.armholeDepth.confidenceScore)}`}>
            {measurements.armholeDepth.confidenceScore}%
          </span>
        </div>
      </motion.div>
    </div>
  );
}
