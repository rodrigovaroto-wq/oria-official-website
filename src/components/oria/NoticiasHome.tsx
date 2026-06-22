import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import { NoticiaCard } from "./NoticiaCard";
import { getAllPosts } from "@/lib/posts";
import { useContent } from "@/data/oria";

export const NoticiasHome = () => {
  const { lang } = useContent();
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  const headingA = lang === "en" ? "Stay close to what's moving the " : "Fique por dentro do que acontece no ";
  const headingB = lang === "en" ? "market." : "mercado.";
  const cta = lang === "en" ? "View all news" : "Ver todas as notícias";

  return (
    <section id="noticias" className="bg-background py-24 md:py-32">
      <div className="container-oria">
        <SectionHeader
          num="§ NEWS"
          heading={
            <>
              {headingA}
              <em className="italic text-accent font-light">{headingB}</em>
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal">
          {posts.map((p) => (
            <NoticiaCard key={p.slug} post={p} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/noticias" className="btn-primary">
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
};
