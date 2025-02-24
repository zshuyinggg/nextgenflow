import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card-bg py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">NextGenFlow</h3>
            <p className="text-text-secondary mb-4">
              Revolutionizing business operations with AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-secondary hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-secondary hover:text-primary transition-colors">
                  Services & Use Cases
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-text-secondary hover:text-primary transition-colors">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-secondary hover:text-primary transition-colors">
                  Workflow Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-secondary hover:text-primary transition-colors">
                  Custom Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-text-secondary">
                <a href="mailto:admin@nextgenflowllc.com" className="hover:text-primary transition-colors">
                  admin@nextgenflowllc.com
                </a>
              </li>
              <li className="text-text-secondary">
                <a href="tel:+19797395984" className="hover:text-primary transition-colors">
                  (979) 739-5984
                </a>
              </li>
              <li className="text-text-secondary">TX, United States</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-text-secondary">
          <p>© {new Date().getFullYear()} NextGenFlow LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

