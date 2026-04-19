export default function CustomerDetailsStep({ errors, onChange, values }) {
  return (
    <div className="panel p-6 sm:p-8">
      <h2 className="section-title">Customer details</h2>
      <p className="mt-4 text-sm leading-7 text-cream-300">
        We only use these details to prepare your pickup and contact you if anything changes.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-cream-100">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={onChange}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-cream-100"
            placeholder="Your full name"
          />
          {errors.fullName ? (
            <p id="fullName-error" className="mt-2 text-sm text-red-300">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream-100">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-cream-100"
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-300">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-cream-100">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-cream-100"
            placeholder="+40 7xx xxx xxx"
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-2 text-sm text-red-300">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="notes" className="mb-2 block text-sm font-medium text-cream-100">
            Order notes
          </label>
          <input
            id="notes"
            name="notes"
            value={values.notes}
            onChange={onChange}
            className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-cream-100"
            placeholder="Optional preferences"
          />
        </div>
      </div>
    </div>
  );
}
