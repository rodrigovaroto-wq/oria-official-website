import { Link } from "react-router-dom";
import type { Post } from "@/lib/posts";
import { getCategoryLabel } from "@/lib/categoryMap";

interface Props {
  post: Post;
}

export const NoticiaCard = ({ post }: Props) => {
  const to = `/noticias/${post.slug}`;
  const categoryLabel = getCategoryLabel(post.category);
  return (
    <article className="group flex flex-col bg-[hsl(0_0%_100%)] shadow-[0_2px_14px_rgba(15,20,25,0.06)] hover:shadow-[0_6px_24px_rgba(15,20,25,0.10)] transition-shadow duration-300 overflow-hidden rounded-[4px] border border-rule/70 h-full">
      <Link to={to} className="block" aria-label={post.title}>
        <div className="aspect-video w-full overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full bg-foreground flex items-center justify-center">
              <span className="font-mono-label text-[11px] text-background">
                {categoryLabel}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-3 md:p-6">
        <Link to={to}>
          <h3 className="text-[clamp(14px,2.4vw,20px)] leading-[1.25] tracking-[-0.01em] text-foreground font-bold group-hover:text-accent transition-colors">
            {post.title}
          </h3>
        </Link>

        <div className="my-3 md:my-4 h-px bg-rule" />

        <p className="text-[clamp(12px,1.8vw,14.5px)] leading-[1.5] text-ink-soft font-light">
          {post.description}
        </p>

        <div className="my-3 md:my-4 h-px bg-rule" />

        {/* Ler mais + badge de categoria */}
        <div className="mt-auto flex items-center justify-between gap-2">
          <Link
            to={to}
            className="inline-flex items-center gap-1 text-[clamp(11px,1.6vw,13px)] tracking-[0.02em] text-accent hover:translate-x-[2px] transition-transform font-bold"
          >
            Ler mais →
          </Link>
          {categoryLabel && (
            <span
              className="text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-[3px] rounded-[3px]"
              style={{ color: "#C0492E", backgroundColor: "rgba(192,73,46,0.10)" }}
            >
              {categoryLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
