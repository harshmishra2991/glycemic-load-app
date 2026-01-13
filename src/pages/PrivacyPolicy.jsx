import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={{ padding: '20px', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
            <h1 className="text-center" style={{ marginBottom: '30px', color: 'var(--color-text-primary)' }}>Privacy Policy</h1>

            <p>
                This website does not require users to create accounts or provide personal information to use its features.
            </p>

            <p>
                We may use third-party services such as Google Analytics and Google AdSense to understand website usage and
                display advertisements. These services may collect non-personal data such as IP address, browser type, and
                usage patterns through cookies.
            </p>

            <p>
                This website does not sell, rent, or share personal information with third parties.
            </p>

            <p>
                By using this website, you consent to the use of cookies and third-party services as described in this policy.
            </p>

            <p>
                If you have questions about this privacy policy, please contact us through the contact page.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
