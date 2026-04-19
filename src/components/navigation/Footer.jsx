import { FiInstagram, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { footerLinks, visitInfo } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-6">
      <div className="panel grid gap-8 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="eyebrow">Velvet Roast</p>
          <h3 className="font-display text-4xl leading-none">Built for mornings worth slowing down for.</h3>
          <p className="max-w-xl text-cream-300">
            A refined coffee experience with specialty beans, smooth digital ordering, and an atmosphere that feels warm on every screen.
          </p>
        </div>

        <div className="grid gap-4 text-sm text-cream-300 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="font-semibold text-cream-100">Visit</p>
            <p className="flex items-center gap-2"><FiMapPin /> {visitInfo.address}</p>
            <p className="flex items-center gap-2"><FiPhone /> {visitInfo.phone}</p>
            <p className="flex items-center gap-2"><FiInstagram /> @velvetroast.cafe</p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-cream-100">Browse</p>
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="block hover:text-cream-100">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
