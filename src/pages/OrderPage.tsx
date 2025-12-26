import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { 
  mockSareeTypes, 
  mockBlouseStyles, 
  mockMeasurements,
  SareeType,
  BlouseStyle 
} from "@/types/measurements";
import { ArrowRight, ArrowLeft, Check, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const OrderPage = () => {
  const [step, setStep] = useState(1);
  const [selectedSaree, setSelectedSaree] = useState<SareeType | null>(null);
  const [selectedBlouse, setSelectedBlouse] = useState<BlouseStyle | null>(null);
  const { toast } = useToast();

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been sent to our expert tailors. You'll receive updates via WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors",
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={cn(
                      "w-16 h-1 mx-2 rounded-full transition-colors",
                      step > s ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-center mb-10">
                <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                  Select Your Saree Type
                </h1>
                <p className="text-muted-foreground">
                  Different fabrics require different blouse fits
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {mockSareeTypes.map((saree) => (
                  <button
                    key={saree.id}
                    onClick={() => setSelectedSaree(saree)}
                    className={cn(
                      "text-left p-6 rounded-2xl border-2 transition-all",
                      selectedSaree?.id === saree.id
                        ? "border-gold bg-gold/5 shadow-gold"
                        : "border-border hover:border-gold/50"
                    )}
                  >
                    <div className="w-full aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">
                        {saree.fabric === "silk" ? "🧵" : saree.fabric === "chiffon" ? "💨" : saree.fabric === "cotton" ? "☁️" : "✨"}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {saree.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{saree.description}</p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground capitalize">
                      {saree.fabric}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <Button
                  variant="hero"
                  disabled={!selectedSaree}
                  onClick={() => setStep(2)}
                >
                  <span>Choose Blouse Style</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-center mb-10">
                <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                  Select Blouse Style
                </h1>
                <p className="text-muted-foreground">
                  Choose your preferred neckline, back, and sleeve design
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {mockBlouseStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedBlouse(style)}
                    className={cn(
                      "text-left p-6 rounded-2xl border-2 transition-all",
                      selectedBlouse?.id === style.id
                        ? "border-gold bg-gold/5 shadow-gold"
                        : "border-border hover:border-gold/50"
                    )}
                  >
                    <div className="w-full aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">👗</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {style.name}
                    </h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Neck: {style.neckType}</p>
                      <p>Back: {style.backType}</p>
                      <p>Sleeve: {style.sleeveType}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </Button>
                <Button
                  variant="hero"
                  disabled={!selectedBlouse}
                  onClick={() => setStep(3)}
                >
                  <span>Review Order</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-center mb-10">
                <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                  Review Your Order
                </h1>
                <p className="text-muted-foreground">
                  Confirm your selections before placing the order
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Selected Saree */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                      Saree Type
                    </h3>
                    <div className="p-4 rounded-xl bg-muted">
                      <p className="font-medium text-foreground">{selectedSaree?.name}</p>
                      <p className="text-sm text-muted-foreground capitalize">{selectedSaree?.fabric}</p>
                    </div>
                  </div>

                  {/* Selected Blouse */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                      Blouse Style
                    </h3>
                    <div className="p-4 rounded-xl bg-muted">
                      <p className="font-medium text-foreground">{selectedBlouse?.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedBlouse?.neckType} | {selectedBlouse?.backType} | {selectedBlouse?.sleeveType}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-border" />

                {/* Key Measurements */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Key Measurements
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 rounded-lg bg-muted text-center">
                    <p className="text-xs text-muted-foreground">Bust</p>
                    <p className="font-semibold text-foreground">{mockMeasurements.bustCircumference.value} cm</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted text-center">
                    <p className="text-xs text-muted-foreground">Shoulder</p>
                    <p className="font-semibold text-foreground">{mockMeasurements.shoulderWidth.value} cm</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted text-center">
                    <p className="text-xs text-muted-foreground">Waist</p>
                    <p className="font-semibold text-foreground">{mockMeasurements.waistCircumference.value} cm</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted text-center">
                    <p className="text-xs text-muted-foreground">Length</p>
                    <p className="font-semibold text-foreground">{mockMeasurements.blouseLength.value} cm</p>
                  </div>
                </div>

                <hr className="my-6 border-border" />

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground">Estimated Price</p>
                    <p className="font-display text-3xl font-bold text-foreground">₹1,499</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">Delivery</p>
                    <p className="font-medium text-foreground">7-10 days</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </Button>
                <Button variant="gold" size="lg" onClick={handlePlaceOrder}>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Place Order</span>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default OrderPage;
