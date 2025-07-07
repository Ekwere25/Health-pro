"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export default function LiverSupportSection({ fadeIn }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="liver-support"
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
      style={fadeIn}
    >
      <Head>
        <title>Healthy Living Hub | Premium Health Resources</title>
        <meta
          name="description"
          content="Discover science-backed health advice and premium wellness products for optimal living"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://99healthtips.com/" />
      </Head>
      <div className="md:flex">
        {/* Fixed-height image container */}
        <div className="md:w-1/3 relative h-[300px] md:h-[400px]">
          <Image
            className="absolute h-full w-full object-cover"
            src="/images/3.png"
            alt="HepatoBurn liver support supplement bottle"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-2xl font-bold text-white">HepatoBurn</h3>
            <p className="text-blue-200">Advanced Liver Support Formula</p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-300 text-xl">★★★★★</span>
              <span className="ml-2 text-white">4.9 (1,243 reviews)</span>
            </div>
          </div>
        </div>

        {/* Scrollable content area */}
        <div className="md:w-2/3 p-8 overflow-y-auto max-h-[600px]">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Liver Detox & Support
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Clinical-grade support for optimal liver function and
                detoxification
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Key Benefits:
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Supports natural detoxification processes</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Promotes healthy bile production</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Helps maintain optimal cholesterol levels</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Supports liver cell regeneration</span>
              </li>
            </ul>
          </div>

          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="mt-6 text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
              aria-expanded="false"
              aria-controls="liver-details"
            >
              Read more about liver health
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          ) : (
            <div id="liver-details" className="mt-6 animate-fadeIn space-y-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-gray-900">
                  The Vital Importance of Liver Health
                </h3>

                {/* Added first illustration image */}
                <div className="my-6 rounded-xl overflow-hidden shadow-md relative h-[300px]">
                  <Image
                    src="/images/1.png"
                    alt="Healthy liver anatomy illustration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <p className="absolute bottom-0 left-0 right-0 text-center text-sm text-white bg-black bg-opacity-50 p-2">
                    The liver&apos;s complex structure enables its hundreds of
                    vital functions
                  </p>
                </div>

                <p className="text-gray-700">
                  The liver is the most advanced detoxifier, fat-burner, and
                  metabolic regulator known to man. This three-pound powerhouse
                  works 24/7 to keep you alive and active. Unfortunately, most
                  people treat it like an afterthought.
                </p>

                <p className="text-gray-700 mt-4">
                  While you are sleeping peacefully, your liver is very much at
                  work performing much needed tasks to maintain the sanctity of
                  your body. Your liver detoxifies around 1.45 litres of blood
                  per minute; filtering toxins, drugs, and alcohol like a
                  high-efficiency sewage plant. Your liver also produces bile,
                  stores emergency energy which is released when one is starving
                  or crashing and plays a key role in regulating hormonal
                  balance and cholesterol management.
                </p>

                <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Liver Health Facts:
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 font-bold">•</span>
                      <span>
                        <strong>Detoxification:</strong> Filters 1.45 liters of
                        blood per minute, removing toxins, drugs, and alcohol
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 font-bold">•</span>
                      <span>
                        <strong>Bile Production:</strong> Essential for
                        digesting fats and absorbing vitamins A, D, E, and K
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 font-bold">•</span>
                      <span>
                        <strong>Blood Sugar Control:</strong> Stores glucose as
                        glycogen and releases it when needed
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 font-bold">•</span>
                      <span>
                        <strong>Protein Synthesis:</strong> Produces albumin and
                        clotting factors for blood health
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 font-bold">•</span>
                      <span>
                        <strong>Cholesterol Management:</strong> Balances HDL
                        and LDL cholesterol levels
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Modern Threats to Liver Health:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Fatty liver disease affects 1 in 3 adults globally</li>
                    <li>
                      Sluggish detox pathways leading to weight gain and fatigue
                    </li>
                    <li>
                      Chronic inflammation from processed foods and
                      environmental toxins
                    </li>
                    <li>Medication and alcohol-induced liver stress</li>
                  </ul>
                </div>

                {/* Added second infographic image */}
                <div className="my-6 rounded-xl overflow-hidden border border-gray-200 relative h-[300px]">
                  <Image
                    src="/images/4.png"
                    alt="Liver function infographic"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <p className="absolute bottom-0 left-0 right-0 text-center text-sm text-white bg-black bg-opacity-50 p-2">
                    How HepatoBurn supports each of your liver&apos;s critical
                    functions
                  </p>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Liver-Supporting Habits:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        ✔ Eat leafy greens, beets, and cruciferous vegetables
                      </li>
                      <li>✔ Stay hydrated to flush toxins</li>
                      <li>✔ Exercise regularly to prevent fat buildup</li>
                      <li>
                        ✔ Consider intermittent fasting for cellular repair
                      </li>
                      <li>✔ Monitor liver enzymes through regular testing</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                    <h4 className="font-semibold text-red-800 mb-2">
                      Liver-Damaging Habits:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>✖ Excessive processed foods and sugars</li>
                      <li>✖ Overuse of painkillers like acetaminophen</li>
                      <li>✖ Heavy alcohol consumption</li>
                      <li>✖ Smoking and recreational drug use</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    <strong>Important:</strong> Your liver is your only
                    irreplaceable detox organ. Unlike kidneys or lungs, you
                    can&apos;t survive without a functioning liver. Proactive
                    care is essential for long-term health.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setExpanded(false)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
                aria-expanded="true"
                aria-controls="liver-details"
              >
                Show less
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </div>
          )}

          <div className="mt-8">
            <a
              href="https://www.hepatoburn.com/welcome?hop=doctorkay5"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Purchase HepatoBurn liver support supplement"
            >
              Get HepatoBurn Now
            </a>
            <p className="mt-2 text-center text-sm text-gray-500">
              60-day money-back guarantee • Free shipping on all orders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
