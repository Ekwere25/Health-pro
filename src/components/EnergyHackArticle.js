"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

const EnergyHackArticle = () => {
  const sections = [
    {
      title:
        "THE ULTIMATE ENERGY HACK: 5 WAYS TO BOOST YOUR ENERGY (WITHOUT CAFFEINE)",
      content: [
        "Sick of energy crashes? Ditch the caffeine rollercoaster. Lasting energy comes from working with your body's natural rhythms and not against them.",
        "This guide reveals five science-backed strategies to unlock steady, jitter-free vitality, from optimizing your mitochondria (your cells' energy factories) to harnessing the power of strategic movement and nutrient timing.",
        "Discover how hydration, targeted breathing, and specific superfoods can outmatch coffee's short-lived buzz; without the afternoon crash of course. These methods don't just mask fatigue; they solve it at the source.",
      ],
      image: "/images/e.jpg",
      isHero: true,
    },
    {
      title: "Eat for Steady Energy",
      content: [
        "The quickest way to sabotage your energy? Loading up on refined carbs and sugar. While that white bread or pastry might give an immediate rush, the subsequent crash leaves you feeling more drained than before.",
        "The solution lies in strategic food combinations that stabilize blood sugar for lasting vitality. Pairing protein with fiber creates a slow-release energy effect. Think eggs with avocado or almonds with berries.",
        "Low-glycemic complex carbs like oats, sweet potatoes, and quinoa provide sustained fuel without the crash. This triple-action approach keeps energy stable, mental focus sharp, and cravings at bay.",
      ],
      image: "/images/food.png",
      icon: "🍏",
    },
    {
      title: "Hydrate Like It's Your Job",
      content: [
        "Mild dehydration is a silent energy killer. It causes fatigue, headaches, and brain fog before you even realize you're thirsty. Your brain is 75% water, and just a 2% drop in hydration can zap focus and mood.",
        "Start your day with a glass of water (add lemon for natural electrolytes) to rehydrate after sleep. Swap dehydrating coffee with herbal teas like peppermint or ginger for caffeine-free hydration.",
        "Proper hydration boosts circulation, delivers nutrients to cells, and flushes toxins. It's the simplest way to maintain energy without stimulants.",
      ],
      image: "/images/water.png",
      icon: "💧",
    },
    {
      title: "Move More: The Energy-Boosting Magic of Motion",
      content: [
        "Think you're too tired to exercise? Paradoxically, movement is one of the most effective ways to fight fatigue. Physical activity increases oxygen circulation and triggers endorphin release - your body's natural energy boosters.",
        "A simple 10-minute walk after meals does double duty, aiding digestion while stabilizing blood sugar. For stress relief (a silent energy thief), yoga or mindful stretching works wonders.",
        "Exercise improves mitochondrial function (your cells' energy factories) and enhances nutrient delivery throughout your body. These micro-movements add up to macro energy gains.",
      ],
      image: "/images/walking.png",
      icon: "🏃‍♂️",
    },
    {
      title: "Fix Your Sleep: The Ultimate Energy Reset",
      content: [
        "Poor sleep doesn't just make you tired - it sabotages next-day focus, mood, and metabolism. The good news is that small tweaks can and do yield big improvements.",
        "Dim lights 60 minutes before bed - blue light from screens slashes melatonin, your sleep hormone by 23%. Stick to consistent bedtimes (yes, even weekends) to regulate your circadian rhythm.",
        "Quality sleep isn't a luxury. It's your biological foundation for sustainable energy.",
      ],
      image: "/images/sleep.png",
      icon: "😴",
    },
    {
      title: "Manage Stress (The Silent Energy Killer): Reclaim Your Vitality",
      content: [
        "Chronic stress doesn't just affect your mood - it systematically depletes your energy reserves by overworking adrenal glands and spiking cortisol. This biological tax leaves you constantly fatigued, even after rest.",
        "Try the 4-7-8 breathing technique. Inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds. This simple breathing technique activates parasympathetic relaxation in minutes.",
        "Managing stress isn't just self-care, it's energy preservation.",
      ],
      image: "/images/stress.webp",
      icon: "🧘‍♀️",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Head>
        <title>Healthy Living Hub | Premium Health Resources</title>
        <meta
          name="description"
          content="Discover science-backed health advice and premium wellness products for optimal living"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://99healthtips.com/" />
      </Head>
      {/* Hero Section - Fully responsive */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-6 md:p-12 shadow-lg">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {sections[0].title}
          </motion.h1>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              {sections[0].content.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  className="text-base sm:text-lg text-gray-700 mb-3 md:mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative w-full h-48 sm:h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={sections[0].image}
                alt="Energy boost illustration"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Content Sections - Fully responsive */}
      <div className="space-y-12 md:space-y-20">
        {sections.slice(1).map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-6 md:gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl md:text-3xl mr-3">
                  {section.icon}
                </span>
                {section.title}
              </motion.h2>

              {section.content.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  className="text-gray-700 mb-3 md:mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="w-full md:w-1/2 relative h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* Conclusion - Fully responsive */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-12 shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
          Break the Crash Cycle for Lasting Energy
        </h2>
        <p className="text-gray-700 mb-4 md:mb-6">
          It&apos;s quite clear that energy drinks and sugar spikes create a
          vicious cycle of temporary highs followed by crushing fatigue. True
          vitality comes from sustainable habits that work with your biology,
          not against it.
        </p>
        <p className="text-gray-700">
          Start by mastering hydration, taking daily walks, or prioritizing
          sleep. These foundational changes compound over time, delivering
          steady energy without crashes. Your first success will prove how
          powerful natural energy can be. Ditch the quick fixes; your most
          vibrant self is built one smart choice at a time.
        </p>
      </motion.section>
    </div>
  );
};

export default EnergyHackArticle;
