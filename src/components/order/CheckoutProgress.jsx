export default function CheckoutProgress({ currentStep, steps }) {
  return (
    <ol className="grid gap-3 md:grid-cols-4" aria-label="Checkout progress">
      {steps.map((step) => {
        const isActive = step.id === currentStep;
        const isComplete = step.id < currentStep;

        return (
          <li
            key={step.id}
            className={`rounded-[24px] border px-4 py-4 transition ${
              isActive
                ? "border-caramel-500 bg-caramel-500/12"
                : "border-white/10 bg-white/5"
            }`}
          >
            <span className="text-xs uppercase tracking-[0.24em] text-caramel-300">
              {isComplete ? "Done" : `Step ${step.id}`}
            </span>
            <p className="mt-2 text-sm font-semibold text-cream-100">{step.label}</p>
          </li>
        );
      })}
    </ol>
  );
}
