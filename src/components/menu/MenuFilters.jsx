export default function MenuFilters({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={activeCategory === category}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeCategory === category
              ? "bg-caramel-500 text-espresso-950"
              : "border border-white/10 bg-white/6 text-cream-200 hover:bg-white/10 hover:text-cream-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
