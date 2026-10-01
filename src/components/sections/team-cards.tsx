import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplineLabels, type TeamMember } from "@/content/team";
import { cn } from "@/lib/utils";

export function PractitionerCard({ member, className }: { member: TeamMember; className?: string }) {
  return (
    <article className={cn("group reveal relative", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-brand-100">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 1280px) 240px, (min-width: 768px) 30vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: member.imagePosition }}
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-800 backdrop-blur">
          {disciplineLabels[member.discipline]}
        </span>
      </div>
      <h3 className="mt-5 text-xl leading-tight text-ink">
        <Link href={`/about#${member.slug}`} className="after:absolute after:inset-0">
          {member.name}
        </Link>
      </h3>
      <p className="mt-1 flex items-start justify-between gap-2 text-sm text-muted">
        <span>
          {member.role}
          {member.credentials && `, ${member.credentials}`}
        </span>
        <ArrowUpRight
          aria-hidden
          className="size-4 shrink-0 text-brand-600 opacity-0 transition-opacity group-hover:opacity-100"
        />
      </p>
    </article>
  );
}

export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 xl:grid-cols-5">
      {members.map((m) => (
        <PractitionerCard key={m.slug} member={m} />
      ))}
    </div>
  );
}

/** Compact horizontal card used on service and condition pages. */
export function PractitionerRow({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/about#${member.slug}`}
      className="group flex items-center gap-4 rounded-3xl bg-white p-3 pr-5 ring-1 ring-line transition-all hover:shadow-soft hover:ring-brand-200"
    >
      <Image
        src={member.image}
        alt=""
        width={80}
        height={80}
        className="size-16 shrink-0 rounded-2xl object-cover"
        style={{ objectPosition: member.imagePosition }}
      />
      <span className="min-w-0 flex-1">
        <span className="block font-display text-lg leading-tight text-ink">{member.name}</span>
        <span className="mt-0.5 block text-sm text-muted">{member.role}</span>
      </span>
      <ArrowUpRight
        aria-hidden
        className="size-4 shrink-0 text-brand-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
