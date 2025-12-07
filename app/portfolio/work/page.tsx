import { Navigation } from "@/app/components/nav";
import { getWorkbyId } from "@/app/lib/api";
import { YouTubeEmbed } from "@next/third-parties/google";

export default async function MyWorkPage() {
  const work = await getWorkbyId("b5jogv2-u9");

  return (
    <div className="min-h-[100vh] bg-gradient-to-tl from-black via-indigo-900/50 to-black">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <YouTubeEmbed
          videoid={work.youtube_id}
          style={`background-image: url('https://i.ytimg.com/vi/${work.youtube_id}/maxresdefault.jpg');}`}
        />
      </div>
    </div>
  );
}
