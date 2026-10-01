import { fullAddress, site } from "@/content/site";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Revolve Therapy Health Services collects, uses and protects personal information on this website.",
  path: "/privacy",
});

// NOTE: Placeholder policy written for the website only. Have it reviewed against the
// clinic's existing privacy practices and BC's Personal Information Protection Act (PIPA).
export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy", path: "/privacy" }]} title="Privacy policy" />
      <Container className="max-w-3xl pb-24">
        <div className="prose-rt">
          <p>
            {site.name} respects your privacy. This page explains what personal information we collect through this
            website and how we use it.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you use our contact form we collect the details you provide — your name, email address, optional phone
            number and your message — so we can respond to your enquiry. Please do not include detailed health
            information in the form.
          </p>
          <p>
            Appointments are booked through our third-party booking provider, Jane App, which has its own privacy
            policy. Clinical records are collected and stored separately in accordance with our professional
            obligations.
          </p>
          <h2>How we use it</h2>
          <p>
            We use the information you send only to respond to your enquiry and provide the services you request. We do
            not sell or rent your personal information.
          </p>
          <h2>Third-party services</h2>
          <p>
            This site embeds Google Maps and links to Google reviews, Instagram and Facebook. These services may set
            their own cookies when you interact with them.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions or to request access to or correction of your information, contact us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>, call {site.phone.display}, or write to us at{" "}
            {fullAddress}.
          </p>
        </div>
      </Container>
    </>
  );
}
