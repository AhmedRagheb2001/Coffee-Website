import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import AnimatedSection from "../components/common/AnimatedSection";
import Button from "../components/common/Button";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import SectionTitle from "../components/common/SectionTitle";
import { contactContent, seoContent, visitInfo } from "../data/siteContent";
import { useContactSubmission } from "../hooks/useContactSubmission";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const { errorMessage, resetStatus, status, submitMessage } = useContactSubmission();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
    resetStatus();
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formValues.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formValues.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formValues.message.trim()) {
      nextErrors.message = "Please add a short message.";
    } else if (formValues.message.trim().length < 12) {
      nextErrors.message = "Your message should be at least 12 characters long.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setFormErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      try {
        await submitMessage(formValues);
        setFormValues(initialFormState);
      } catch {
        return;
      }
    }
  };

  return (
    <PageTransition>
      <Seo {...seoContent.contact} />
      <AnimatedSection className="section-shell section-space">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel p-8 sm:p-10">
            <SectionTitle
              eyebrow={contactContent.eyebrow}
              title={contactContent.title}
              description={contactContent.description}
            />

            <div className="mt-10 space-y-5 text-sm text-cream-200">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-caramel-300" />
                <span>{visitInfo.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 text-caramel-300" />
                <span>{visitInfo.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="mt-1 text-caramel-300" />
                <span>{visitInfo.email}</span>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-white/8">
              <iframe
                title="Velvet Roast location map"
                src={visitInfo.mapEmbed}
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="panel-strong p-8 sm:p-10">
            <p className="eyebrow">{contactContent.formTitle}</p>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream-100">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.name)}
                  aria-describedby={formErrors.name ? "contact-name-error" : undefined}
                  className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-cream-100 transition focus:border-caramel-500"
                  placeholder="Your name"
                />
                {formErrors.name ? (
                  <p id="contact-name-error" className="mt-2 text-sm text-red-300">
                    {formErrors.name}
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
                  value={formValues.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.email)}
                  aria-describedby={formErrors.email ? "contact-email-error" : undefined}
                  className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-cream-100 transition focus:border-caramel-500"
                  placeholder="you@example.com"
                />
                {formErrors.email ? (
                  <p id="contact-email-error" className="mt-2 text-sm text-red-300">
                    {formErrors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formValues.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.message)}
                  aria-describedby={formErrors.message ? "contact-message-error" : undefined}
                  className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-cream-100 transition focus:border-caramel-500"
                  placeholder="Tell us about your booking or question."
                />
                {formErrors.message ? (
                  <p id="contact-message-error" className="mt-2 text-sm text-red-300">
                    {formErrors.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send message"}
              </Button>

              {status === "success" ? (
                <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                  {contactContent.successMessage}
                </p>
              ) : null}

              {status === "error" ? (
                <p className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-100">
                  {errorMessage || contactContent.errorMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
