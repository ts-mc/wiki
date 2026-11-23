import { SoundtrackControl } from "./Dock";

const groups = [
  { label: "Explore", links: [["Wiki home", "https://wiki.theysix.tech"], ["Java articles", "https://wiki.theysix.tech/w/java"], ["Bedrock articles", "https://wiki.theysix.tech/w/bedrock"], ["Discord articles", "https://wiki.theysix.tech/w/discord"]] },
  { label: "Community", links: [["Main", "https://theysix.tech"], ["Events", "https://events.theysix.tech"], ["About", "https://theysix.tech/about"], ["Socials", "https://theysix.tech/socials"], ["Support ro_mihaiu on Ko-fi", "https://ko-fi.com/ro_mihaiu"]] },
  { label: "Legal", links: [["Terms of service", "https://wiki.theysix.tech/tos"], ["Privacy", "https://wiki.theysix.tech/privacy"], ["Cookies", "https://wiki.theysix.tech/cookies"], ["Open-source licences", "https://wiki.theysix.tech/legal/open-source"]] },
] as const;

export function Footer() {
  return (
    <footer className="footer-shell relative border-t border-[var(--rule)] px-6 pt-16 pb-44 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-4xl font-black leading-[.84] tracking-[-.045em] text-ink sm:text-5xl">THEYSIX</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">Minecraft farm designs, player guides and community events from TheySix.</p>
        </div>
        <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-[.6875rem] font-semibold uppercase tracking-[.18em] text-ink-muted">{group.label}</p>
              <ul className="mt-3">
                {group.links.map(([label, href]) => <li key={href}><a href={href} className="flex min-h-11 items-center text-sm text-ink-muted transition-colors hover:text-[var(--portal)]">{label}</a></li>)}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-3 border-t border-[var(--rule)] pt-6 text-xs leading-relaxed text-ink-muted lg:grid-cols-2">
        <div className="space-y-2">
          <p>made by <a href="https://discord.ro-mihaiu.xyz" className="text-ink underline hover:text-[var(--portal)]">ro_mihaiu</a></p>
          <p>THEYSIX is not affiliated with Mojang Studios or Microsoft. Minecraft is a trademark of Mojang Studios.</p>
        </div>
        <div className="lg:text-right"><SoundtrackControl /></div>
      </div>
    </footer>
  );
}
