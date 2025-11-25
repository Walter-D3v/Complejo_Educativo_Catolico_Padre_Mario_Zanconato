"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-105">
              <Image src="/logo.png" alt="Logo Zanconato" fill className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xs md:text-base lg:text-lg font-bold text-institutional-navy uppercase tracking-wide leading-tight">
                Complejo Educativo Católico
              </h1>
              <p className="text-xs md:text-sm font-semibold text-institutional-mustard">"Padre Mario Zanconato"</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 lg:gap-2">
            <Link
              href="/"
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-semibold text-institutional-navy hover:text-institutional-mustard hover:bg-white/50 rounded-lg transition-all duration-200 hover:scale-110"
            >
              Inicio
            </Link>
            <Link
              href="/blog"
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-semibold text-institutional-navy hover:text-institutional-mustard hover:bg-white/50 rounded-lg transition-all duration-200 hover:scale-110"
            >
              Blog
            </Link>
            <Link
              href="/academics"
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-semibold text-institutional-navy hover:text-institutional-mustard hover:bg-white/50 rounded-lg transition-all duration-200 hover:scale-110"
            >
              Oferta Académica
            </Link>
            <Link
              href="/about"
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-semibold text-institutional-navy hover:text-institutional-mustard hover:bg-white/50 rounded-lg transition-all duration-200 hover:scale-110 "
            >
              Nosotros
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-institutional-navy hover:text-institutional-mustard transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2 animate-fade-in">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-institutional-navy hover:text-institutional-mustard hover:bg-white/50 rounded-lg transition-all duration-200"
            >
              Inicio
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-institutional-navy hover:text-institutional-mustard hover:bg-white/50 rounded-lg transition-all duration-200"
            >
              Blog
            </Link>
            <Link
              href="/academics"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-institutional-navy hover:text-institutional-mustard hover:bg-white/50 rounded-lg transition-all duration-200"
            >
              Oferta Académica
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-institutional-navy hover:text-institutional-mustard hover:bg-white/50 rounded-lg transition-all duration-200"
            >
              Nosotros
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
