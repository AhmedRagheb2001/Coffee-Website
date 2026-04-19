import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "bg-caramel-500 text-espresso-950 hover:bg-caramel-300 hover:-translate-y-0.5",
  secondary:
    "border border-white/12 bg-white/6 text-cream-100 hover:bg-white/10 hover:-translate-y-0.5",
  subtle:
    "bg-transparent text-cream-200 hover:text-cream-100",
};

export default function Button({
  children,
  className = "",
  to,
  href,
  variant = "primary",
  type = "button",
  ...props
}) {
  const baseClassName = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClassName} {...props}>
      {children}
    </button>
  );
}
