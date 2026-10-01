import Image from "next/image";
import { insurers } from "@/content/insurers";
import { Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function InsurersStrip({ className, title = "Direct billing with" }: { className?: string; title?: string }) {
  return (
    <section aria-labelledby="insurers-title" className={cn("border-y border-line bg-white py-10", className)}>
      <Container className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
        <h2
          id="insurers-title"
          className="shrink-0 text-center font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase lg:w-40 lg:text-left"
        >
          {title}
        </h2>
        <ul className="grid w-full grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-5 lg:flex lg:flex-1 lg:justify-between lg:gap-4">
          {insurers.map((ins) => (
            <li key={ins.name} className="flex justify-center">
              <Image
                src={ins.logo}
                alt={ins.name}
                width={ins.width}
                height={ins.height}
                title={ins.name}
                className={cn(
                  "w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0",
                  // Square marks need more height than wordmarks to look balanced.
                  ins.width / ins.height < 1.5 ? "h-11" : ins.width / ins.height > 4 ? "h-5" : "h-8",
                )}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
