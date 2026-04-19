import { useMemo, useState } from "react";
import AnimatedSection from "../components/common/AnimatedSection";
import LoadingCard from "../components/common/LoadingCard";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import SectionTitle from "../components/common/SectionTitle";
import MenuFilters from "../components/menu/MenuFilters";
import MenuItemCard from "../components/menu/MenuItemCard";
import { menuCategories, menuItems } from "../data/menuItems";
import { seoContent } from "../data/siteContent";
import { useOrder } from "../context/OrderContext";
import { usePageLoader } from "../hooks/usePageLoader";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const isLoading = usePageLoader(700);
  const { addItem } = useOrder();

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems;
    }

    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageTransition>
      <Seo {...seoContent.menu} />
      <AnimatedSection className="section-shell section-space">
        <SectionTitle
          eyebrow="Menu"
          title="Filter by craving, then add your favorites in one click."
          description="The menu is fully data-driven, easy to extend, and designed for smooth browsing across desktop and mobile."
        />

        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <MenuFilters
            categories={menuCategories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
          <p className="text-sm text-cream-300">
            Showing <span className="font-semibold text-cream-100">{visibleItems.length}</span>{" "}
            drinks in <span className="font-semibold text-caramel-300">{activeCategory}</span>
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => <LoadingCard key={index} />)
            : visibleItems.map((item) => (
                <MenuItemCard key={item.id} item={item} onAddToOrder={addItem} />
              ))}
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
