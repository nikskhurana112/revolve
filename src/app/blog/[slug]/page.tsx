import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Info } from "lucide-react";
import { getPost, posts } from "@/content/posts";
import { site } from "@/content/site";
import { clinicId, JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { Breadcrumbs } from "@/components/sections/page-hero";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    image: post.image,
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="pt-10 sm:pt-12">
          <Container className="max-w-4xl">
            <Breadcrumbs
              items={[
                { name: "Journal", path: "/blog" },
                { name: post.title, path: `/blog/${slug}` },
              ]}
            />
            <div className="mt-10">
              <Eyebrow>{post.category}</Eyebrow>
            </div>
            <h1 className="mt-5 animate-fade-up text-[2.6rem] leading-[1.05] font-light tracking-[-0.03em] text-ink sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-soft">{post.excerpt}</p>
            <p className="mt-6 text-sm text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read ·{" "}
              {site.shortName}
            </p>
          </Container>
          <Container className="mt-12 max-w-6xl">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[2.5rem] bg-brand-50">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1152px) 1120px, 100vw"
                className="object-cover"
              />
            </div>
          </Container>
        </header>

        <Container className="max-w-3xl py-16 sm:py-20">
          <div className="prose-rt">
            {post.body.map((block, i) => {
              switch (block.type) {
                case "p":
                  return <p key={i}>{block.text}</p>;
                case "h2":
                  return <h2 key={i}>{block.text}</h2>;
                case "numbered":
                  return (
                    <ol key={i} className="space-y-6">
                      {block.items.map((item, n) => (
                        <li key={item.title} className="flex gap-5">
                          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lime-100 font-display text-lg text-lime-700">
                            {n + 1}
                          </span>
                          <div>
                            <h3 className="!mt-1.5 font-sans text-lg font-semibold">{item.title}</h3>
                            <p className="mt-1">{item.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  );
                case "image":
                  return (
                    <figure key={i} className="!my-12">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        width={block.width}
                        height={block.height}
                        sizes="(min-width: 768px) 720px, 100vw"
                        className="mx-auto max-h-[36rem] w-auto rounded-4xl object-cover"
                      />
                    </figure>
                  );
                case "note":
                  return (
                    <aside key={i} className="flex gap-3 rounded-2xl bg-sand p-5 text-[0.95rem]">
                      <Info aria-hidden className="mt-1 size-5 shrink-0 text-brand-600" />
                      <p>{block.text}</p>
                    </aside>
                  );
              }
            })}
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 font-medium text-brand-700 hover:underline">
              <ArrowLeft aria-hidden className="size-4" /> Back to the journal
            </Link>
          </div>
        </Container>
      </article>

      <CtaBand
        className="pb-20"
        title="Curious whether acupuncture can help you?"
        text="Book a consultation with one of our registered acupuncturists."
        primary={{ label: "Book acupuncture", href: site.booking.main }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          image: `${site.url}${post.image}`,
          url: `${site.url}/blog/${slug}`,
          author: { "@id": clinicId },
          publisher: { "@id": clinicId },
        }}
      />
    </>
  );
}
