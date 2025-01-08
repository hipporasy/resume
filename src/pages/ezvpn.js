import React from 'react';
const PrivacyPolicy = () => {
  const contactEmail = 'hipporasy@gmail.com';
  const effectiveDate = 'January 07, 2025';
  const appName = 'EzVPN';
  const developerName = 'Ez4Kh';

  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> {effectiveDate}
      </p>
      <p>
        This Privacy Policy applies to the app <strong>{appName}</strong>, developed and maintained
        by <strong>{developerName}</strong>.
      </p>

      <p>
        This Privacy Policy explains our practices concerning the handling of any information
        associated with the use of our app, emphasizing our non-collection of personal data.
      </p>
      <h2 id="no-personal-data-collection">No Personal Data Collection</h2>
      <p>
        The App is designed to be used without collecting any personal information from our users.
        Our goal is to provide an enriching, educational, and entertaining experience without
        compromising the privacy of our users.
      </p>
      <p>
        <strong>Information We Do Not Collect:</strong>
      </p>
      <ul>
        <li>Personal identifiers such as names, email addresses, or location data</li>
        <li>Usage data that could personally identify the user</li>
        <li>Any form of sensitive information</li>
      </ul>

      <h2 id="use-of-non-personal-data">Use of Non-Personal Data</h2>
      <p>
        We may collect non-personal data that does not identify you. Such information may include:
      </p>
      <ul>
        <li>
          Technical information about your device and software for ensuring compatibility and
          improving app performance
        </li>
        <li>Aggregate usage data to analyze app usage patterns and improve user experience</li>
      </ul>

      <section>
        <h2>Local Data Handling</h2>
        <p>
          <strong>Storage of Information:</strong> Our app stores certain information locally on
          your device to enhance your user experience. This includes data such as stories you have
          read and stories you have marked as favorites, among other personalized settings and
          preferences.
        </p>
        <p>
          <strong>Use of Local Data:</strong> The local data stored by Our app is used solely for
          the purpose of providing a customized and efficient user experience. This data allows the
          app to quickly retrieve your preferences and history, enabling features such as resuming
          where you left off in a story and accessing your favorite stories easily.
        </p>
        <p>
          <strong>Removal of Local Data:</strong> When Our app is uninstalled from your device, all
          locally stored data, including your read history and favorites, is automatically removed
          from the device. This process is handled by your device's operating system and does not
          require any additional action from you.
        </p>
        <p>
          Please note that Our app does not transmit this locally stored data to external servers or
          share it with third parties. It is kept on your device and remains under your control.
        </p>
      </section>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify users of any changes by
        posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Protecting the privacy of young children is especially important. Our app does not collect
        or solicit personal information from anyone under the age of 13 or knowingly allow such
        persons to use our app. If we become aware that we have collected personal information from
        a child under age 13 without verification of parental consent, we take steps to remove that
        information.
      </p>

      <h2>Subscription Information</h2>
      <p>
        Our app offers a premium subscription service, which provides access to exclusive content
        and features, enhancing the educational experience with interactive stories and an ad-free
        environment.
      </p>
      <p>
        All payments for the premium subscription are processed securely by the Apple App Store. Our
        app does not collect or have access to any credit card information or payment details.
        Payment transactions are subject to the terms, conditions, and privacy policies of the Apple
        App Store.
      </p>
      <p>
        Subscriptions are managed directly through your Apple App Store account settings. Users can
        manage their subscriptions, including cancellation and auto-renewal preferences, by visiting
        their account settings on the App Store after purchase.
      </p>
      <p>
        While Our app does not collect personal payment information, we do collect and store
        information related to your subscription status, such as the start and end dates of the
        subscription, and subscription type (weekly, monthly, or annual). This information is used
        solely for managing access to Our app PRO features and communicating with you about your
        subscription.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to
        contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
