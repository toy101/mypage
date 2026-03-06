import Link from "next/link";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import Particles from "./components/particles";
import { navigation } from "./lib/navigation";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="relative isolate flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-indigo-900/50 to-black">
      <nav className="z-10 my-4 animate-fade-in [font-family:Arial,Helvetica,sans-serif]">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-200"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="z-10 hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="pointer-events-none absolute inset-0 z-0 animate-fade-in"
        quantity={200}
      />
      <h1
        className={`${zenKakuGothicNew.className} py-5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text`}
      >
        toy.mov
      </h1>
      <div className="z-10 hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </div>
  );
}
