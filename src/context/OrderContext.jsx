import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const OrderContext = createContext(null);

const STORAGE_KEYS = {
  cart: "velvet-roast-cart",
  customerDetails: "velvet-roast-customer-details",
  pickupTime: "velvet-roast-pickup-time",
  checkoutStep: "velvet-roast-checkout-step",
  lastOrder: "velvet-roast-last-order",
};

const initialCustomerDetails = {
  fullName: "",
  email: "",
  phone: "",
  notes: "",
};

function readStorage(key, fallbackValue) {
  if (typeof window === "undefined") {
    return fallbackValue;
  }

  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

export function OrderProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => readStorage(STORAGE_KEYS.cart, []));
  const [checkoutStep, setCheckoutStep] = useState(() =>
    readStorage(STORAGE_KEYS.checkoutStep, 1)
  );
  const [customerDetails, setCustomerDetails] = useState(() =>
    readStorage(STORAGE_KEYS.customerDetails, initialCustomerDetails)
  );
  const [pickupTime, setPickupTime] = useState(() =>
    readStorage(STORAGE_KEYS.pickupTime, "")
  );
  const [lastOrder, setLastOrder] = useState(() => readStorage(STORAGE_KEYS.lastOrder, null));

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const serviceFee = subtotal > 0 ? 2.5 : 0;
  const total = subtotal + serviceFee;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.checkoutStep, JSON.stringify(checkoutStep));
  }, [checkoutStep]);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEYS.customerDetails,
      JSON.stringify(customerDetails)
    );
  }, [customerDetails]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.pickupTime, JSON.stringify(pickupTime));
  }, [pickupTime]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.lastOrder, JSON.stringify(lastOrder));
  }, [lastOrder]);

  const addItem = useCallback((menuItem) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === menuItem.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === menuItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentItems, { ...menuItem, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((itemId, nextQuantity) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: Math.max(0, nextQuantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((itemId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setCheckoutStep(1);
  }, []);

  const updateCustomerField = useCallback((field, value) => {
    setCustomerDetails((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }, []);

  const goToStep = useCallback((nextStep) => {
    setCheckoutStep(Math.max(1, Math.min(4, nextStep)));
  }, []);

  const resetCheckout = useCallback(() => {
    setCheckoutStep(1);
    setCustomerDetails(initialCustomerDetails);
    setPickupTime("");
  }, []);

  const placeOrder = useCallback(async () => {
    if (!cartItems.length) {
      throw new Error("Your cart is empty.");
    }

    const orderSnapshot = {
      id: `VR-${Math.floor(Math.random() * 90000 + 10000)}`,
      items: cartItems,
      customerDetails,
      pickupTime,
      subtotal,
      serviceFee,
      total,
      placedAt: new Date().toISOString(),
    };

    await new Promise((resolve) => window.setTimeout(resolve, 900));

    setLastOrder(orderSnapshot);
    setCartItems([]);
    resetCheckout();

    return orderSnapshot;
  }, [cartItems, customerDetails, pickupTime, resetCheckout, serviceFee, subtotal, total]);

  const clearLastOrder = useCallback(() => {
    setLastOrder(null);
  }, []);

  const value = useMemo(
    () => ({
      addItem,
      cartItems,
      checkoutStep,
      clearCart,
      clearLastOrder,
      customerDetails,
      goToStep,
      itemCount,
      lastOrder,
      pickupTime,
      placeOrder,
      removeItem,
      resetCheckout,
      serviceFee,
      setPickupTime,
      subtotal,
      total,
      updateCustomerField,
      updateQuantity,
    }),
    [
      addItem,
      cartItems,
      checkoutStep,
      clearCart,
      clearLastOrder,
      customerDetails,
      goToStep,
      itemCount,
      lastOrder,
      pickupTime,
      placeOrder,
      removeItem,
      resetCheckout,
      serviceFee,
      subtotal,
      total,
      updateCustomerField,
      updateQuantity,
    ]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used inside an OrderProvider");
  }

  return context;
}
