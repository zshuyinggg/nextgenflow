import Link from "next/link"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"

export default function Home() {
  return (
    <div className="bg-background text-text">
      {/* Hero Section */}
      <section className="hero-background min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Revolutionize Your <span className="text-primary">Workflow</span> with AI
              </h1>
              <p className="text-xl mb-8 text-text-secondary">
                NextGenFlow delivers cutting-edge AI and software solutions to optimize operations for forward-thinking
                businesses.
              </p>
              <div className="flex space-x-4">

                <Link href="#services" className="btn-primary">
                  Our Services
                </Link>
                <Link href="https://calendly.com/zhusy1997/free-consultation" className="btn-secondary">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-50 floating"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/2 w-24 h-24 bg-purple-500 rounded-full opacity-30 floating"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-green-500 rounded-full opacity-40 floating"
          style={{ animationDelay: "4s" }}
        ></div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-card-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {["AI Integration", "Workflow Optimization", "Custom Software Development"].map((service, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="text-primary text-4xl mb-4">
                  {index === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                <p className="text-text-secondary mb-6">
                  Leverage cutting-edge technology to streamline your operations and drive unprecedented growth in your
                  business.
                </p>
                <Link href="/services" className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the ranks of forward-thinking companies leveraging NextGenFlow's AI solutions to redefine industry
              standards.
            </p>
            <Link
              href="/contact"
              className="bg-white/20 text-white font-semibold py-2 px-6 rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg border border-white/50"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-background opacity-10 rounded-tr-full filter blur-3xl"></div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

