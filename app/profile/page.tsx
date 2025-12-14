import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../components/nav";

const socialLinks = [
  { label: "X", href: "https://x.com/Toy530" },
  { label: "YouTube", href: "https://www.youtube.com/@toymov" },
  { label: "BOOTH", href: "https://toy101.booth.pm/" },
];

const comments = [
  "映像で「らしさ」を定着させるフリーランス。尺設計と音設計で体験を刻みつける。",
  "短尺広告からブランドのキー映像まで、企画段階から伴走し、編集・モーショングラフィックスまで一気通貫で担う。",
  "リズムと緊張感を重視し、視聴維持率を取りにいくカット構成が得意。",
];

const achievements = [
  {
    title: "映像・モーショングラフィックス",
    items: [
      {
        label: "ブランドキー映像",
        detail: "D2CブランドのローンチPV制作。企画/絵コンテ/編集/MA まで担当。",
      },
      {
        label: "ゲームトレイラー",
        detail:
          "インディーゲームのティザー映像編集、尺設計とUIアニメーションをリード。",
      },
      {
        label: "広告動画（短尺）",
        detail: "SNS向け6〜15秒広告多数。クリック率と完走率の改善実績あり。",
      },
    ],
  },
  {
    title: "キャラクター / IP",
    items: [
      {
        label: "VTuber MV / OP",
        detail:
          "歌ってみた・配信OPのモーショングラフィックス、音合わせを含め制作。",
      },
      {
        label: "ライブ映像演出",
        detail:
          "配信用オーバーレイやアイキャッチ制作。OBS前提の尺と視認性を設計。",
      },
    ],
  },
  {
    title: "講師・メディア",
    items: [
      {
        label: "編集ワークショップ",
        detail:
          "映像構成と尺感の講座をオンラインで実施。フィードバック付きレビューを提供。",
      },
      {
        label: "記事寄稿",
        detail:
          "モーショングラフィックス制作フローとプリセット管理のナレッジを寄稿。",
      },
    ],
  },
];

const guidelines = [
  "納品物の二次配布・自作発言・AI学習への流用は禁止。",
  "SNS掲載の際は事前に用途を共有してほしい。クレジット表記は toy.mov で統一。",
  "商用での再編集・再利用は必ず事前相談を依頼する。",
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.18),transparent_35%)]" />
      <Navigation />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-16 md:px-10 lg:flex-row lg:pt-24">
        <div className="flex-[2] space-y-10">
          <header className="space-y-4 lg:pr-8">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Profile
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              登生 / トーイ / To-y
            </h1>
            <div className="inline-flex flex-wrap gap-3">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-200 shadow-lg shadow-indigo-900/30">
                Motion Graphics
              </span>
            </div>
          </header>

          <section className="lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-xl shadow-indigo-900/20">
              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                  Links
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-300/50 via-indigo-400/30 to-transparent" />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-zinc-700/80 bg-zinc-800/70 px-4 py-2 text-sm text-zinc-100 transition hover:-translate-y-0.5 hover:border-emerald-300/70 hover:text-emerald-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-xl shadow-indigo-900/20">
              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-[0.2em] text-indigo-300">
                  Contact
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-indigo-300/60 via-sky-300/30 to-transparent" />
              </div>
              <p className="mt-3 text-zinc-300">
                案件相談は24h以内に一次返信。要件・納期・想定尺を添えてほしい。
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href="mailto:toy101takuma@gmail.com"
                  className="rounded-full border border-zinc-700/80 bg-zinc-800/70 px-4 py-2 text-indigo-100 transition hover:-translate-y-0.5 hover:border-indigo-300/80 hover:text-white"
                >
                  toy101@gmail.com
                </Link>
                <Link
                  href="https://x.com/Toy530"
                  className="rounded-full border border-zinc-700/80 bg-zinc-800/70 px-4 py-2 text-indigo-100 transition hover:-translate-y-0.5 hover:border-indigo-300/80 hover:text-white"
                >
                  DM on X
                </Link>
              </div>
            </div>
          </section>

          <section className="gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-6 shadow-xl shadow-indigo-900/25">
              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-[0.2em] text-pink-300">
                  Comments
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-pink-300/50 via-indigo-300/30 to-transparent" />
              </div>
              <div className="mt-4 space-y-3 text-zinc-200">
                {comments.map((line) => (
                  <p key={line} className="leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4 rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-6 shadow-xl shadow-indigo-900/30">
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                主な実績
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-emerald-300/60 via-indigo-400/30 to-transparent" />
            </div>
            <div className="space-y-6">
              {achievements.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5"
                >
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-3 text-sm text-zinc-200">
                    {group.items.map((item) => (
                      <li key={item.label} className="space-y-1">
                        <p className="font-medium text-indigo-100">
                          {item.label}
                        </p>
                        <p className="leading-relaxed text-zinc-300">
                          {item.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-zinc-900 to-slate-950 p-6 shadow-2xl shadow-indigo-900/40">
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                ガイドライン
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/60 via-emerald-300/30 to-transparent" />
            </div>
            <p className="mt-3 text-zinc-200">映像の利用について</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {guidelines.map((rule) => (
                <li key={rule} className="leading-relaxed">
                  {rule}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-indigo-200">
              再利用や二次展開の相談は必ず事前に。リスクを潰してから走る。
            </p>
          </section>
        </div>

        <aside className="relative flex-[1] lg:mt-24">
          <div className="sticky top-24">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-b from-indigo-500/15 via-emerald-400/10 to-transparent blur-3xl" />
            <div className="absolute -right-10 top-12 h-32 w-32 rounded-full bg-indigo-500/25 blur-3xl" />
            <div className="absolute left-2 bottom-10 h-28 w-28 rounded-full bg-violet-400/25 blur-3xl" />
            <div className="group relative h-[520px] w-full rounded-[28px] border border-white/5 bg-zinc-950/40 backdrop-blur-md shadow-2xl shadow-indigo-900/40 sm:h-[640px]">
              <div className="absolute inset-0 rounded-[28px] border border-white/5" />
              <Image
                src="/avatar_0.webp"
                alt="toy101 avatar"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 42vw, 38vw"
                className="object-contain p-6 drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)] transition-opacity duration-75 group-hover:opacity-0"
                priority
              />
              <Image
                src="/avatar_1.webp"
                alt="toy101 avatar alternate"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 42vw, 38vw"
                className="object-contain p-6 drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)] opacity-0 transition-opacity duration-75 group-hover:opacity-100"
              />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
