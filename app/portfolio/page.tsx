import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { getWorks } from "../lib/api";

export default async function WorksPage() {
  const works = await getWorks();

  return (
    <div className="min-h-[100vh] bg-gradient-to-tl from-black via-indigo-900/50 to-black">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Portfolio / ポートフォリオ
          </h2>
          <p className="mt-4 text-zinc-400">携わらせていただいた映像です</p>
        </div>
        <div className="w-full h-px bg-gray-800" />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-2 xl:p-5">
          {works.map(
            (
              work: { youtube_id: string; title: string; tag: string },
              index: number
            ) => (
              <div
                key={work.youtube_id}
                className="opacity-0 transform translate-y-5 transition-opacity duration-1000 animate-fade-up"
                style={{
                  animationDelay: `${index * 0.2}s`, // アイテムごとに遅延を設定
                }}
              >
                <Card
                  key={work.youtube_id}
                  title={work.title}
                  tag={work.tag}
                  imageUrl={`https://img.youtube.com/vi/${work.youtube_id}/maxresdefault.jpg`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
