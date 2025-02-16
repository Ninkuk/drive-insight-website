export default function Privacy() {
    return (
        <div className="container mx-auto flex flex-col gap-10 lg:px-60">
            <small>Date of Last Revision: February 12, 2025</small>
            <h1>Privacy Policy</h1>

            <div className="flex flex-col gap-2">
                <h2>1. Introduction</h2>
                <p>
                    At Drive Insight, we are committed to transparency and
                    ensuring that you have complete control over your data. This
                    document provides clarity about how your data is handled,
                    what it is used for, and our commitment to your privacy and
                    security.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2>2. Data Collection and Use</h2>
                <p>
                    We collect data through our Velocity 1.0 (OBD2) device to
                    analyze driving habits and provide you with valuable
                    insights. The data collected includes, but is not limited
                    to:
                </p>
                <ul>
                    <li>Driving speed</li>
                    <li>Braking patterns</li>
                    <li>Acceleration patterns</li>
                    <li>Engine patterns</li>
                </ul>
                <p>
                    All collected data is stored solely on your mobile device.
                    We do not collect or store any personal data on our servers.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2>3. Data Security</h2>
                <p>
                    We take data security seriously and implement strict
                    measures to ensure your data is protected. As the data is
                    stored only on your mobile device, the security of this data
                    is directly tied to the security features of your phone.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2>4. No Wi-Fi or Internet Required</h2>
                <p>
                    The Drive Insight app does not require a Wi-Fi connection
                    for basic functionality. This means you can use the app in
                    any location without needing to be connected to the
                    internet. Some optional features may require an internet
                    connection, but they are not necessary for the core
                    experience.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2>5. Liability Disclaimer</h2>
                <p>
                    Drive Insight is not liable for any vehicle damage or
                    personal injury resulting from the use of the app or the
                    Velocity 1.0 (OBD2) device. The app is intended to provide
                    feedback on driving behavior only.
                </p>
                <p>
                    Drive Insight is not responsible for any accidents or
                    mishaps caused during driving. Drivers must always maintain
                    full control of their vehicle and adhere to road safety
                    laws.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2>6. Consent and Control</h2>
                <p>
                    By using Drive Insight, you give us consent to collect and
                    analyze driving data as outlined above. You can opt out of
                    data collection at any time by disabling the app or
                    disconnecting the Velocity 1.0 (OBD2) device. However, doing
                    so may limit some features of the app.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2>7. Changes to the Transparency Document</h2>
                <p>
                    We may update this Transparency Document from time to time
                    to reflect changes in our practices or services. When we do,
                    we will post the updated version in the app or on our
                    website.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2>8. Contact Information</h2>
                <p>
                    If you have any questions or concerns about our data
                    practices, please reach out to us at
                    <a href="mailto:contact@mydriveinsight.com">
                        contact@mydriveinsight.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
