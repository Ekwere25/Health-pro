"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function WeightLossSection({ fadeIn }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="weight-loss"
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
            src="/images/w4.png"
            alt="Mitolyn metabolic booster supplement bottle"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-2xl font-bold text-white">Mitolyn</h3>
            <p className="text-green-200">Metabolic Booster & Fat Burner</p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-300 text-xl">★★★★★</span>
              <span className="ml-2 text-white">4.8 (986 reviews)</span>
            </div>
          </div>
        </div>

        {/* Scrollable content area */}
        <div className="md:w-2/3 p-8 overflow-y-auto max-h-[600px]">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Science-Backed Weight Loss
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Clinically-proven ingredients to boost metabolism and burn fat
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
                <span>Boosts metabolism by up to 30%</span>
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
                <span>Reduces cravings and appetite</span>
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
                <span>Enhances fat burning during exercise</span>
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
                <span>Supports healthy blood sugar levels</span>
              </li>
            </ul>
          </div>

          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="mt-6 text-green-600 hover:text-green-800 font-medium flex items-center transition-colors"
              aria-expanded="false"
              aria-controls="weight-loss-details"
            >
              Read more about weight loss science
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
            <div
              id="weight-loss-details"
              className="mt-6 animate-fadeIn space-y-6"
            >
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-gray-900">
                  7 Proven Weight Loss Hacks
                </h3>

                <div className="my-6 rounded-xl overflow-hidden shadow-md relative h-[300px]">
                  <Image
                    src="/images/w1.png"
                    alt="Metabolism boosting strategies"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <p className="absolute bottom-0 left-0 right-0 text-center text-sm text-white bg-black bg-opacity-50 p-2">
                    Science-backed methods to optimize your metabolism
                  </p>
                </div>

                <p className="text-gray-700">
                  Tired of fad diets and weight loss gimmicks that never
                  deliver? You&apos;re not alone. Losing weight efficiently can
                  feel like an uphill battle - especially when misinformation
                  floods the internet. But science-backed strategies can make
                  shedding pounds easier and more sustainable.
                </p>

                <p className="text-gray-700 mt-4">
                  The truth is, successful weight loss isn&apos;t about extreme
                  restrictions or magic pills. It&apos;s about smart,
                  evidence-based habits that boost metabolism, control hunger,
                  and burn fat efficiently. These 7 proven methods are supported
                  by clinical research to help you slim down and keep the weight
                  off for good.
                </p>

                {/* Hack 1: Protein */}
                <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-100">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">
                    1. Prioritize Protein at Every Meal
                  </h4>
                  <p className="text-gray-700 mb-3">
                    A study by the American Journal of Clinical Nutrition found
                    that high-protein diets promote greater fat loss while
                    preserving muscle. Consuming 30% of calories from protein
                    naturally reduces daily intake by 420 calories without
                    trying.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Protein is the most critical nutrient for fat loss. It curbs
                    hunger, boosts metabolism, and helps retain muscle while
                    dieting. With the highest thermic effect (TEF), protein
                    burns 20-30% of calories during digestion, outperforming
                    carbs and fat.
                  </p>
                  <div className="my-6 rounded-xl overflow-hidden shadow-md relative h-[300px]">
                    <Image
                      src="/images/w2.png"
                      alt="Protein benefits infographic"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center text-sm text-white bg-black bg-opacity-50 p-2">
                      The power of protein for weight loss
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Application:
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Aim for 20–30g of protein per meal (eggs, chicken, Greek
                        yogurt, lentils)
                      </li>
                      <li>
                        Start your day with a protein-rich breakfast (scrambled
                        eggs or protein smoothie) to reduce cravings later
                      </li>
                      <li>
                        Snack on high-protein foods (cottage cheese, turkey
                        slices, or almonds)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Hack 2: Water */}
                <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">
                    2. Drink More Water
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Water is a zero-calorie appetite suppressant that can
                    significantly boost weight loss. Drinking water before meals
                    reduces hunger and naturally lowers calorie intake. This
                    simple trick creates effortless portion control.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Studies show drinking 17oz of water before meals can
                    increase weight loss by over 40% in 12 weeks. People who
                    replaced sugary drinks with water lost 2-2.5% more weight in
                    randomized trials. Water may increase metabolism by 24–30%
                    for an hour, especially when cold.
                  </p>
                  <div className="my-6 rounded-xl overflow-hidden shadow-md relative h-[300px]">
                    <Image
                      src="/images/w.png"
                      alt="Hydration benefits infographic"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center text-sm text-white bg-black bg-opacity-50 p-2">
                      How hydration supports weight loss
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Application:
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Drink 1–2 glasses of water 30 minutes before meals
                      </li>
                      <li>
                        Carry a reusable water bottle and sip throughout the day
                      </li>
                      <li>
                        Replace soda, juice, and sweetened coffee with water,
                        herbal tea, or sparkling water
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Hack 3: Fiber */}
                <div className="mt-6 p-6 bg-purple-50 rounded-xl border border-purple-100">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">
                    3. Eat More Soluble Fiber
                  </h4>
                  <p className="text-gray-700 mb-3">
                    The Journal of Nutrition found that increasing fiber intake
                    led to significant weight loss without other dietary
                    changes. Consuming just 10g of soluble fiber daily led to a
                    3.7% reduction in belly fat over 5 years.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Soluble fibers form a gel-like substance that delays
                    digestion and prolongs fullness. They feed beneficial gut
                    bacteria linked to lower body weight and improved
                    metabolism. High-fiber foods also demand more chewing, which
                    reduces calorie intake naturally.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Application:
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Eat whole, plant-based foods (vegetables, fruits,
                        legumes, whole grains)
                      </li>
                      <li>Aim for at least 25–30g of fiber per day</li>
                      <li>
                        Start meals with a fiber-rich salad or broth-based soup
                        to curb overeating
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Hack 4: Strength Training */}
                <div className="mt-6 p-6 bg-red-50 rounded-xl border border-red-100">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">
                    4. Strength Training
                  </h4>
                  <p className="text-gray-700 mb-3">
                    A Harvard study tracking male fitness habits for 8 years
                    revealed that weight training prevented 3x more belly fat
                    accumulation than cardio-only routines. Strength training
                    builds lean muscle, which boosts metabolism and increases
                    fat burning.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Muscles are metabolically active, burning calories even at
                    rest. Lifting weights prevents muscle loss during dieting,
                    forcing your body to target fat stores. It also boosts
                    insulin sensitivity, helping your body use carbs for energy
                    rather than storing them as fat.
                  </p>
                  <div className="my-6 rounded-xl overflow-hidden shadow-md relative h-[300px]">
                    <Image
                      src="/images/w3.png"
                      alt="Strength training benefits infographic"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center text-sm text-white bg-black bg-opacity-50 p-2">
                      Why strength training beats cardio for fat loss
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Application:
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Do resistance training 2–3x per week (bodyweight,
                        dumbbells, or machines)
                      </li>
                      <li>
                        Focus on compound movements (squats, deadlifts,
                        push-ups) for maximum calorie burn
                      </li>
                      <li>
                        Gradually increase weights to build strength and
                        metabolism
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Hack 5: Mindful Eating */}
                <div className="mt-6 p-6 bg-yellow-50 rounded-xl border border-yellow-100">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3">
                    5. Eat Mindfully
                  </h4>
                  <p className="text-gray-700 mb-3">
                    A Journal of Nutrition study revealed fast eaters were 115%
                    more likely to be obese than slow eaters. Eating quickly
                    overrides your brain&apos;s fullness signals, which take
                    about 20 minutes to activate.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Mindful eating increases awareness of hunger cues, leading
                    to greater meal satisfaction and healthier portions. Chewing
                    thoroughly increases calorie burning during digestion by up
                    to 10% and enhances nutrient absorption.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Application:
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Put your fork down between bites</li>
                      <li>Chew each mouthful 20–30 times</li>
                      <li>Avoid distractions (TV, phones) while eating</li>
                    </ul>
                  </div>
                </div>

                {/* Hack 6: Intermittent Fasting */}
                <div className="mt-6 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-3">
                    6. Intermittent Fasting
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Research by the Obesity Institute found intermittent fasting
                    triggered 3–8% weight loss in 3–24 weeks, outpacing
                    traditional calorie restriction. It works by optimizing
                    fat-burning hormones while preserving muscle.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Fasting can spike human growth hormone (HGH) levels by up to
                    5 times, enhancing fat metabolism and muscle preservation.
                    It also reduces insulin resistance, making it easier for
                    your body to use stored fat for energy.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Application:
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Start with the 16:8 method (16-hour fast, 8-hour eating
                        window)
                      </li>
                      <li>Eat healthy meals during the eating window</li>
                      <li>
                        Stay hydrated with water, black coffee, or tea during
                        fasting
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Hack 7: Spices */}
                <div className="mt-6 p-6 bg-pink-50 rounded-xl border border-pink-100">
                  <h4 className="text-lg font-semibold text-pink-800 mb-3">
                    7. Spice Up Your Meals
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Spices like chili peppers, ginger, and black pepper contain
                    compounds like capsaicin that trigger thermogenesis, helping
                    your body burn extra calories. Studies show hot spices can
                    increase energy expenditure by 50+ daily calories.
                  </p>
                  <p className="text-gray-700 mb-3">
                    These spices also suppress appetite, reducing cravings
                    between meals. Even non-spicy seasonings like turmeric and
                    cinnamon support metabolism by improving insulin sensitivity
                    and digestion.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Application:
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Sprinkle cayenne on eggs, add ginger to smoothies</li>
                      <li>Start with 1/4 tsp of chili flakes daily</li>
                      <li>
                        Try spicy snacks like wasabi peas or chili-roasted nuts
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Final Thoughts */}
                <div className="mt-6 bg-green-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Final Thoughts
                  </h4>
                  <p className="text-green-700">
                    Sustainable weight loss does not require extreme measures.
                    These 7 proven hacks optimize metabolism, control hunger,
                    and enhance fat burning, making your journey easier and more
                    effective. These hacks are science-backed and are proven to
                    work for most individuals.
                  </p>
                  <p className="text-green-700 mt-2">
                    By focusing on gradual, dietary changes - from protein
                    timing to spice-powered thermogenesis, you will achieve
                    lasting results without deprivation. Ensure to work with
                    your biology, not against it.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setExpanded(false)}
                className="mt-4 text-green-600 hover:text-green-800 font-medium flex items-center transition-colors"
                aria-expanded="true"
                aria-controls="weight-loss-details"
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
              href="https://mitolyn.com/welcome/?hop=doctorkay5&hopId=072b6397-d566-40e2-a03e-7e70d1df4f13"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Purchase Mitolyn weight management supplement"
            >
              Get Mitolyn Now
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
