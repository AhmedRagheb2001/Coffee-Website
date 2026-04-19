export default function PickupTimeStep({ error, onSelect, pickupSlots, selectedPickupTime }) {
  return (
    <div className="panel p-6 sm:p-8">
      <h2 className="section-title">Choose a pickup time</h2>
      <p className="mt-4 text-sm leading-7 text-cream-300">
        Pick the slot that works best for your day. We will prepare the order just in time.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {pickupSlots.map((slot) => {
          const isSelected = slot === selectedPickupTime;

          return (
            <button
              key={slot}
              type="button"
              onClick={() => onSelect(slot)}
              className={`min-h-16 rounded-[22px] border px-4 py-4 text-left text-sm font-medium transition ${
                isSelected
                  ? "border-caramel-500 bg-caramel-500/12 text-cream-100"
                  : "border-white/10 bg-white/5 text-cream-300 hover:bg-white/8 hover:text-cream-100"
              }`}
            >
              {slot}
            </button>
          );
        })}
      </div>

      {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
