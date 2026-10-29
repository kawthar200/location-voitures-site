"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}

        <Link
          href="/"
          className="logo"
          onClick={closeMenu}
        >
          🚗 Location Auto
        </Link>


        {/* MENU DESKTOP */}

        <nav className="desktop-menu">

          <Link href="/">
            Accueil
          </Link>

          <Link href="/voitures">
            Voitures
          </Link>

          <Link href="/a-propos">
            À propos
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-whatsapp"
          >
            WhatsApp
          </a>

        </nav>


        {/* BOUTON MOBILE */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>

      </div>


      {/* MENU MOBILE */}

      {menuOpen && (
        <nav className="mobile-menu">

          <Link
            href="/"
            onClick={closeMenu}
          >
            Accueil
          </Link>

          <Link
            href="/voitures"
            onClick={closeMenu}
          >
            Voitures
          </Link>

          <Link
            href="/a-propos"
            onClick={closeMenu}
          >
            À propos
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>

          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-whatsapp"
            onClick={closeMenu}
          >
            WhatsApp
          </a>

        </nav>
      )}

    </header>
  );
}