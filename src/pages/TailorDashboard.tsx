import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Download, 
  MessageCircle, 
  Package, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock orders data
const mockOrders = [
  {
    id: "ORD-2024-001",
    customerName: "Priya Sharma",
    sareeType: "Banarasi Silk",
    blouseStyle: "Deep V-Neck",
    status: "cutting",
    createdAt: "2024-12-20",
    estimatedDelivery: "2024-12-28",
    measurements: {
      bust: 91,
      shoulder: 38,
      waist: 71,
    },
    fitRecommendations: ["Add 0.5cm to armhole for silk drape", "Standard shoulder slope adjustment applied"],
  },
  {
    id: "ORD-2024-002",
    customerName: "Anita Patel",
    sareeType: "Kanjeevaram",
    blouseStyle: "Boat Neck",
    status: "pending",
    createdAt: "2024-12-22",
    estimatedDelivery: "2024-12-30",
    measurements: {
      bust: 86,
      shoulder: 36,
      waist: 68,
    },
    fitRecommendations: ["Comfort fit applied as per preference"],
  },
  {
    id: "ORD-2024-003",
    customerName: "Meera Reddy",
    sareeType: "Chiffon Party",
    blouseStyle: "Classic Round",
    status: "ready",
    createdAt: "2024-12-18",
    estimatedDelivery: "2024-12-25",
    measurements: {
      bust: 94,
      shoulder: 40,
      waist: 76,
    },
    fitRecommendations: [],
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: typeof Package }> = {
  pending: { label: "Pending", color: "text-secondary bg-secondary/10", icon: Clock },
  cutting: { label: "Cutting", color: "text-accent bg-accent/10", icon: Package },
  stitching: { label: "Stitching", color: "text-gold bg-gold/10", icon: Package },
  ready: { label: "Ready", color: "text-primary bg-primary/10", icon: CheckCircle },
};

const TailorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<typeof mockOrders[0] | null>(null);

  const filteredOrders = mockOrders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  Tailor Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Manage orders and download cutting patterns
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Connect
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="text-sm text-muted-foreground mb-1">Pending</p>
              <p className="font-display text-2xl font-bold text-secondary">2</p>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="text-sm text-muted-foreground mb-1">In Progress</p>
              <p className="font-display text-2xl font-bold text-accent">1</p>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="text-sm text-muted-foreground mb-1">Ready</p>
              <p className="font-display text-2xl font-bold text-primary">1</p>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="text-sm text-muted-foreground mb-1">This Month</p>
              <p className="font-display text-2xl font-bold text-gold">12</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Orders List */}
            <div className="lg:col-span-2">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search orders by ID or customer name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>

              {/* Orders */}
              <div className="space-y-4">
                {filteredOrders.map((order, index) => {
                  const status = statusConfig[order.status];
                  return (
                    <motion.button
                      key={order.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedOrder(order)}
                      className={cn(
                        "w-full text-left p-5 rounded-xl border-2 transition-all",
                        selectedOrder?.id === order.id
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-gold/50 bg-card"
                      )}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-mono text-sm text-muted-foreground">{order.id}</span>
                            <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", status.color)}>
                              {status.label}
                            </span>
                          </div>
                          <h3 className="font-medium text-foreground mb-1">{order.customerName}</h3>
                          <p className="text-sm text-muted-foreground">
                            {order.sareeType} • {order.blouseStyle}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Order Details */}
            <div className="lg:col-span-1">
              {selectedOrder ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-card rounded-2xl border border-border p-6 sticky top-24"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      Order Details
                    </h2>
                    <span className="font-mono text-sm text-muted-foreground">
                      {selectedOrder.id}
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Customer</p>
                      <p className="font-medium text-foreground">{selectedOrder.customerName}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Saree Type</p>
                        <p className="font-medium text-foreground">{selectedOrder.sareeType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Blouse Style</p>
                        <p className="font-medium text-foreground">{selectedOrder.blouseStyle}</p>
                      </div>
                    </div>
                  </div>

                  <hr className="border-border mb-6" />

                  {/* Measurements */}
                  <div className="mb-6">
                    <h3 className="font-medium text-foreground mb-3">Key Measurements</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-muted text-center">
                        <p className="text-xs text-muted-foreground">Bust</p>
                        <p className="font-semibold text-foreground">{selectedOrder.measurements.bust}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted text-center">
                        <p className="text-xs text-muted-foreground">Shoulder</p>
                        <p className="font-semibold text-foreground">{selectedOrder.measurements.shoulder}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted text-center">
                        <p className="text-xs text-muted-foreground">Waist</p>
                        <p className="font-semibold text-foreground">{selectedOrder.measurements.waist}</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Recommendations */}
                  {selectedOrder.fitRecommendations.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-medium text-foreground mb-3">AI Fit Recommendations</h3>
                      <div className="space-y-2">
                        {selectedOrder.fitRecommendations.map((rec, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-accent/10">
                            <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-foreground">{rec}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="space-y-3">
                    <Button variant="gold" className="w-full">
                      <Download className="w-4 h-4" />
                      Download Pattern (PDF)
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4" />
                      Message Customer
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-card rounded-2xl border border-border p-8 text-center">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Select an order to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TailorDashboard;
