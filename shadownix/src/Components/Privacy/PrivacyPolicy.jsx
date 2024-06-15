import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-5">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-center text-3xl font-bold w-max border-b-2 border-b-black font-sans tracking-wide">
            PRIVACY POLICY
          </h1>
        </div>
        <p>
          <strong>Effective Date: </strong>
          <span>June 1st, 2024</span>
        </p>
        <p className="py-2">
          www.wrightfindermotors.com ("we," "our," or "us") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website www.wrightfindermotors.com (the "Site"). Please read this
          privacy policy carefully. If you do not agree with the terms of this
          privacy policy, please do not access the site.
        </p>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">1. Information We Collect</h1>
          <div className="flex flex-col gap-7">
            <p className="flex flex-col gap-1">
              <strong>Personal Data</strong>
              We may collect personally identifiable information, such as your
              name, email address, phone number, and demographic information,
              such as your age, gender, and interests, that you voluntarily give
              to us when you register with the Site or when you choose to
              participate in various activities related to the Site, such as
              online chat and message boards.
            </p>
            <p className="flex flex-col gap-1">
              <strong>Derivative Data</strong>
              Information our servers automatically collect when you access the
              Site, such as your IP address, your browser type, your operating
              system, your access times, and the pages you have viewed directly
              before and after accessing the Site.
            </p>
            <p className="flex flex-col gap-1">
              <strong>Financial Data</strong>
              Financial information, such as data related to your payment method
              (e.g., valid credit card number, card brand, expiration date) that
              we may collect when you purchase, order, return, exchange, or
              request information about our services from the Site. We store
              only very limited, if any, financial information that we collect.
              Otherwise, all financial information is stored by our payment
              processor, [Payment Processor Name], and you are encouraged to
              review their privacy policy and contact them directly for
              responses to your questions.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">2. Use of Your Information</h1>
          <p>We use information collected about you via the Site to:</p>
          <ul className="px-2 sm:px-7 mt-2 flex flex-col gap-3">
            <li>• Create and manage your account.</li>
            <li>
              • Process your transactions and deliver the services you request.
            </li>
            <li>• Email you regarding your account or order.</li>
            <li>• Increase the efficiency and operation of the Site.</li>
            <li>
              • Monitor and analyze usage and trends to improve your experience
              with the Site.
            </li>
            <li>
              • Prevent fraudulent transactions, monitor against theft, and
              protect against criminal activity.
            </li>
            <li>• Assist law enforcement and respond to subpoenas.</li>
            <li>
              • Compile anonymous statistical data and analysis for use
              internally or with third parties. Increase the efficiency and
              operation of the Site.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">
            3. Disclosure of Your Information
          </h1>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <div className="flex flex-col gap-7">
            <p className="flex flex-col gap-1">
              <strong>By Law or to Protect Rights</strong>
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation.
            </p>
            <p className="flex flex-col gap-1">
              <strong>Third-Party Service Providers</strong>
              We may share your information with third parties that perform
              services for us or on our behalf, including payment processing,
              data analysis, email delivery, hosting services, customer service,
              and marketing assistance.
            </p>
            <p className="flex flex-col gap-1">
              <strong>Business Transfers</strong>
              We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to
              another company.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">4. Security of Your Information</h1>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">5. Policy for Children</h1>
          <p>
            We do not knowingly solicit information from or market to children
            under the age of 13. If we learn we have collected personal
            information from a child under age 13 without verification of
            parental consent, we will delete that information as soon as
            possible. If you believe we might have any information from or about
            a child under 13, please contact us at [
            <span className="text-red-500">wrightfindermotors@gmail.com</span>
            ].
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">6. Your Privacy Rights</h1>
          <p>
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. www.wrightfindermotors.com aims to
            take reasonable steps to allow you to correct, amend, delete, or
            limit the use of your Personal Data.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">
            7. Changes to This Privacy Policy
          </h1>
          <p>
            We may update this Privacy Policy from time to time in order to
            reflect changes to our practices or for other operational, legal, or
            regulatory reasons.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">8. Contact Us</h1>
          <p>
            If you have any questions or concerns about our use of cookies,
            please contact us at:
          </p>
          <Link className="text-red-500" to={"/"}>
            www.wrightfindermotors.com
          </Link>
          <h6>Southwestern and Northeast, Ohio</h6>
          <p className="flex gap-1">
            <span className="font-semibold">Email: </span>
            <Link to={"mailto:wrightfindermotors@gmail.com"}>
              wrightfindermotors@gmail.com
            </Link>
          </p>
          <p className="flex gap-1">
            <span className="font-semibold">Phone: </span>
            <div className="flex flex-col gap-1">
              <Link to={"tel:+19378388616"}>+1937-838-8616</Link>
              <Link to={"tel:+19374754737"}>+1937-475-4737</Link>
              <Link to={"tel:+19372706688"}>+1937-270-6688</Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
