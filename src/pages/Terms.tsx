import React from "react";
import Header from "@/components/Header";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-6">Before you proceed to register, purchase, and download any products for personal or business use, it's essential that you carefully read, fully comprehend, and agree to all the terms and conditions outlined below.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Website Usage and Software Access</h2>
      <p className="mb-4">The website <a href="https://wpthemeaccess.com" className="text-primary underline">https://wpthemeaccess.com</a> offers access to various software products, provided you adhere to all the stipulated terms and conditions. If you are not in agreement with these terms, kindly refrain from using our website and promptly exit.</p>

      <ol className="list-decimal list-inside space-y-6">
        <li>
          <strong>Licensing and DMCA</strong>
          <p>All digital products accessible on the website are made available under the GNU General Public License and are crafted by one or more third-party developers.</p>
          <p>These products, along with any other materials featured on the site, are exclusively intended for personal usage. If you intend to employ these products for commercial purposes, you must directly acquire them from the developers. You may utilize these products on client websites without engaging in direct reselling (charging for the plugin/theme).</p>
          <p>We do not provide licenses or trial/commercial keys required for the automatic updating of these products. All the products showcased on the website function fully and can be employed on an unlimited number of websites (domains) without the need for license keys.</p>
          <p>The utilization of any graphics (such as images, icons, photos, videos) from the demo content for any purpose is strictly prohibited. Carefully review the license terms prior to using the product.</p>
        </li>
        <li>
          <strong>Product Delivery</strong>
          <p>Upon confirming payment, the products you purchase can be downloaded from your account page under the "Downloads" section. Typically, this process takes around 10-15 minutes after payment completion. Additionally, you will receive an email containing instructions for product download. Kindly provide a valid email address during the registration process.</p>
          <p>In the case of using PayPal electronic checks (PayPal e-Check), order processing may require a few days.</p>
          <p>All digital products come with the option of free downloads and updates for one year from the date of purchase. Alternatively, lifetime access is granted if you choose the lifetime package.</p>
        </li>
        <li>
          <strong>Payment</strong>
          <p><u>General Payment Terms:</u> By selecting a product or service, you are in agreement to make a one-time payment to https://wpthemeaccess.com for the selected digital goods. We do not offer subscription or recurring payment options. There will be no subsequent charges. Payments are non-refundable.</p>
        </li>
        <li>
          <strong>Refund Policy</strong>
          <p>All sales are considered final, and refunds will only be considered in cases where the digital product is entirely unusable.</p>
          <p>In instances where a digital product is unusable, we will take the necessary time to attempt repairs. If the issue cannot be resolved, a refund will be issued.</p>
        </li>
        <li>
          <strong>Support Policy</strong>
          <p>We provide fundamental technical support in the form of consultations. For example, we can assist with the installation of digital products, but we do not engage in freelance work.</p>
          <p>If you require installation or setup services for products obtained from our website, kindly seek assistance from freelancers.</p>
        </li>
        <li>
          <strong>Privacy Policy</strong>
          <p>Any information provided by the buyer will solely be used for transaction-related purposes, delivery, and notifications regarding new software products, as well as solutions for any customer service matters.</p>
          <p>By registering on the website, you consent to receiving communications via email (newsletter subscription). If you wish to discontinue receiving these messages, please inform us. Following your request, we will remove your email address from the mailing list within 24 hours.</p>
        </li>
        <li>
          <strong>Guarantees</strong>
          <p>We assure that any digital product purchased from the website is devoid of malware, viruses, or advertisements. However, we cannot guarantee that the products acquired from the website will function exactly as you desire; there's no assurance of seamless operation following new updates, as there might be new bugs identified.</p>
          <p>All digital products are provided "as is." We disclaim any liability for any site damage resulting from the use of downloaded products.</p>
        </li>
        <li>
          <strong>Terms and Conditions</strong>
          <p>The website reserves the right to alter or modify the terms and conditions without prior notification. We also retain the right to modify the terms of digital product sales and subscriptions. At any time, any plugins/themes may be removed or replaced by other alternatives. We assume no responsibility towards you or any third party in the event of changes in the terms of digital product sales or subscriptions. We hold the right to terminate user accounts in cases of rule violations. Sharing or reselling access to your user account and associated files is strictly prohibited.</p>
        </li>
      </ol>
    </div>
  </div>
);

export default Terms; 