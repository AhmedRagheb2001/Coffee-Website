import AnimatedSection from "../components/common/AnimatedSection";
import Image from "../components/common/Image";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import SectionTitle from "../components/common/SectionTitle";
import { aboutStory, seoContent } from "../data/siteContent";

export default function AboutPage() {
  return (
    <PageTransition>
      <Seo {...seoContent.about} />
      <AnimatedSection className="section-shell section-space">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel overflow-hidden">
            <Image
              src={aboutStory.image}
              alt="Coffee shop interior with warm seating"
              priority
              wrapperClassName="h-full min-h-[560px] w-full"
              imgClassName="h-full min-h-[560px] w-full object-cover brightness-[0.78]"
            />
          </div>

          <div className="panel p-8 sm:p-10 lg:p-12">
            <SectionTitle
              eyebrow={aboutStory.eyebrow}
              title={aboutStory.title}
              description={aboutStory.description}
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {aboutStory.milestones.map((milestone) => (
                <div
                  key={milestone.label}
                  className="rounded-[24px] border border-white/8 bg-white/5 p-4"
                >
                  <p className="font-display text-4xl leading-none text-cream-100">
                    {milestone.value}
                  </p>
                  <p className="mt-2 text-sm text-cream-300">{milestone.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell section-space pt-0" delay={0.1}>
        <div className="grid gap-5 lg:grid-cols-2">
          {aboutStory.gallery.map((image, index) => (
            <div key={image} className="panel overflow-hidden">
              <Image
                src={image}
                alt={`Velvet Roast gallery ${index + 1}`}
                wrapperClassName="h-[360px] w-full"
                imgClassName="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
