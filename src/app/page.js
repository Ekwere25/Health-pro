"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import LiverSupportSection from "../components/LiverSupportSection";
import WeightLossSection from "../components/WeightLossSection";
import TestimonialSection from "../components/TestimonialSection";
import EnergyHackArticle from "../components/EnergyHackArticle";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AffiliateComparison() {
  const [activeTab, setActiveTab] = useState("liver");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Subscription failed");
      }

      toast.success(
        "Thank you for subscribing! Check your email for confirmation."
      );
      setEmail("");
      setSubscriptionSuccess(true);
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error(error.message || "Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.6s ease-out",
  };

  const parallax = {
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Healthy Living Hub | Premium Health Resources</title>
        <meta
          name="description"
          content="Discover science-backed health advice and premium wellness products for optimal living"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://99healthtips.com/" />
      </Head>

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 px-4 py-2"
      >
        {/* Hero Section with Motion */}
        <motion.section
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12"
        >
          <motion.div variants={slideUp}>
            <motion.h1
              variants={slideUp}
              className="text-5xl md:text-6xl font-bold mb-6 text-blue-800 leading-tight"
            >
              Elevate Your <span className="text-blue-600">Health</span>, <br />
              Enhance Your <span className="text-blue-600">Life</span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-xl mb-8 text-gray-700 max-w-lg"
            >
              Science-backed health strategies and carefully curated wellness
              products to help you perform at your peak.
            </motion.p>
            <motion.form
              onSubmit={handleSubscribe}
              variants={slideUp}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading || isSubmitting}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md disabled:opacity-70 whitespace-nowrap"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  "Get Free Tips"
                )}
              </motion.button>
            </motion.form>
            <p className="mt-2 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
          <motion.div variants={slideUp} className="relative">
            <div className="absolute -inset-4 bg-blue-200 rounded-2xl transform rotate-1 opacity-30"></div>
            <motion.img
              src="/health.jpg"
              alt="Healthy lifestyle"
              className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>
        </motion.section>

        {/* Rest of your component remains the same */}
        {/* Comparison Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full shadow-xl p-1">
              <nav className="flex space-x-4" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab("liver")}
                  className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeTab === "liver"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  Liver Support
                </button>
                <button
                  onClick={() => setActiveTab("weight")}
                  className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeTab === "weight"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  Weight Management
                </button>
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === "liver" ? (
              <LiverSupportSection fadeIn={fadeIn} />
            ) : (
              <WeightLossSection fadeIn={fadeIn} />
            )}
          </div>
        </div>

        {/* Products Link */}
        <div className="text-center my-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block w-full sm:w-auto text-center"
          >
            <Link
              href="/products"
              className="
      bg-gradient-to-r from-blue-600 to-blue-800 
      text-white 
      px-6 py-3 md:px-8 md:py-4 
      rounded-full 
      text-base md:text-lg 
      font-semibold 
      shadow-lg hover:shadow-xl 
      transition-all
      whitespace-nowrap
      inline-block
      w-full sm:w-auto
    "
            >
              Explore Premium Health Products →
            </Link>
          </motion.div>
        </div>
        {/* Energy Hack Article */}
        <EnergyHackArticle fadeIn={fadeIn} />

        {/* Testimonials */}
        <TestimonialSection fadeIn={fadeIn} />

        <div className="bg-white py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden">
              <div className="px-4 py-8 sm:px-6 sm:py-12 md:p-16">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Ready to Transform Your Health?
                  </h2>
                  <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-blue-100">
                    Choose the solution that fits your goals and start your
                    wellness journey today
                  </p>
                  {/* Products Link */}
                  <div className="text-center mt-8 sm:my-12">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block w-full sm:w-auto text-center"
                    >
                      <Link
                        href="/products"
                        className="
                  bg-gradient-to-r from-blue-600 to-blue-800 
                  text-white 
                  px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
                  rounded-full 
                  text-sm sm:text-base md:text-lg 
                  font-semibold 
                  shadow-md hover:shadow-lg md:shadow-lg md:hover:shadow-xl 
                  transition-all
                  whitespace-nowrap
                  inline-block
                  w-full sm:w-auto
                "
                      >
                        Explore Premium Health Products →
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
