import { motion, useReducedMotion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../common/Button";

export default function OrderSuccessCard({ order }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="panel mx-auto max-w-3xl p-8 text-center sm:p-12">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.45, ease: "easeOut" }}
        className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-caramel-500/18 text-caramel-300"
      >
        <FiCheckCircle className="text-4xl" />
      </motion.div>

      <p className="eyebrow mt-8">Order confirmed</p>
      <h1 className="section-title">We are preparing your coffee now.</h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-cream-300">
        Your pickup slot is locked in, and your order reference is{" "}
        <span className="font-semibold text-cream-100">{order.id}</span>.
      </p>

      <div className="mt-8 grid gap-4 rounded-[28px] border border-white/8 bg-white/5 p-6 text-left sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-caramel-300">Pickup</p>
          <p className="mt-2 text-sm text-cream-100">{order.pickupTime}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-caramel-300">Guest</p>
          <p className="mt-2 text-sm text-cream-100">{order.customerDetails.fullName}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-caramel-300">Total</p>
          <p className="mt-2 text-sm text-cream-100">${order.total.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <Button to="/menu">Order something else</Button>
        <Button to="/" variant="secondary">Return home</Button>
      </div>
    </div>
  );
}
