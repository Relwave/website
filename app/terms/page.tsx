import { Header } from '@/components/header'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using RelWave, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. License and Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              RelWave grants you a limited, non-exclusive, non-transferable license to use our platform for your personal and business database management needs, subject to these Terms of Service. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>Modify or create derivative works of the software</li>
              <li>Reverse engineer, decompile, or disassemble the application</li>
              <li>Rent, lease, or lend the software</li>
              <li>Use the software for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Distribute or resell the software</li>
              <li>Remove or alter any proprietary notices or labels</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate information during registration and to notify us of any unauthorized use of your account. You are liable for all actions taken through your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Database Credentials and Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>Maintaining secure database credentials</li>
              <li>Backing up your database data</li>
              <li>Ensuring compliance with database licensing agreements</li>
              <li>Complying with applicable data protection and privacy laws</li>
              <li>Having proper authorization to access and manage databases</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              RelWave is not responsible for data loss, corruption, or unauthorized access resulting from your actions or negligence.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed">You agree not to use RelWave:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>For any illegal activity or purpose</li>
              <li>To harass, threaten, or intimidate others</li>
              <li>To transmit malware, viruses, or harmful code</li>
              <li>To probe, scan, or test security vulnerabilities</li>
              <li>To collect or track personal information of others</li>
              <li>To spam or send unsolicited communications</li>
              <li>To violate any applicable laws or regulations</li>
              <li>To infringe on intellectual property rights</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              RelWave and its content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by RelWave, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              RELWAVE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              IN NO EVENT SHALL RELWAVE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFIT, DATA, OR REVENUE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              RelWave may integrate with third-party services and databases. We are not responsible for the availability, accuracy, or functionality of these third-party services. Your use of third-party services is governed by their respective terms and conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless RelWave and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the service or violation of these terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">11. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason whatsoever, including if you breach these Terms of Service. Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">12. Modifications to Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the service (or any part thereof) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction where RelWave is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">14. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall remain in effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">15. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and RelWave regarding your use of the service and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">16. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms. We encourage you to review these terms periodically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">17. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
              <p className="font-semibold">RelWave Legal</p>
              <p>Email: <a href="mailto:opensourceyash@gmail.com" className="text-primary hover:underline">opensourceyash@gmail.com</a></p>
              <p>GitHub: <a href="https://github.com/relwave" className="text-primary hover:underline">github.com/relwave</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
