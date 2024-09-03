import React from "react";
import { FaArrowsToDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-5">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-center text-2xl sm:text-3xl font-bold w-max font-sans tracking-wide">
            COOKIE POLICY
          </h1>
        </div>
        <p>
          <strong>Effective Date: </strong>
          <span>June 1st, 2024</span>
        </p>
        <p className="py-2">
          www.wrightfindermotors.com ("we," "our," or "us") uses cookies and
          similar tracking technologies to enhance your experience on our
          website www.wrightfindermotors.com (the "Site"). This Cookie Policy
          explains what cookies are, how we use them, and your choices regarding
          cookies
        </p>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">1. What Are Cookies?</h1>
          <p>
            Cookies are small text files that are stored on your device
            (computer, tablet, or mobile) when you visit a website. They help
            websites remember your preferences and understand how you interact
            with the site, which allows for an improved user experience.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">2. How We Use Cookies</h1>
          <p>We use cookies for various purposes, including:</p>
          <ul className="px-2 sm:px-7 mt-2 flex flex-col gap-3">
            <li className="flex gap-3">
              <p>
                <strong>Essential Cookies: </strong>
                These cookies are necessary for the Site to function properly.
                They enable basic features such as page navigation and access to
                secure areas of the Site.
              </p>
            </li>
            <li className="flex gap-3">
              <p>
                <strong>Functional Cookies: </strong>
                These cookies allow the Site to remember choices you make (such
                as your username, language, or region) and provide enhanced,
                personalized features.
              </p>
            </li>
            <li className="flex gap-3">
              <p>
                <strong>Targeting/Advertising Cookies: </strong>
                These cookies are used to deliver advertisements that are
                relevant to you and your interests. They also help measure the
                effectiveness of advertising campaigns.
              </p>
            </li>
            <li className="flex gap-3">
              <p>
                <strong>Performance Cookies: </strong>
                These cookies collect information about how you use the Site,
                such as which pages you visit most often. This data helps us
                improve the Site’s performance and your experience.
              </p>
            </li>
            <li className="flex gap-3">
              <p>
                <strong>Essential Cookies: </strong>
                These cookies are necessary for the Site to function properly.
                They enable basic features such as page navigation and access to
                secure areas of the Site.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">3. Third-Party Cookies</h1>
          <p>
            In addition to our own cookies, we may also use third-party cookies
            to report usage statistics of the Site and deliver advertisements on
            and through the Site. These cookies may track your online activities
            over time and across different websites and services.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">
            4. Your Choices Regarding Cookies
          </h1>
          <p>You have the following options to manage or disable cookies:</p>
          <ul className="px-2 sm:px-7 mt-2 flex flex-col gap-3">
            <li className="flex gap-3">
              <p>
                <strong>Browser Settings: </strong>
                Most web browsers allow you to control cookies through their
                settings preferences. You can set your browser to refuse
                cookies, delete cookies, or alert you when cookies are being
                sent. Please refer to your browser help section for information
                on how to manage your cookie preferences.
              </p>
            </li>
            <li className="flex gap-3">
              <p>
                <strong>Opt-Out Links: </strong>
                Some third-party service providers offer opt-out mechanisms
                directly on their websites. For example, you can opt out of
                Google Analytics by installing the Google Analytics Opt-out
                Browser Add-on.
              </p>
            </li>
            <li className="flex gap-3">
              <p>
                <strong>Ad Preferences: </strong>
                You can manage your preferences for online behavioral
                advertising by visiting the Digital Advertising Alliance (DAA)
                WebChoices tool at https://optout.aboutads.info.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">
            5. Changes to This Cookie Policy
          </h1>
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes to our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any changes by posting the
            new Cookie Policy on this page. You are advised to review this
            Cookie Policy periodically for any changes.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">6. Contact Us</h1>
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

export default CookiePolicy;
