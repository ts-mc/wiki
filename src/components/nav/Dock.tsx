"use client";

import { usePathname } from "next/navigation";
import { useAudio } from "@/components/audio/AudioProvider";
import { BookOpen, CalendarDays, House, Info, Pause, Play, Scale, Share2, Tags, type LucideIcon } from "lucide-react";

type Category = "wiki" | "events" | "about" | "main" | "socials" | "roles" | "legal";

type Destination = {
  id: Category;
  href: string;
  label: string;
  icon: LucideIcon;
};

const destinations: Destination[] = [
  { id: "wiki", href: "https://wiki.theysix.tech", label: "Wiki", icon: BookOpen },
  { id: "events", href: "https://events.theysix.tech", label: "Events", icon: CalendarDays },
  { id: "about", href: "https://theysix.tech/about", label: "About", icon: Info },
  { id: "main", href: "https://theysix.tech", label: "Main", icon: House },
  { id: "socials", href: "https://theysix.tech/socials", label: "Socials", icon: Share2 },
  { id: "roles", href: "https://theysix.tech/roles", label: "Roles", icon: Tags },
  { id: "legal", href: "https://wiki.theysix.tech/tos", label: "Legal", icon: Scale },
];

const slotClass = "flex min-h-12 min-w-14 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-[var(--muted)] transition-colors duration-150 hover:bg-white/5 hover:text-[var(--ink)] sm:min-w-24";
const labelClass = "text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px]";

function Slot({ item, active }: { item: Destination; active?: boolean }) {
  const Icon = item.icon;

  return (
    <li>
      <a href={item.href} aria-current={active ? "page" : undefined} className={`${slotClass} aria-[current=page]:text-[var(--portal)]`}>
        <Icon className="size-4" aria-hidden="true" />
        <span className={labelClass}>{item.label}</span>
      </a>
    </li>
  );
}

function selectedCategory(pathname: string): Category {
  return ["/tos", "/cookies", "/privacy"].includes(pathname) || pathname.startsWith("/legal/") ? "legal" : "wiki";
}

function orderedDestinations(selected: Category) {
  if (selected === "main") return destinations;
  const items = [...destinations];
  const mainIndex = items.findIndex((item) => item.id === "main");
  const selectedIndex = items.findIndex((item) => item.id === selected);
  [items[mainIndex], items[selectedIndex]] = [items[selectedIndex], items[mainIndex]];
  return items;
}

function Divider() {
  return <li aria-hidden="true" className="h-8 w-px shrink-0 self-center bg-[var(--rule)]" />;
}

export function Dock() {
  const pathname = usePathname();
  const ordered = orderedDestinations(selectedCategory(pathname));
  const left = ordered.slice(0, 3);
  const center = ordered[3];
  const right = ordered.slice(4);
  const CenterIcon = center.icon;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <nav aria-label="Primary" className="theysix-dock pointer-events-auto max-w-full rounded-[999px] px-3 py-2">
        <ul className="flex items-center gap-1">
          {left.map((item) => <Slot key={item.id} item={item} />)}
          <Divider />
          <li className="-my-3 px-1">
            <a href={center.href} aria-label={`THEYSIX ${center.label}`} aria-current="page" className="theysix-dock-home grid size-16 place-items-center rounded-[999px] transition-colors duration-150 hover:border-[var(--portal)] sm:size-[4.5rem]">
              <CenterIcon className="size-6 text-[var(--portal)]" aria-hidden="true" />
              <span className={labelClass}>{center.label}</span>
            </a>
          </li>
          <Divider />
          {right.map((item) => <Slot key={item.id} item={item} />)}
        </ul>
      </nav>
    </div>
  );
}

export function SoundtrackControl() {
  const { choice, enter, playing, toggle } = useAudio();
  const toggleAudio = () => choice === "unset" ? enter("sound") : toggle();
  return (
    <button type="button" onClick={toggleAudio} aria-pressed={playing} className="inline-flex min-h-11 items-center gap-2 text-ink">
      {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
      {playing ? "Pause" : "Play"} Vesper by HATAMITSUNAMI
    </button>
  );
}
