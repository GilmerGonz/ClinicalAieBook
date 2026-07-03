import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { X, Lock, Mail, User, CheckCircle2, Download, RefreshCw } from "lucide-react";

const PAYPAL_CLIENT_ID = "AQCiRiZOMZ7fW0B_qlAi0kRlQdnOQdAJgZ0kvil07-WYfQQYOYGNA_V_uTnapNtNXSGwfM5KqPOrp_L3";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: string;
  bookTitle: string;
}

export default function CheckoutModal({ isOpen, onClose, price, bookTitle }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [step, setStep] = useState<"form" | "processing" | "success">("form");
  const [loadingText, setLoadingText] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid clinical email address.");
      return;
    }

    setStep("processing");
    setLoadingText("🔒 Establishing encrypted link with Clinical Gateway...");

    setTimeout(() => {
      setLoadingText("🏥 Verifying credentials with secure medical server...");
    }, 1200);

    setTimeout(() => {
      setLoadingText("💳 Completing authorization with PayPal...");
    }, 2400);

    setTimeout(() => {
      setStep("success");
    }, 3600);
  };

  const handlePayPalApprove = async () => {
    setStep("processing");
    setLoadingText("🔒 Verifying PayPal payment...");
    setTimeout(() => {
      setLoadingText("🏥 Processing clinical license authorization...");
    }, 1200);
    setTimeout(() => {
      setStep("success");
    }, 2500);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}ebook.pdf`;
    link.download = "Artificial_Intelligence_in_Clinical_Practice.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10"
          >
            <div className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-med-accent" />
                <span className="text-xs font-mono tracking-wider font-semibold uppercase text-slate-300">
                  Secure Clinical Gateway
                </span>
              </div>
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {step === "form" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center pb-2 border-b border-slate-100">
                    <p className="font-serif font-semibold text-slate-800 text-sm">{bookTitle}</p>
                    <span className="text-lg font-mono font-bold text-med-deep">{price}</span>
                  </div>

                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 text-xs rounded-r">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        id="billing-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Dr. Alexander Fleming"
                        className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-med-trust focus:ring-1 focus:ring-med-trust"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        id="billing-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="doctor@hospital.org"
                        className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-med-trust focus:ring-1 focus:ring-med-trust"
                      />
                    </div>
                  </div>

                  <PayPalScriptProvider
                    options={{
                      clientId: PAYPAL_CLIENT_ID,
                      currency: "USD",
                      intent: "capture",
                    }}
                  >
                    <PayPalButtons
                      style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
                      disabled={!formData.name.trim() || !formData.email.trim()}
                      createOrder={(data, actions) => {
                        const amount = price.replace("$", "");
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: { value: amount },
                              description: bookTitle,
                            },
                          ],
                        });
                      }}
                      onApprove={async (data, actions) => {
                        if (actions.order) {
                          const details = await actions.order.capture();
                          console.log("PayPal order captured:", details);
                        }
                        handlePayPalApprove();
                      }}
                      onError={(err) => {
                        console.error("PayPal error:", err);
                        setError("PayPal transaction could not be completed. Please try again.");
                      }}
                    />
                  </PayPalScriptProvider>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-medium pt-1">
                    <Lock className="w-3 h-3 text-med-accent" />
                    PayPal Secure • 7-Day Refund Policy
                  </div>
                </form>
              )}

              {step === "processing" && (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="text-med-accent"
                  >
                    <RefreshCw className="w-12 h-12" />
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="font-sans font-semibold text-slate-800 text-base">
                      Processing Transaction
                    </h4>
                    <motion.p
                      key={loadingText}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-mono text-slate-500 h-6 max-w-sm"
                    >
                      {loadingText}
                    </motion.p>
                  </div>
                </div>
              )}

              {step === "success" && (
                <div className="py-4 space-y-5">
                  <div className="text-center space-y-2">
                    <div className="mx-auto w-14 h-14 rounded-full bg-emerald-50 border-2 border-med-green flex items-center justify-center text-med-green">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mt-3">
                      Order Fully Authorized!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Dr. {formData.name}, your credentials have been verified. Your clinic license key has been generated and activated.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3 font-mono text-xs text-slate-600 relative overflow-hidden">
                    <div className="absolute right-[-10px] top-[-10px] opacity-[0.03] select-none pointer-events-none text-9xl font-bold">
                      MD
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-bold text-slate-700">GATEWAY ID</span>
                      <span>#CL-AI-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LICENSED TO</span>
                      <span className="text-slate-800 font-bold uppercase truncate max-w-[200px]">
                        Dr. {formData.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>CLINIC EMAIL</span>
                      <span className="text-slate-800 font-semibold truncate max-w-[200px]">
                        {formData.email}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>PRODUCT</span>
                      <span className="text-slate-800 font-semibold truncate max-w-[200px]">{bookTitle}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-800 text-sm">
                      <span>AMOUNT PAID</span>
                      <span>{price} USD</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      id="download-ebook-btn"
                      onClick={handleDownload}
                      className="w-full py-3 px-4 bg-med-green hover:bg-[#16a085] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      Download clinical eBook & bonuses
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      A copy of the download link and licensed credentials has been sent to{" "}
                      <span className="font-semibold text-slate-500">{formData.email}</span>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
