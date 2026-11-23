import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the TheySix farm archive, Wiki and Events website handle information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage eyebrow="LEGAL / PRIVACY" title="Privacy Policy" description="How the TheySix farm archive, Wiki and Events website handle information." updated="November 23, 2026" sections={[
    { heading: "Scope and contact", paragraphs: ["This notice covers theysix.tech, wiki.theysix.tech and events.theysix.tech. To ask about a privacy issue or request access, correction or deletion of personal information, contact the TheySix team at theysixyt.business@gmail.com. Include the relevant website and page."] },
    { heading: "Serving the sites", paragraphs: ["Your browser sends technical information such as your IP address, requested page and browser details to hosting providers so they can deliver pages, diagnose errors and protect the service."] },
    { heading: "Archive measurement", paragraphs: ["When you accept optional measurement on the main farm archive, it loads Google Tag Manager, Vercel Web Analytics and Speed Insights to measure traffic and page performance. The Wiki and Events website do not load those archive integrations."] },
    { heading: "Preferences and third parties", paragraphs: ["The cookie notice explains browser storage and how to reset your choices. Embedded videos can send requests to YouTube. Following a Discord, file download or Ko-fi link connects you to that provider. Ko-fi and its payment providers handle payment details on their own sites."] },
    { heading: "Your rights", paragraphs: ["Depending on applicable law, you may also request restriction or object to processing, withdraw consent, or lodge a complaint with your data protection authority."] },
  ]} />;
}
