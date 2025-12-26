import { useState } from "react";
import { motion } from "framer-motion";
import { FitPreference } from "@/types/measurements";
import { cn } from "@/lib/utils";

interface FitPreferenceSelectorProps {
  preferences: FitPreference[];
  onUpdate: (preferences: FitPreference[]) => void;
}

const fitOptions = [
  { value: "tight", label: "Tight", description: "Body-hugging fit" },
  { value: "comfort", label: "Comfort", description: "Relaxed everyday fit" },
  { value: "loose", label: "Loose", description: "Extra room" },
  { value: "festive", label: "Festive", description: "Elegant occasion fit" },
] as const;

export function FitPreferenceSelector({ preferences, onUpdate }: FitPreferenceSelectorProps) {
  const [localPreferences, setLocalPreferences] = useState(preferences);

  const handleChange = (prefId: string, value: FitPreference["value"]) => {
    const updated = localPreferences.map((pref) =>
      pref.id === prefId ? { ...pref, value } : pref
    );
    setLocalPreferences(updated);
    onUpdate(updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          Fit Preferences
        </h3>
        <p className="text-muted-foreground text-sm">
          Customize how you'd like your blouse to fit. These preferences adjust the final pattern.
        </p>
      </div>

      {localPreferences.map((pref, index) => (
        <motion.div
          key={pref.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-xl p-5 border border-border"
        >
          <div className="mb-4">
            <h4 className="font-medium text-foreground">{pref.name}</h4>
            <p className="text-sm text-muted-foreground">{pref.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {fitOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleChange(pref.id, option.value)}
                className={cn(
                  "p-3 rounded-lg border-2 transition-all duration-200 text-left",
                  pref.value === option.value
                    ? "border-gold bg-gold/10"
                    : "border-border hover:border-gold/50"
                )}
              >
                <p className={cn(
                  "font-medium text-sm",
                  pref.value === option.value ? "text-gold" : "text-foreground"
                )}>
                  {option.label}
                </p>
                <p className="text-xs text-muted-foreground">{option.description}</p>
              </button>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
