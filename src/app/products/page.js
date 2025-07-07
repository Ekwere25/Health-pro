"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const ProductsShowcase = () => {
  // External links for each product
  const productLinks = {
    mitolyn:
      "https://mitolyn.com/welcome/?hop=doctorkay5&hopId=072b6397-d566-40e2-a03e-7e70d1df4f13",
    hepatoburn: "https://www.hepatoburn.com/welcome?hop=doctorkay5",
    quietumplus:
      "https://quietumplus.com/video_gutfe.php?hopId=20d0ddd0-6b5f-4574-a86e-e876c0484f59&vtid=gutfe&vtid=gutfe&hop=doctorkay5",
    javaburn: "https://morningcoffeeritual.net/welcome?hop=doctorkay5",
    jointgenesis:
      "https://bestjointcare.com/vsl/?hop=doctorkay5&hopId=6998c5db-82a5-4117-89fa-327526c10da5&v=bvsl",
    pinealguardian:
      "https://thepinealguardian.com/go/indexvsv15.php?hop=doctorkay5",
    leanbiome:
      "https://bestleanlife.com/vsl/?hop=doctorkay5&hopId=f1f5cdc3-e855-49a0-9711-b87ab87de238&v=bvsl&version=social",
    glucose6:
      "https://gluco6.com/explore/?hopId=2dc0c90f-b949-4687-88c6-7b3c5dfd2111&hop=doctorkay5&tid=",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <Head>
          <title>Healthy Living Hub | Premium Health Resources</title>
            <meta
              name="description"
              content="Discover science-backed health advice and premium wellness products for optimal living"
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://99healthtips.com/" />
        </Head>
      {/* Mitolyn Section */}
      <section className="mb-20 scroll-mt-20">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/images/pp.png"
              alt="Mitolyn Supplement"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Unlock Your Body&apos;s Natural Energy & Fat-Burning Power with
              Mitolyn!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Are you dealing with sluggish metabolism and low energy? Mitolyn
              targets the root cause - your mitochondria - to supercharge
              cellular energy production and enhance fat burning. Unlike well
              known stimulants that cause jitters, Mitolyn supports sustained
              energy, focus, and mental clarity by optimizing mitochondrial
              function. Experience faster metabolism, increased fat oxidation,
              and natural weight management as your body efficiently converts
              fat into fuel.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Users report:
                </h3>
                <ul className="space-y-3 text-gray-600 ">
                  {[
                    "Reduced brain fog",
                    "Improved mood and focus",
                    "Boost metabolism for faster, more efficient fat burning",
                    "Lasting vitality - all thanks to advanced mitochondrial support",
                    "Efficient weight loss without starving",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  How It Works:
                </h3>
                <p className="text-gray-600 mb-4">
                  Mitolyn targets the root cause of a slow metabolism by
                  enhancing mitochondrial function, leading to increased fat
                  burning and potential weight loss. Mitolyn&apos;s special
                  ingredients, such as CoQ10 and PQQ, are known to boost fat
                  oxidation and support weight management by aiding in the
                  conversion of fat into energy.
                </p>
                <p className="text-gray-600">
                  Mitolyn&apos;s natural ingredients, like Schisandrin C and
                  Rhodiola Rosea, have been linked to benefits beyond weight
                  loss, including improved stress resilience, better digestion,
                  and even support for skin health. Whether you&apos;re looking
                  to boost energy, shed stubborn fat, or sharpen mental
                  performance, Mitolyn helps you perform at your best naturally.
                </p>
              </div>
            </div>

            <Link
              href={productLinks.mitolyn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <button className="relative overflow-hidden bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10">BUY NOW</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="animate-ping absolute h-8 w-8 rounded-full bg-green-400 opacity-75 group-hover:opacity-100"></span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* HepatoBurn Section */}
      <section className="mb-20 scroll-mt-20">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/images/p11.png"
              alt="HepatoBurn Supplement"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Flush Out Stubborn Belly Fat with HepatoBurn! Your Liver&apos;s
              Secret Weapon!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Tired of fighting belly fat that won&apos;t budge? HepatoBurn
              targets the hidden culprit – your overworked liver. By optimizing
              liver function, it supercharges your body&apos;s natural detox
              systems.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  What It Does:
                </h3>
                <ul className="space-y-3 text-gray-600 ">
                  {[
                    "Melt stubborn belly fat by improving fat metabolism",
                    "Boost digestion for better nutrient absorption",
                    "Sharpen mental clarity as toxins are flushed out",
                    "Deliver clean, steady energy (no caffeine crashes!)",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Why Choose HepatoBurn:
                </h3>
                <p className="text-gray-600 mb-4">
                  Unlike harsh fat burners, HepatoBurn uses 100% stimulant-free
                  ingredients to support your liver safely every day. Users
                  report visible slimming around the waist within weeks plus
                  glowing skin and better digestion.
                </p>
                <p className="text-gray-600">
                  By promoting a healthier liver, HepatoBurn helps to enhance
                  digestion, support gut health, and encourage natural weight
                  loss, especially around the midsection. Unlike
                  stimulant-loaded supplements, HepatoBurn is free from
                  caffeine, synthetic additives, and harsh diuretics; making it
                  gentle enough for daily use. Sharper mental clarity, balanced
                  energy, and a lighter, more vibrant feeling are all
                  characteristics associated with using HepatoBurn - all thanks
                  to targeted liver support.
                </p>
              </div>
            </div>

            <Link
              href={productLinks.hepatoburn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10">BUY NOW</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="animate-ping absolute h-8 w-8 rounded-full bg-blue-400 opacity-75 group-hover:opacity-100"></span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quietum Plus Section */}
      <section className="mb-20 scroll-mt-20">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/images/p21.png"
              alt="Quietum Plus Supplement"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Find Relief from Tinnitus & Rediscover Peace with Quietum Plus!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Tired of constant ringing or buzzing in your ears? Quietum Plus is
              specially formulated to help reduce tinnitus symptoms and support
              overall ear health.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Many users report:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 ">
                  {[
                    "Noticeably quieter ears",
                    "Improved hearing clarity for better daily communication",
                    "Reduced stress and anxiety",
                    "Fall asleep faster without distracting ear noise",
                    "Deeper, more restful sleep without disruptive ear noises",
                    "An improvement in their overall hearing abilities and a greater ability to discern sounds",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-fadeIn"
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      <span className="text-purple-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  The Science Behind It:
                </h3>
                <p className="text-gray-600 mb-4">
                  With a blend of natural ingredients, Quietum Plus targets the
                  root causes of tinnitus while promoting calmness and auditory
                  wellness. Whether your symptoms are stress- related or
                  age-related, this supplement helps you reclaim your quiet and
                  your comfort without stress.
                </p>
                <p className="text-gray-600">
                  Quietum Plus contains ingredients that may help reduce stress
                  and anxiety, which in turn tackles tinnitus symptoms. The
                  supplement contains antioxidants that may help protect ear
                  cells from damage caused by free radicals, thus potentially
                  supporting long-term ear health.
                </p>
              </div>
            </div>

            <Link
              href={productLinks.quietumplus}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <button className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10">BUY NOW</span>
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="animate-ping absolute h-8 w-8 rounded-full bg-purple-400 opacity-75 group-hover:opacity-100"></span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* JavaBurn Section */}
      <section className="mb-20 scroll-mt-20">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/images/p3.png"
              alt="JavaBurn Supplement"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Supercharge Your Morning Coffee for Faster Fat Loss With JavaBurn
              2.0!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              What if your morning coffee could help melt stubborn fat all day
              long? Java Burn 2.0 is a revolutionary powder designed to mix
              completely into coffee with no taste or texture change. This
              easy-to-use formula works with your caffeine boost to accelerate
              results.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  It Helps To:
                </h3>
                <ul className="space-y-3 text-gray-600 ">
                  {[
                    "Ignite your metabolism to burn more calories – even at rest!",
                    "Target stored fat and help convert it into clean energy",
                    "Crush cravings and keep hunger hormones in check",
                    "Thousands report easier weight management and visible slimming",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-amber-300 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Detailed Benefits:
                </h3>
                <ul className="space-y-2 text-gray-600 ">
                  {[
                    "Increased Calorie Burning - Java Burn is designed to help your body burn more calories, even at rest, by potentially boosting your metabolism.",
                    "Enhanced Fat Oxidation - It may aid in breaking down stored body fat, making it easier for your body to use fat for energy.",
                    "Improved Energy Levels - Many users report a noticeable boost in energy without the jitters often associated with caffeine or other supplements.",
                    "Reduced Cravings - The supplement may help curb appetite and reduce cravings for sugary or unhealthy foods, potentially aiding in weight management.",
                    "Improved Focus - Some users have noted enhanced mental clarity and focus while taking Java Burn, which can be helpful for productivity.",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href={productLinks.javaburn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <button className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10">BUY NOW</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="animate-ping absolute h-8 w-8 rounded-full bg-amber-400 opacity-75 group-hover:opacity-100"></span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Joint Genesis Section */}
      <section className="mb-20 scroll-mt-20">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/images/p4.png"
              alt="Joint Genesis Supplement"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Revitalize Your Joints & Move Without Pain with Joint Genesis!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Tired of stiff, achy joints holding you back? Joint Genesis
              combines cutting-edge science with powerful natural ingredients to
              support joint health and mobility.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Key Benefits:
                </h3>
                <ul className="space-y-3 text-gray-600 ">
                  {[
                    "Boost hyaluronic acid production for superior joint lubrication",
                    "Reduce inflammation with French maritime pine bark and Boswellia serrata",
                    "Protect and repair cartilage to maintain long-term joint health",
                    "Restore flexibility and range of motion for easier movement",
                    "Thousands report significant pain relief and smoother mobility",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-red-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  How It Works:
                </h3>
                <p className="text-gray-600 mb-4">
                  Joint Genesis promotes the production of hyaluronic acid by
                  utilizing a patented ingredient called Mobilee®, which is rich
                  in hyaluronic acid. Mobilee® is designed to replenish
                  hyaluronic acid levels in the body, effectively increasing the
                  amount of this vital compound in synovial fluid, the lubricant
                  within joints.
                </p>
                <p className="text-gray-600">
                  This increase in hyaluronic acid helps to improve joint
                  lubrication, reduce stiffness, and alleviate discomfort.
                  Whether you&apos;re an active adult or simply want to move
                  comfortably again, Joint Genesis helps you reclaim your
                  natural mobility without stiffness or discomfort.
                </p>
              </div>
            </div>

            <Link
              href={productLinks.jointgenesis}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <button className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10">BUY NOW</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="animate-ping absolute h-8 w-8 rounded-full bg-red-400 opacity-75 group-hover:opacity-100"></span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pineal Guardian Section */}
      <section className="mb-20 scroll-mt-20">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/images/p5.png"
              alt="Pineal Guardian Supplement"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Unlock Your Mind&apos;s Full Potential with Pineal Guardian!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Your pineal gland - the body&apos;s &apos;third eye&apos; holds
              the key to deep sleep, sharp focus, and even spiritual clarity.
              Pineal Guardian is scientifically crafted to nourish this vital
              gland.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Benefits You&apos;ll Experience:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 ">
                  {[
                    "Sleep Deeper by boosting natural melatonin for restorative, restful nights",
                    "Enhance memory, focus, and sharpens the mind",
                    "Elevate Awareness by supporting intuition and spiritual connection",
                    "Balance Emotions by promoting inner calm and emotional stability",
                    "Supports an active daily routine for general wellness",
                    "Wake up refreshed with mental clarity",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-fadeIn"
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      <span className="text-indigo-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  User Testimonial:
                </h3>
                <blockquote className="text-gray-600 italic mb-4">
                  &apos;Pineal Guardian transformed my sleep and intuition! I
                  fall asleep faster, dream vividly, and wake up with mental
                  clarity I&apos;ve never had before. Even my meditation feels
                  deeper. To me, this isn&apos;t just a supplement; it&apos;s a
                  tool for unlocking my mind&apos;s true power.&apos;
                  <footer className="mt-2 not-italic font-semibold">
                    Liam R., Yoga Instructor, Massachusetts
                  </footer>
                </blockquote>
                <p className="text-gray-600">
                  Are you seeking wisdom or simply craving better sleep and
                  mental sharpness? This is your gateway to peak mind-body
                  harmony. With a potent blend of pineal-supporting nutrients,
                  Pineal Guardian helps decrypt your brain&apos;s hidden
                  potential.
                </p>
              </div>
            </div>

            <Link
              href={productLinks.pinealguardian}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <button className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10">BUY NOW</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="animate-ping absolute h-8 w-8 rounded-full bg-indigo-400 opacity-75 group-hover:opacity-100"></span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* LeanBiome Section */}
      <section className="mb-20 scroll-mt-20">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/images/p6.png"
              alt="LeanBiome Supplement"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Unlock Natural Weight Loss with LeanBiome!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Struggling with stubborn weight, bloating, or slow digestion?
              LeanBiome is your science-backed solution! This powerful
              supplement combines probiotics and Green Select Phytosome to
              support a healthy gut microbiome - the key to effortless weight
              management.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Why LeanBiome Works:
                </h3>
                <ul className="space-y-3 text-gray-600 ">
                  {[
                    "Probiotic Power - Balances gut bacteria for better digestion, reduced bloating, and improved metabolism",
                    "Green Select Phytosome - Enhances fat-burning and supports natural detox",
                    "Prebiotic Boost - Feeds good bacteria for long-term gut health and weight control",
                    "A healthy gut means more energy, fewer cravings, and a slimmer waistline",
                    "Achieve results without extreme diets",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Additional Benefits:
                </h3>
                <ul className="space-y-2 text-gray-600 ">
                  {[
                    "Natural Weight Loss Support - LeanBiome aids in shedding pounds through a combination of probiotics and green select phytosome",
                    "Improved Digestion - The probiotics balance the gut microbiome, leading to better digestion and reduced bloating",
                    "Reduced Appetite - Many users report decreased hunger and cravings",
                    "Increased Energy Levels - Supports healthy gut and metabolism for sustained energy",
                    "Enhanced Gut Health - Improves the balance of bacteria in the gut for overall health",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href={productLinks.leanbiome}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <button className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10">BUY NOW</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="animate-ping absolute h-8 w-8 rounded-full bg-emerald-400 opacity-75 group-hover:opacity-100"></span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Glucose 6 Section */}
      <section className="scroll-mt-20">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/images/p7.png"
              alt="Glucose 6 Supplement"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Take Control of Your Blood Sugar & Energy with Glucose 6!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Struggling with sugar cravings or energy crashes? Glucose 6 is
              scientifically formulated to help your body maintain healthy blood
              sugar levels naturally while boosting energy.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Key Functions:
                </h3>
                <ul className="space-y-3 text-gray-600 ">
                  {[
                    "Maintain healthy blood sugar levels naturally",
                    "Boost insulin sensitivity for better metabolic function",
                    "Curb sugar cravings and reduce unhealthy snacking",
                    "Enhance energy levels for a more active, vibrant life",
                    "Promote heart health by helping to manage cholesterol",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-rose-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-rose-300 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Success Story:
                </h3>
                <blockquote className="text-gray-600 italic mb-4">
                  &apos;Gluco 6 Changed My Life! After years of energy crashes
                  and sugar cravings, Gluco 6 helped me stabilize my blood sugar
                  within weeks. I&apos;ve lost 18 pounds, stopped afternoon
                  slumps, and finally feel in control of my diet. My doctor even
                  noticed improved cholesterol! Now I recommend it to all my
                  friends!&apos;
                  <footer className="mt-2 not-italic font-semibold">
                    Mark T., 54, Indianapolis, Indiana
                  </footer>
                </blockquote>
                <p className="text-gray-600">
                  Whether you&apos;re prediabetic, managing weight, or simply
                  seeking steady energy, this supplement helps you break free
                  from blood sugar rollercoasters and feel your best every day.
                </p>
              </div>
            </div>

            <Link
              href={productLinks.glucose6}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <button className="relative overflow-hidden bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10">BUY NOW</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="animate-ping absolute h-8 w-8 rounded-full bg-rose-400 opacity-75 group-hover:opacity-100"></span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsShowcase;
