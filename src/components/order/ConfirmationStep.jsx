export default function ConfirmationStep({
  cartItems,
  customerDetails,
  pickupTime,
  serviceFee,
  subtotal,
  total,
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="panel p-6 sm:p-8">
        <h2 className="section-title">Confirm your order</h2>
        <div className="mt-8 space-y-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-[24px] border border-white/8 bg-white/5 px-4 py-4"
            >
              <div>
                <p className="text-base font-semibold text-cream-100">{item.name}</p>
                <p className="text-sm text-cream-300">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="text-sm font-semibold text-caramel-300">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="panel p-6">
          <p className="eyebrow">Pickup details</p>
          <p className="text-base font-semibold text-cream-100">{customerDetails.fullName}</p>
          <p className="mt-2 text-sm text-cream-300">{customerDetails.email}</p>
          <p className="mt-1 text-sm text-cream-300">{customerDetails.phone}</p>
          <p className="mt-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-cream-100">
            Pickup slot: {pickupTime}
          </p>
          {customerDetails.notes ? (
            <p className="mt-4 text-sm text-cream-300">Notes: {customerDetails.notes}</p>
          ) : null}
        </div>

        <div className="panel-strong p-6">
          <div className="space-y-4 text-sm text-cream-200">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Service fee</span>
              <span>${serviceFee.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-base font-semibold text-cream-100">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
