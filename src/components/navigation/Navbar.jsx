import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { useScrolled } from "../../hooks/useScrolled";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useOrder } from "../../context/OrderContext";
import { navigationLinks } from "../../data/siteContent";

export default function Navbar() {
  const isScrolled = useScrolled();
  const { itemCount } = useOrder();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useBodyScrollLock(isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <motion.header
        animate={{
          y: 0,
          scale: isScrolled ? 0.985 : 1,
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
        className="sticky top-3 z-50 section-shell pt-3"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-[24px] border px-4 py-4 backdrop-blur-xl transition-all duration-300 sm:px-5 ${
            isScrolled
              ? "border-white/12 bg-espresso-900/90 shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
              : "border-white/8 bg-espresso-900/70"
          }`}
        >
          <NavLink to="/" className="flex items-center gap-3" aria-label="Go to Velvet Roast homepage">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-caramel-300 to-caramel-500 font-bold text-espresso-950">
              VR
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cream-100">
                Velvet Roast
              </p>
              <p className="text-xs text-cream-300">Coffee and slow rituals</p>
            </div>
          </NavLink>

          <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/10 text-cream-100"
                      : "text-cream-300 hover:bg-white/8 hover:text-cream-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <NavLink
              to="/order"
              aria-label={`Open order page${itemCount > 0 ? ` with ${itemCount} items in cart` : ""}`}
              className="relative inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-cream-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <FiShoppingBag />
              <span className="hidden sm:inline">Order</span>
              {itemCount > 0 ? (
                <span className="grid h-6 min-w-6 place-items-center rounded-full bg-caramel-500 px-1 text-xs text-espresso-950">
                  {itemCount}
                </span>
              ) : null}
            </NavLink>

            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-cream-100 transition hover:bg-white/10 md:hidden"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-40 bg-black/55 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
              className="fixed inset-x-4 top-24 z-50 space-y-2 rounded-[28px] border border-white/10 bg-espresso-900/95 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl md:hidden"
            >
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? "bg-white/10 text-cream-100"
                        : "text-cream-300 hover:bg-white/8 hover:text-cream-100"
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {link.to === "/order" && itemCount > 0 ? (
                    <span className="rounded-full bg-caramel-500 px-2 py-1 text-xs font-bold text-espresso-950">
                      {itemCount}
                    </span>
                  ) : null}
                </NavLink>
              ))}
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
