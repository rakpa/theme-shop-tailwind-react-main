import React from "react";
import Header from "@/components/Header";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6">Welcome to WPThemesPlugins.net. By accessing or purchasing from our website, you agree to the following Terms &amp; Conditions. Please read them carefully before making any purchase.</p>

      <ol className="list-decimal list-inside space-y-6">
        <li>
          <strong>Products and Services</strong>
          <p>WPThemesPlugins.net sells premium WordPress themes and plugins as part of a bundle at a one-time cost of $19.</p>
          <p>Upon successful payment, you will receive an email with a download link and will also see the download link on the payment confirmation page.</p>
          <p>All products are provided in a digital format (downloadable files).
          </p>
        </li>
        <li>
          <strong>Payments</strong>
          <p>Payments are securely processed through Stripe.</p>
          <p>We do not store your payment card details. Stripe handles all sensitive payment information using encrypted connections.</p>
          <p>You must provide a valid email address during checkout to receive your purchase confirmation and download link.</p>
        </li>
        <li>
          <strong>Delivery of Products</strong>
          <p>All purchases are delivered digitally. After completing payment, you will:</p>
          <ol className="list-decimal list-inside ml-6 space-y-2">
            <li>See the download link on the payment confirmation page.</li>
            <li>Receive an email with your purchase confirmation and download link (make sure to check your spam/junk folder if not received).</li>
          </ol>
          <p className="mt-2">If you do not receive the email within 10 minutes, please contact <a href="mailto:support@wpthemesplugins.net" className="text-primary underline">support@wpthemesplugins.net</a>.</p>
        </li>
        <li>
          <strong>Refund Policy</strong>
          <p>Due to the digital nature of our products, all sales are final. We do not offer refunds once the download link has been provided.</p>
          <p>Please review the product description carefully before purchasing. If you face issues with the download link, contact our support team for assistance.</p>
        </li>
        <li>
          <strong>License and Usage</strong>
          <p>The themes and plugins offered in our bundle are for personal or client use.</p>
          <p>You are not allowed to resell, redistribute, or share the downloaded files without prior written permission.</p>
          <p>Unauthorized distribution of the products is a violation of copyright laws.</p>
        </li>
        <li>
          <strong>Account and Email Use</strong>
          <p>We do not require account registration. Only your email address is collected for sending purchase confirmation and download links.</p>
          <p>By purchasing, you agree to receive transactional emails related to your purchase.</p>
        </li>
        <li>
          <strong>Limitation of Liability</strong>
          <p>We are not responsible for any direct or indirect damages arising from the use or inability to use our themes or plugins.</p>
          <p>It is your responsibility to ensure that our products are compatible with your WordPress version and environment.</p>
        </li>
        <li>
          <strong>Changes to Terms</strong>
          <p>We may update these Terms &amp; Conditions from time to time. The latest version will always be available on this page.</p>
        </li>
        <li>
          <strong>Contact Us</strong>
          <p>If you have any questions about these Terms &amp; Conditions, you can contact us:</p>
          <p>Email: <a href="mailto:support@wpthemesplugins.net" className="text-primary underline">support@wpthemesplugins.net</a></p>
          <p>Contact Page: <a href="https://wpthemesplugins.net/contact" className="text-primary underline" target="_blank" rel="noreferrer">https://wpthemesplugins.net/contact</a></p>
        </li>
      </ol>
    </div>
  </div>
);

export default Privacy;