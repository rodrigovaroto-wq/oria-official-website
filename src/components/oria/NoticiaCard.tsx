import { Link } from "react-router-dom";
import type { Post } from "@/lib/posts";

interface Props {
  post: Post;
}

export const NoticiaCard = ({ post }: Props) => {
  const to = `/noticias/${post.slug}`;
  return (
    <article className="group flex flex-col bg-[hsl(0_0%_100%)] shadow-[0_2px_14px_rgba(15,20,25,0.06)] hover:shadow-[0_6px_24px_rgba(15,20,25,0.10)] transition-shadow duration-300 overflow-hidden rounded-[4px] border border-rule/70">
      <Link to={to} className="block" aria-label={post.title}>
        <div className="h-[180px] w-full overflow-hidden">
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
                {post.category}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <Link to={to}>
          <h3 className="font-serif-display text-[20px] leading-[1.25] tracking-[-0.01em] text-foreground font-normal line-clamp-3 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
        </Link>

        <div className="my-4 h-px bg-rule" />

        <p className="text-[14.5px] leading-[1.55] text-ink-soft font-light line-clamp-3">
          {post.description}
        </p>

        <div className="my-4 h-px bg-rule" />

        <Link
          to={to}
          className="mt-auto inline-flex items-center gap-1 text-[13px] tracking-[0.02em] text-accent hover:translate-x-[2px] transition-transform self-start"
        >
          Ler mais →
        </Link>
      </div>
    </article>
  );
};
