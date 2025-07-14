
import React from "react";

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>NewsPortal</strong>, we value your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Your name and email address (if you sign up or comment)</li>
        <li>Device and browser details</li>
        <li>IP address and location data</li>
        <li>Cookies and usage data</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Providing and managing content</li>
        <li>Improving our website’s performance and features</li>
        <li>Sending newsletters or notifications (only if subscribed)</li>
        <li>Ensuring website security and user protection</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies to improve your experience on our website, track analytics, and show personalized content. You can manage cookie preferences through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party tools (e.g., Google Analytics, AdSense) which collect data to help us analyze trends or serve relevant ads. These tools have their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement standard security measures to protect your data. However, no online method is 100% secure. Use the site at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You may request access to or deletion of your personal data by contacting us. You may also unsubscribe from emails at any time.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last Updated" date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p>
        If you have any questions about this policy, please contact us at: <br />
        <a href="mailto:contact@newsportal.com" className="text-blue-600 underline">
          contact@newsportal.com
        </a>
      </p>

      <p className="text-sm text-slate-500 mt-6">Last Updated: July 13, 2025</p>
    </div>
  );
};

export default PrivacyPage;
