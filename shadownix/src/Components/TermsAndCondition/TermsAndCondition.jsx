import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-5">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-center text-3xl font-bold w-max border-b-2 border-b-black font-sans tracking-wide">
            TERMS AND CONDITIONS
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
          <h1 className="text-lg font-bold">1. Use of the Site</h1>
          <div className="flex flex-col gap-7">
            <p className="flex flex-col gap-1">
              <strong>Eligibility</strong>
              You must be at least 18 years old to use the Site. By using the
              Site, you represent and warrant that you are at least 18 years old
              and have the legal capacity to agree to these Terms.
            </p>
            <div>
              <p className="flex flex-col gap-1">
                <strong>User Conduct</strong>
                You agree to use the Site only for lawful purposes. You are
                prohibited from:
              </p>
              <ul>
                <li>
                  • Using the Site in any way that could damage, disable,
                  overburden, or impair the Site.
                </li>
                <li>
                  • Using any automated system or software to extract data from
                  the Site for commercial purposes without our express written
                  consent.
                </li>
                <li>
                  • Attempting to gain unauthorized access to any portion of the
                  Site or any systems or networks connected to the Site.
                </li>
                <li>
                  • Using the Site to harass, abuse, or harm another person.
                </li>
              </ul>
            </div>
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

        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">2. Intellectual Property</h1>
          <div className="flex flex-col gap-7">
            <p className="flex flex-col gap-1">
              <strong>Ownership</strong>
              All content, features, and functionality on the Site, including
              text, graphics, logos, images, and software, are the exclusive
              property of and are protected by intellectual property laws. You
              may not reproduce, distribute, modify, create derivative works of,
              publicly display, publicly perform, republish, download, store, or
              transmit any of the material on our Site without our prior written
              consent.
            </p>
            <p className="flex flex-col gap-1">
              <strong>Trademarks</strong>
              The trademarks, logos, and service marks displayed on the Site are
              the property of Alleviacares.com. You are prohibited from using
              such marks without our prior written consent.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">3. Disclaimer of Warranties</h1>
          <p>
            The Site is provided on an "as-is" and "as-available" basis. We do
            not warrant that the Site will be uninterrupted, error-free, or free
            of viruses or other harmful components. We disclaim all warranties,
            express or implied, including, but not limited to, implied
            warranties of merchantability and fitness for a particular purpose.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">4. Limitation of Liability</h1>
          <p>
            In no event shall www.wrightfindermotors.com, its affiliates, or
            their respective directors, officers, employees, agents, or
            licensors be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your
            use of, or inability to use, the Site.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">5. Indemnification</h1>
          <p>
            You agree to indemnify, defend, and hold harmless
            www.wrightfindermotors.com, its affiliates, and their respective
            directors, officers, employees, agents, and licensors from and
            against any and all claims, liabilities, damages, losses, costs,
            expenses, or fees (including reasonable attorneys' fees) arising
            from your use of the Site or your violation of these Terms.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">
            6. Governing Law and Jurisdiction
          </h1>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Ohio, without regard to its conflict of law
            principles. Any legal suit, action, or proceeding arising out of or
            related to these Terms or the Site shall be instituted exclusively
            in the federal or state courts located in Dayton, Ohio.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">7. Termination</h1>
          <p>
            We reserve the right, in our sole discretion, to terminate or
            suspend your access to all or part of the Site for any reason,
            including, without limitation, any violation of these Terms, without
            notice or liability.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">8. Changes to These Terms</h1>
          <p>
            We may update these Terms from time to time in order to reflect
            changes to our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any changes by posting the
            new Terms on this page. You are advised to review these Terms
            periodically for any changes.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">9. Third-Party Links</h1>
          <p>
            The Site may contain links to third-party websites and services that
            are not owned or controlled by www.wrightfindermotors.com. We have
            no control over, and assume no responsibility for, the content,
            privacy policies, or practices of any third-party websites or
            services. You acknowledge and agree that www.wrightfindermotors.com
            shall not be responsible or liable, directly or indirectly, for any
            damage or loss caused or alleged to be caused by or in connection
            with use of or reliance on any such content, goods, or services
            available on or through any such websites or services.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">10. Entire Agreement</h1>
          <p>
            These Terms constitute the entire agreement between you and
            www.wrightfindermotors.com regarding the use of the Site and
            supersede all prior and contemporaneous understandings, agreements,
            representations, and warranties, both written and oral, regarding
            the Site.
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

export default TermsAndCondition;
