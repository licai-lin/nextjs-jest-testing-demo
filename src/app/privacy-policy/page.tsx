import type { Metadata } from "next";
import Link from "next/link";
import PageCard from "@/components/ui/page-card";

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const COMPANY_NAME = "NextJS Demo";
const CONTACT_EMAIL = "privacy@example.com";
const JURISDICTION = "the United States";

const policySections: PolicySection[] = [
  {
    title: "Scope",
    paragraphs: [
      `This Privacy Policy explains how ${COMPANY_NAME} collects, uses, discloses, and protects personal information when you use our website, products, and services (collectively, the \"Services\").`,
      "By using the Services, you acknowledge that your information will be handled as described in this policy.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "We collect information you provide directly, information collected automatically when you use the Services, and information from third-party sources where permitted by law.",
    ],
    bullets: [
      "Account and profile data (such as name, email address, organization, and login credentials).",
      "Communications and support submissions (such as messages, attachments, and feedback).",
      "Usage and device data (such as IP address, browser type, pages viewed, referring URLs, and timestamps).",
      "Transaction and billing data when purchases are made.",
    ],
  },
  {
    title: "How We Use Information",
    bullets: [
      "Provide, maintain, and improve the Services.",
      "Authenticate users and secure accounts.",
      "Respond to support requests and communicate operational updates.",
      "Analyze performance, troubleshoot issues, and prevent abuse or fraud.",
      "Comply with legal obligations and enforce our terms.",
    ],
  },
  {
    title: "Legal Bases (Where Applicable)",
    paragraphs: [
      "Where required by applicable law, we process personal information based on legal grounds such as consent, contractual necessity, legitimate interests, and legal obligations.",
    ],
  },
  {
    title: "Cookies and Similar Technologies",
    paragraphs: [
      "We use cookies and similar technologies to remember preferences, measure performance, and improve user experience.",
      "You can control cookies through browser settings. Blocking some cookies may impact service functionality.",
    ],
  },
  {
    title: "How We Share Information",
    paragraphs: [
      "We do not sell personal information. We may share information in the following cases:",
    ],
    bullets: [
      "With vendors and service providers that process information on our behalf under contractual safeguards.",
      "With affiliates and business partners when necessary to operate the Services.",
      "If required by law, regulation, legal process, or valid governmental request.",
      "In connection with a merger, acquisition, financing, or sale of assets.",
      "To protect rights, safety, security, and prevent fraud or misuse.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain personal information only for as long as necessary for the purposes described in this policy, including legal, accounting, and dispute-resolution obligations.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We apply administrative, technical, and organizational safeguards designed to protect personal information. No method of transmission or storage is fully secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "International Data Transfers",
    paragraphs: [
      `Your information may be processed in ${JURISDICTION} and other countries where we or our providers operate. Where required, we use safeguards to support lawful transfers.`,
    ],
  },
  {
    title: "Your Privacy Rights",
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your information, and to object to certain processing activities.",
      `To exercise your rights, contact us at ${CONTACT_EMAIL}. We may verify your request before responding.`,
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "The Services are not directed to children under 13 (or other age thresholds required by local law), and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this policy from time to time. If we make material changes, we will provide notice through the Services or by other appropriate means.",
      "Your continued use of the Services after updates become effective indicates acceptance of the revised policy.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `If you have privacy questions, requests, or complaints, contact ${COMPANY_NAME} at ${CONTACT_EMAIL}.`,
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How we collect, use, and protect personal information when you use our services.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date());

  return (
    <PageCard
      eyebrow="Legal"
      title="Privacy Policy"
      description={`Last updated: ${lastUpdated}`}
    >
      <div className="space-y-6 text-sm leading-6 text-[var(--nav-text)]">
        {policySections.map((section) => (
          <section key={section.title}>
            <h2 className="text-base font-semibold text-[var(--nav-strong)]">
              {section.title}
            </h2>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-2">
                {section.title === "Contact" ? (
                  <>
                    If you have privacy questions, requests, or complaints,
                    contact {COMPANY_NAME} at{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-medium text-[var(--nav-strong)] underline underline-offset-4"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}

            {section.bullets?.length ? (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
        >
          Back to Home
        </Link>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex rounded-md border border-[var(--nav-border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
        >
          Contact Privacy Team
        </a>
      </div>
    </PageCard>
  );
}
