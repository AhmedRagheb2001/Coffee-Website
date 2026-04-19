import brandPattern from "../assets/brand-pattern.svg";
import { aboutInterior, galleryEvening, heroLounge, latteCloseup } from "../assets/images";

export const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/order", label: "Order" },
];

export const footerLinks = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/order", label: "Order ahead" },
];

export const heroContent = {
  badge: "Crafted in Bucharest",
  title: "Coffee designed like an atmosphere, not just a drink.",
  description:
    "Velvet Roast blends specialty coffee, cinematic interiors, and a smooth digital ordering experience into one warm, modern cafe brand.",
  primaryAction: { label: "Explore Menu", href: "/menu" },
  secondaryAction: { label: "Order Ahead", href: "/order" },
  stats: [
    { value: "12", label: "seasonal micro-lots" },
    { value: "4.9", label: "guest rating" },
    { value: "7AM", label: "doors open daily" },
  ],
  image: heroLounge,
  accentImage: brandPattern,
  visitHighlights: [
    { title: "Daily from 7:00 AM to 9:00 PM", icon: "clock" },
    { title: "14 Amber Lane, central Bucharest", icon: "map" },
    { title: "Reserve tasting sessions on weekends", icon: "star" },
  ],
};

export const brandHighlights = [
  {
    title: "Layered, tactile interiors",
    description: "Warm wood tones, soft brass highlights, and natural light shape every seat in the room.",
  },
  {
    title: "Barista-led tasting culture",
    description: "Our team guides guests through origins, roast character, and pairings with an easy, welcoming tone.",
  },
  {
    title: "Fast ordering, calm experience",
    description: "Browse, filter, and build an order online before you even arrive at the counter.",
  },
];

export const aboutStory = {
  eyebrow: "About us",
  title: "Built for people who notice details.",
  description:
    "Velvet Roast started as a small roast lab and grew into a neighborhood coffee house where every decision, from bean sourcing to furniture selection, supports a slower, richer ritual.",
  image: aboutInterior,
  gallery: [galleryEvening, latteCloseup],
  milestones: [
    { value: "2019", label: "First roast lab opened" },
    { value: "28", label: "Seats designed for slow stays" },
    { value: "100%", label: "Ethically sourced beans" },
  ],
};

export const visitInfo = {
  address: "14 Amber Lane, Bucharest, Romania",
  phone: "+40 721 555 014",
  email: "hello@velvetroast.cafe",
  hours: "Open daily from 7:00 AM to 9:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=44.4268,26.1025&z=15&output=embed",
};

export const testimonials = [
  {
    quote: "The online ordering feels premium, and the coffee tastes exactly as polished as the brand looks.",
    author: "Mara I.",
  },
  {
    quote: "The design is warm without being old-fashioned. It feels like a modern coffee magazine brought to life.",
    author: "Alex D.",
  },
];

export const contactContent = {
  eyebrow: "Contact",
  title: "Reach out, reserve a tasting, or ask about private events.",
  description:
    "The contact experience is now more functional, more accessible, and ready to connect to a real endpoint later without changing the UI structure.",
  formTitle: "Send a message",
  successMessage: "Message received. We will get back to you shortly.",
  errorMessage:
    "We could not send your message right now. Please try again in a moment.",
};

export const orderContent = {
  eyebrow: "Order ahead",
  title: "A fuller checkout flow built on top of the existing cart.",
  description:
    "Review your order, add guest details, choose a pickup time, and confirm without losing the premium visual feel of the site.",
  steps: [
    { id: 1, label: "Cart review" },
    { id: 2, label: "Customer details" },
    { id: 3, label: "Pickup time" },
    { id: 4, label: "Confirmation" },
  ],
  pickupSlots: [
    "Today • 10:15 AM",
    "Today • 10:45 AM",
    "Today • 11:15 AM",
    "Today • 11:45 AM",
    "Today • 12:15 PM",
    "Today • 12:45 PM",
  ],
};

export const seoContent = {
  home: {
    title: "Velvet Roast | Modern Coffee House in Bucharest",
    description:
      "Velvet Roast is a premium coffee house website with a warm editorial feel, specialty drinks, and a smooth digital ordering experience.",
    image: heroLounge,
    path: "/",
  },
  menu: {
    title: "Menu | Velvet Roast",
    description:
      "Browse signature coffees, espresso drinks, brew bar specials, and cold drinks from Velvet Roast.",
    image: latteCloseup,
    path: "/menu",
  },
  about: {
    title: "About | Velvet Roast",
    description:
      "Discover the story, values, and interior atmosphere behind Velvet Roast, a modern high-end coffee brand.",
    image: aboutInterior,
    path: "/about",
  },
  contact: {
    title: "Contact | Velvet Roast",
    description:
      "Get in touch with Velvet Roast for reservations, tastings, and private coffee experiences in Bucharest.",
    image: aboutInterior,
    path: "/contact",
  },
  order: {
    title: "Order Ahead | Velvet Roast",
    description:
      "Build your order, choose a pickup time, and confirm your coffee pickup online with Velvet Roast.",
    image: latteCloseup,
    path: "/order",
  },
  orderSuccess: {
    title: "Order Confirmed | Velvet Roast",
    description:
      "Your Velvet Roast pickup order has been confirmed and is now being prepared.",
    image: latteCloseup,
    path: "/order/success",
  },
};

export const coffeeShopStructuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Velvet Roast",
  image: heroLounge,
  telephone: visitInfo.phone,
  email: visitInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Amber Lane",
    addressLocality: "Bucharest",
    addressCountry: "RO",
  },
  servesCuisine: ["Coffee", "Pastry", "Desserts"],
  priceRange: "$$",
  openingHours: "Mo-Su 07:00-21:00",
  url: "/",
};
