import { Navigate } from "react-router-dom";
import AnimatedSection from "../components/common/AnimatedSection";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import OrderSuccessCard from "../components/order/OrderSuccessCard";
import { seoContent } from "../data/siteContent";
import { useOrder } from "../context/OrderContext";

export default function OrderSuccessPage() {
  const { lastOrder } = useOrder();

  if (!lastOrder) {
    return <Navigate to="/order" replace />;
  }

  return (
    <PageTransition>
      <Seo {...seoContent.orderSuccess} />
      <AnimatedSection className="section-shell section-space">
        <OrderSuccessCard order={lastOrder} />
      </AnimatedSection>
    </PageTransition>
  );
}
