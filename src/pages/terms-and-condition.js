import React from 'react';
const TermsAndCondition = () => {

    const contactEmail = "hipporasy@gmail.com";
    const lastUpdated = "February 24, 2024";
    return <div>
        <h1>
            Terms of Service and End User License Agreement (EULA)
        </h1>
        <p><strong>Last Updated:</strong> {lastUpdated}</p>

        <section>
            <h2>Introduction</h2>
            <p>
                These Terms of Service, alongside the End
                User License Agreement ("EULA"), govern your access to and use
                of our app, provided by Marasy Phi ("I" or "me"). By
                downloading, installing, or using our app, you agree to be bound
                by these terms. If you do not agree to all the terms and
                conditions, you may not use or access the services.
            </p>
        </section>

        <section>
            <h2>1. License Grant</h2>
            <p>
                I grant you a revocable, non-exclusive, non-transferable,
                limited license to download, install, and use our app
                strictly in accordance with the terms of this Agreement. This
                license is for the sole purpose of enabling you to use and enjoy
                the benefit of the Service as provided by me, in the manner
                permitted by these Terms.
            </p>
            <p>
                <strong>Restrictions:</strong> You agree not to, and will not permit
                others to license, sell, rent, lease, assign, distribute, transmit,
                host, outsource, disclose, or otherwise commercially exploit the
                Service; modify, make derivative works of, disassemble, decrypt,
                reverse compile, or reverse engineer any part of the Service; remove,
                alter, or obscure any proprietary notice of mine or my affiliates,
                partners, suppliers, or the licensors of the Service.
            </p>
        </section>
        <section>
            <h2>2. Intellectual Property</h2>
            <p>
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                Marasy Phi and its licensors.
            </p>
        </section>
        <section>
            <h2>3. User Content</h2>
            <p>
                Our app may allow you to post, link, store, share, and otherwise
                make available certain information, text, graphics, videos, or
                other material ("User Content"). You are responsible for the
                User Content that you post, including its legality, reliability,
                and appropriateness.
            </p>
        </section>
        <section>
            <h2>4. Subscriptions</h2>
            <p>
            Our app may offer subscription-based access to its premium
                features. All payments are processed securely by the Apple App
                Store, and our app does not collect or have access to any
                payment details.
            </p>
        </section>

        <section>
            <h2>5. Disclaimer</h2>
            <p>
                The EduTail app relies on Artificial Intelligence (AI) to
                generate educational and storytelling content. While we strive
                for accuracy and relevance in the content provided through AI,
                there may be inaccuracies, inconsistencies, or errors. Users are
                advised to use their discretion and engage actively with the
                content. Feedback on AI-generated content can be sent to {contactEmail}.
            </p>
        </section>

        <section>
            <h2>6. Limitations</h2>
            <p>
                In no event shall I, Marasy Phi, be liable for any damages
                arising out of the use or inability to use the materials on
                our app. The Service is provided 'as is,' without warranty
                of any kind.
            </p>
        </section>

        <section>
            <h2>7. Revisions and Errata</h2>
            <p>
                The materials appearing on our app could include errors. I
                do not warrant that any of the materials on the app are
                accurate, complete, or current. I may make changes to the
                materials contained on the app at any time without notice.
            </p>
        </section>

        <section>
            <h2>8. Changes to Terms</h2>
            <p>
                I reserve the right, at my sole discretion, to modify or replace
                these Terms at any time. If a revision is material, I will
                provide at least 7 days' notice before any new terms taking
                effect.
            </p>
        </section>

        <section>
            <h2>9. Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact me
                at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
        </section>
    </div>
}

export default TermsAndCondition;