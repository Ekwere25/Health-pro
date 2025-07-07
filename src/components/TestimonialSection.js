"use client";
import { motion } from "framer-motion";

export default function TestimonialSection({ fadeIn }) {
  const testimonials = [
    {
      id: 1,
      quote:
        "After 3 months of HepatoBurn, my liver enzymes are finally back to normal levels. My energy has improved dramatically!",
      name: "Michael T.",
      title: "Verified Customer",
      color: "blue",
    },
    {
      id: 2,
      quote:
        "Mitolyn combined with the science-backed strategies helped me lose 22 pounds in 12 weeks. No gimmicks, just results.",
      name: "Sarah K.",
      title: "Verified Customer",
      color: "green",
    },
    {
      id: 3,
      quote:
        "I was skeptical but the liver support supplement made a noticeable difference in my digestion and overall wellbeing.",
      name: "David R.",
      title: "Verified Customer",
      color: "blue",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const header = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.div variants={header} className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Trusted by Thousands
        </h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Real people, real results with our science-backed formulas
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        className="mt-12 grid gap-8 md:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={item}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${
              testimonial.color === "blue"
                ? "border-blue-600"
                : "border-green-600"
            }`}
          >
            <div className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 * testimonial.id,
                }}
                className={`flex items-center justify-center h-12 w-12 rounded-full bg-${
                  testimonial.color === "blue" ? "blue" : "green"
                }-100 text-${
                  testimonial.color === "blue" ? "blue" : "green"
                }-600`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </motion.div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <motion.p
              className="mt-6 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + 0.1 * testimonial.id }}
            >
              {testimonial.quote}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
