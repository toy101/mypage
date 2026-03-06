import { Navigation } from "@/app/components/nav";
import { getWorkbyId } from "@/app/lib/api";
import { YouTubeEmbed } from "@next/third-parties/google";

export default async function MyWorkPage() {
  const work = await getWorkbyId("v9k8kcmzbi");

  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      <video
        className="absolute left-1/2 top-[18%] z-0 h-[48vh] w-full -translate-x-1/2 -translate-y-1/2 object-contain opacity-100 sm:left-0 sm:top-0 sm:h-screen sm:w-full sm:translate-x-0 sm:translate-y-0 sm:object-cover"
        src="https://media.toy101-mov.org/test.webm"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0.15) 80%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0.15) 80%, rgba(0, 0, 0, 0) 100%)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-tl from-black via-indigo-900/50 to-black"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <Navigation />
        <div className="pt-32 px-8 font-bold text-center text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
          {work.title}
        </div>
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-5xl lg:px-8 md:space-y-16 md:pt-16 lg:pt-24">
          <div className="relative w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[radial-gradient(60%_60%_at_50%_40%,rgba(99,102,241,0.9),rgba(15,23,42,0.0))] before:blur-[36px] before:opacity-100 shadow-[0_0_60px_rgba(99,102,241,0.35)] [&>div]:absolute [&>div]:inset-0 [&>div]:w-full [&>div]:h-full [&>div]:m-0 [&>div>lite-youtube]:absolute [&>div>lite-youtube]:inset-0 [&>div>lite-youtube]:block [&>div>lite-youtube]:!w-full [&>div>lite-youtube]:!h-full [&>div>lite-youtube]:!m-0 [&>div>lite-youtube]:rounded-2xl">
            <YouTubeEmbed
              videoid={work.youtube_id}
              style={`background-image: url('https://i.ytimg.com/vi/${work.youtube_id}/maxresdefault.jpg'); margin: 0; width: 100%; height: 100%; max-width: none; max-height: none; display: block;`}
            />
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-xs sm:max-w-xl grid-cols-1 gap-8 md:gap-12 px-6 pb-16 lg:px-8">
          {[0, 1, 2].map((index) => (
            <div
              key={`work-webm-${index}`}
              className="overflow-hidden rounded-xl border border-white/20 bg-black/30"
            >
              <video
                className="h-full w-full aspect-video object-cover"
                src="https://media.toy101-mov.org/test.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
            </div>
          ))}
        </div>
        <footer className="border-t border-white/20 px-6 py-6 text-center text-sm text-white/70 lg:px-8">
          © {new Date().getFullYear()} My Portfolio
        </footer>
      </div>
    </div>
  );
}
