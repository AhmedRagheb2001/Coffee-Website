import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import Button from "../common/Button";
import Image from "../common/Image";

const MenuItemCard = memo(function MenuItemCard({ item, onAddToOrder }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: "easeOut" }}
      className="panel overflow-hidden"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          wrapperClassName="h-full w-full"
          imgClassName={`h-full w-full object-cover transition duration-500 ${
            shouldReduceMotion ? "" : "hover:scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/30 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-white/12 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cream-100">
          {item.category}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl leading-none">{item.name}</h3>
            <p className="mt-3 text-sm leading-6 text-cream-300">{item.description}</p>
          </div>
          <span className="text-sm font-bold text-caramel-300">${item.price.toFixed(2)}</span>
        </div>

        <Button variant="secondary" className="w-full gap-2" onClick={() => onAddToOrder(item)}>
          <FiPlus />
          Add to order
        </Button>
      </div>
    </motion.article>
  );
});

export default MenuItemCard;
