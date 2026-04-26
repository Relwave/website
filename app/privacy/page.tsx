import { Header } from '@/components/header'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              RelWave ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our database management and visualization platform, including our website and desktop applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Personal Information You Provide:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account registration data (name, email, password)</li>
                  <li>Database connection credentials (stored encrypted locally)</li>
                  <li>Profile information and preferences</li>
                  <li>Communication when you contact us for support</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Information Collected Automatically:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usage analytics (features used, interactions)</li>
                  <li>Device information (OS, browser, application version)</li>
                  <li>IP address and approximate location</li>
                  <li>Performance metrics and error logs</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">We use the collected information for:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending technical notices and support messages</li>
              <li>Responding to your inquiries and requests</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Detecting and preventing fraud or security issues</li>
              <li>Complying with legal obligations</li>
              <li>Marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Data Storage and Local Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              RelWave is designed with privacy in mind. Your database connection credentials are stored encrypted on your local device, not on our servers. Database queries and data processing primarily occur on your local machine. We do not store or have access to your database content unless explicitly shared for support purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information. We may share information only in these circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>With service providers who assist in our operations (e.g., hosting, analytics)</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement comprehensive security measures including encryption (SSL/TLS), secure authentication, and regular security audits. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>Access, review, and correct your personal information</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt-out of marketing communications</li>
              <li>Control cookie preferences</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Retention of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You can request deletion at any time, subject to legal retention requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using RelWave, you consent to such transfers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              RelWave is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or by posting the updated policy on our website. Your continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
              <p className="font-semibold">RelWave Privacy Team</p>
              <p>Email: <a href="mailto:opensourceyash@gmail.com" className="text-primary hover:underline">opensourceyash@gmail.com</a></p>
              <p>GitHub: <a href="https://github.com/relwave" className="text-primary hover:underline">github.com/relwave</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
