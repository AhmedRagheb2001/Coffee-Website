import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/common/AnimatedSection";
import Button from "../components/common/Button";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import SectionTitle from "../components/common/SectionTitle";
import ConfirmationStep from "../components/order/ConfirmationStep";
import CheckoutProgress from "../components/order/CheckoutProgress";
import CustomerDetailsStep from "../components/order/CustomerDetailsStep";
import OrderSummary from "../components/order/OrderSummary";
import PickupTimeStep from "../components/order/PickupTimeStep";
import { orderContent, seoContent } from "../data/siteContent";
import { useOrder } from "../context/OrderContext";

export default function OrderPage() {
  const navigate = useNavigate();
  const {
    cartItems,
    checkoutStep,
    customerDetails,
    goToStep,
    pickupTime,
    placeOrder,
    removeItem,
    serviceFee,
    setPickupTime,
    subtotal,
    total,
    updateCustomerField,
    updateQuantity,
    clearCart,
  } = useOrder();
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasItems = cartItems.length > 0;
  const customerValidationErrors = useMemo(
    () => validationErrors.customer ?? {},
    [validationErrors]
  );

  useEffect(() => {
    if (!hasItems && checkoutStep > 1) {
      goToStep(1);
    }
  }, [checkoutStep, goToStep, hasItems]);

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;
    updateCustomerField(name, value);
  };

  const validateCustomerDetails = () => {
    const nextErrors = {};

    if (!customerDetails.fullName.trim()) {
      nextErrors.fullName = "Please enter the pickup name.";
    }

    if (!customerDetails.email.trim()) {
      nextErrors.email = "Please enter the contact email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerDetails.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!customerDetails.phone.trim()) {
      nextErrors.phone = "Please enter the contact phone.";
    }

    return nextErrors;
  };

  const handleNextStep = async () => {
    if (checkoutStep === 1) {
      if (hasItems) {
        goToStep(2);
      }
      return;
    }

    if (checkoutStep === 2) {
      const nextErrors = validateCustomerDetails();
      setValidationErrors((currentErrors) => ({ ...currentErrors, customer: nextErrors }));

      if (Object.keys(nextErrors).length === 0) {
        goToStep(3);
      }
      return;
    }

    if (checkoutStep === 3) {
      if (!pickupTime) {
        setValidationErrors((currentErrors) => ({
          ...currentErrors,
          pickupTime: "Please choose a pickup slot before continuing.",
        }));
        return;
      }

      setValidationErrors((currentErrors) => ({ ...currentErrors, pickupTime: "" }));
      goToStep(4);
      return;
    }

    if (checkoutStep === 4) {
      setIsSubmitting(true);

      try {
        await placeOrder();
        navigate("/order/success");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const stepContent = {
    1: (
      <OrderSummary
        cartItems={cartItems}
        subtotal={subtotal}
        serviceFee={serviceFee}
        total={total}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    ),
    2: (
      <CustomerDetailsStep
        errors={customerValidationErrors}
        onChange={handleDetailsChange}
        values={customerDetails}
      />
    ),
    3: (
      <PickupTimeStep
        error={validationErrors.pickupTime}
        onSelect={(slot) => {
          setPickupTime(slot);
          setValidationErrors((currentErrors) => ({ ...currentErrors, pickupTime: "" }));
        }}
        pickupSlots={orderContent.pickupSlots}
        selectedPickupTime={pickupTime}
      />
    ),
    4: (
      <ConfirmationStep
        cartItems={cartItems}
        customerDetails={customerDetails}
        pickupTime={pickupTime}
        serviceFee={serviceFee}
        subtotal={subtotal}
        total={total}
      />
    ),
  };

  return (
    <PageTransition>
      <Seo {...seoContent.order} />
      <AnimatedSection className="section-shell section-space">
        <SectionTitle
          eyebrow={orderContent.eyebrow}
          title={orderContent.title}
          description={orderContent.description}
        />

        <div className="mt-8">
          <CheckoutProgress currentStep={checkoutStep} steps={orderContent.steps} />
        </div>

        <div className="mt-10">{stepContent[checkoutStep]}</div>

        {hasItems ? (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
            {checkoutStep > 1 ? (
              <Button variant="secondary" onClick={() => goToStep(checkoutStep - 1)}>
                Back
              </Button>
            ) : (
              <div />
            )}

            <Button onClick={handleNextStep} disabled={isSubmitting}>
              {checkoutStep === 4
                ? isSubmitting
                  ? "Placing order..."
                  : "Place order"
                : "Continue"}
            </Button>
          </div>
        ) : null}
      </AnimatedSection>
    </PageTransition>
  );
}
