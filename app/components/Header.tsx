"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300">
            NextGenFlow
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/services" className="text-white hover:text-primary transition-colors">
              Services & Use Cases
            </Link>
            <Link href="/about" className="text-white hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/use-cases">Use Cases</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
            <MobileNavLink href="/about">About Us</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-white hover:text-blue-200 transition duration-300">
    {children}
  </Link>
)

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="block text-white hover:text-blue-200 transition duration-300 py-2">
    {children}
  </Link>
)

export default Header

