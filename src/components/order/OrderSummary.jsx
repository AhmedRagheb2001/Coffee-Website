import Button from "../common/Button";
import Image from "../common/Image";

export default function OrderSummary({
  cartItems,
  subtotal,
  serviceFee,
  total,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  if (!cartItems.length) {
    return (
      <div className="panel p-8">
        <p className="eyebrow">Order</p>
        <h2 className="section-title">Your bag is still empty.</h2>
        <p className="body-muted mt-4">Add a few drinks from the menu and they will appear here instantly.</p>
        <Button to="/menu" className="mt-6">Go to menu</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="panel p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Order summary</p>
            <h2 className="section-title">Ready for pickup.</h2>
          </div>
          <Button variant="subtle" onClick={onClearCart}>Clear all</Button>
        </div>

        <div className="mt-8 space-y-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-3xl border border-white/8 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  wrapperClassName="h-20 w-20 rounded-2xl"
                  imgClassName="h-full w-full rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-cream-100">{item.name}</h3>
                  <p className="text-sm text-cream-300">{item.category}</p>
                  <p className="mt-1 text-sm font-semibold text-caramel-300">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/6 text-lg"
                >
                  -
                </button>
                <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/6 text-lg"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  className="ml-2 rounded-full px-3 py-2 text-sm text-cream-300 hover:text-cream-100"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel-strong p-6 sm:p-8">
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

        <Button className="mt-6 w-full">Continue to checkout</Button>
      </div>
    </div>
  );
}
