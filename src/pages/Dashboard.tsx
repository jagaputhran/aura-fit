import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { BodyVisualization } from "@/components/dashboard/BodyVisualization";
import { MeasurementCards } from "@/components/dashboard/MeasurementCards";
import { FitWarnings } from "@/components/dashboard/FitWarnings";
import { FitPreferenceSelector } from "@/components/dashboard/FitPreferenceSelector";
import { Button } from "@/components/ui/button";
import { mockMeasurements, mockFitPreferences, FitPreference } from "@/types/measurements";
import { Smartphone, ArrowRight, Download, Settings, ShoppingBag } from "lucide-react";

const Dashboard = () => {
  const [preferences, setPreferences] = useState(mockFitPreferences);
  const [activeTab, setActiveTab] = useState<"overview" | "measurements" | "preferences">("overview");

  const handlePreferencesUpdate = (updated: FitPreference[]) => {
    setPreferences(updated);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Your Measurements
                </h1>
                <p className="text-muted-foreground">
                  Last scanned: <span className="text-foreground">December 20, 2024</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                  Export PDF
                </Button>
                <Button variant="outline" size="sm">
                  <Smartphone className="w-4 h-4" />
                  Rescan
                </Button>
                <Link to="/order">
                  <Button variant="gold" size="sm">
                    <ShoppingBag className="w-4 h-4" />
                    Order Blouse
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {[
              { id: "overview", label: "Overview" },
              { id: "measurements", label: "All Measurements" },
              { id: "preferences", label: "Fit Preferences" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Body Visualization */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Body Map
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm text-muted-foreground">AI Confidence: 92%</span>
                  </div>
                </div>
                <BodyVisualization measurements={mockMeasurements} />
              </motion.div>

              {/* Right: Warnings & Quick Actions */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <FitWarnings measurements={mockMeasurements} />
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-card rounded-xl p-5 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Measurements</p>
                    <p className="font-display text-2xl font-bold text-foreground">
                      {Object.keys(mockMeasurements).length}
                    </p>
                    <p className="text-xs text-accent">All captured</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Avg Confidence</p>
                    <p className="font-display text-2xl font-bold text-foreground">92%</p>
                    <p className="text-xs text-accent">High accuracy</p>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-burgundy rounded-2xl p-6 text-primary-foreground"
                >
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Ready to Order?
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Your measurements are ready. Choose your saree and blouse style to proceed.
                  </p>
                  <Link to="/order">
                    <Button variant="gold" className="group">
                      <span>Choose Style</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === "measurements" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl"
            >
              <MeasurementCards measurements={mockMeasurements} />
            </motion.div>
          )}

          {activeTab === "preferences" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl"
            >
              <FitPreferenceSelector
                preferences={preferences}
                onUpdate={handlePreferencesUpdate}
              />
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
