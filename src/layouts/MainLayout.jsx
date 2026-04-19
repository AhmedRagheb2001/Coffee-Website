import { Outlet } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only absolute left-4 top-4 z-[70] rounded-full bg-caramel-500 px-4 py-2 text-sm font-semibold text-espresso-950 focus:not-sr-only"
      >
        Skip to content
      </a>
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.03]" />
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-caramel-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-80 w-80 rounded-full bg-mocha-700/20 blur-3xl" />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
