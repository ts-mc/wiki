import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Cookies, browser storage and measurement choices across the TheySix websites.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return <LegalPage eyebrow="LEGAL / COOKIES" title="Cookie Notice" description="Cookies, browser storage and measurement choices across the TheySix websites." updated="November 23, 2026" sections={[
    { heading: "Farm archive", paragraphs: ["The main site remembers Accept All or Essential Only in local storage under theysix_cookie_consent. Google Tag Manager, Vercel Web Analytics and Speed Insights load after acceptance. Material checklists and local view counters use browser storage separately."] },
    { heading: "Wiki and Events", paragraphs: ["The wiki stores the sound preference under theysix:sound-choice. Events can remember dismissal of its notice under theysix-events:cookie-consent. Local storage belongs to the individual site and can persist between visits."] },
    { heading: "External services", paragraphs: ["Playing embedded media can make requests to providers such as YouTube. Opening a Ko-fi, Discord or download link takes you to that service, which manages its own cookies."] },
    { heading: "Change your choices", paragraphs: ["Clear cookies and site data for the relevant hostname in your browser settings. On the main site, reload and select Essential Only to browse without optional measurement. Clearing site data also removes saved local preferences."] },
  ]} />;
}
