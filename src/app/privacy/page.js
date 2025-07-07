"use client";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | 99 Health Tips</title>
        <meta
          name="description"
          content="Read our comprehensive privacy policy outlining how we collect, use, and protect your personal information on 99healthtips.com"
        />
      </Head>

      <div className="bg-black text-white min-h-screen">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-300">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to 99HealthTips (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). We are committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website{" "}
                <a
                  href="https://www.99healthtips.com/"
                  className="text-blue-400 hover:underline"
                >
                  99healthtips.com
                </a>
                .
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access the
                site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Information We Collect
              </h2>
              <p>We may collect information about you in a variety of ways:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address,
                  demographic information when voluntarily submitted by you.
                </li>
                <li>
                  <strong>Derivative Data:</strong> IP address, browser type,
                  operating system, access times, and pages viewed.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We may use
                  cookies, web beacons, and other tracking technologies.
                </li>
                <li>
                  <strong>Third-Party Data:</strong> Information from third
                  parties, such as social media platforms.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Use of Your Information
              </h2>
              <p>We may use the information we collect about you to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Send you promotional communications (if you&apos;ve opted in)
                </li>
                <li>
                  Prevent fraudulent transactions and monitor against theft
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Disclosure of Your Information
              </h2>
              <p>
                We may share information we have collected about you in certain
                situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who
                  perform services for us.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any
                  merger or sale of company assets.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> If required to do so by
                  law or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Affiliates:</strong> With our business partners who
                  offer products or services that may be of interest to you.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Tracking Technologies
              </h2>
              <p>We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Remember your preferences</li>
                <li>Understand website usage</li>
                <li>Deliver targeted advertisements</li>
                <li>Analyze site performance</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings and other
                tools. However, disabling cookies may affect your experience.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Third-Party Websites
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content or privacy practices of these
                sites. We encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Security of Your Information
              </h2>
              <p>
                We implement reasonable security measures to protect your
                information. However, no electronic transmission or storage is
                100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Policy for Children
              </h2>
              <p>
                We do not knowingly solicit information from or market to
                children under 13. If we learn we have collected personal
                information from a child under 13, we will delete that
                information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Your Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify any personal data that is inaccurate</li>
                <li>Request deletion of your personal data</li>
                <li>Restrict processing of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:info@99healthtips.com"
                  className="text-blue-400 hover:underline"
                >
                  info@99healthtips.com
                </a>
                .
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>
              <address className="not-italic mt-2">
                99 Health Tips
                <br />
                119 Park Avenue
                <br />
                New York, NY 10166
                <br />
                United States
                <br />
                Email:{" "}
                <a
                  href="mailto:info@99healthtips.com"
                  className="text-blue-400 hover:underline"
                >
                  info@99healthtips.com
                </a>
              </address>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
