import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/content/posts";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Container, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Journal",
  description:
    "Articles on acupuncture, massage therapy, Traditional Chinese Medicine and wellbeing from the team at Revolve Therapy.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Journal", path: "/blog" }]}
        eyebrow="Journal"
        title={
          <>
            Notes on <em className="text-brand-700">healing</em> & wellbeing
          </>
        }
        lead="Practical insight from our practitioners on acupuncture, massage therapy, Traditional Chinese Medicine and mental health."
      />

      <Section className="pt-4 sm:pt-6 lg:pt-8">
        <Container>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug} className="reveal">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-4xl bg-white ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[3/2] overflow-hidden bg-brand-50">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-sm text-muted">
                      <span className="font-medium text-brand-700">{post.category}</span> ·{" "}
                      <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
                    </p>
                    <h2 className="mt-3 text-2xl leading-tight text-ink">
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{post.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                      Read article <ArrowUpRight aria-hidden className="size-4" />
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        className="pb-20"
        title="Have a question for our practitioners?"
        text="Give us a call — we're happy to help."
      />
    </>
  );
}
