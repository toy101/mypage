import Image from "next/image";

type CardProps = {
  title: string;
  tag: string;
  imageUrl: string;
};

export const Card: React.FC<CardProps> = ({ title, tag, imageUrl }) => {
  return (
    <div className="overflow-hidden relative duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 hover:scale-105 fade-in-bottom">
      <article className="relative transform transition duration-500 ">
        <div className="px-2 flex justify-center">
          <Image
            className="rounded-md"
            src={imageUrl}
            alt="thumbnail"
            width={640}
            height={360}
            loading="lazy"
          />
        </div>
        <div className="px-4 py-2 md:p-4">
          <h6 className="z-20 text-lg sm:text-lg duration-1000 text-zinc-300 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.65)] font-display sm:line-clamp-1 md:line-clamp-2 sm:min-h-[1.75rem] md:min-h-[3.5rem] leading-[1.75rem]">
            {title}
          </h6>
          <p className="z-20 mt-1 mr-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 text-right">
            {tag}
          </p>
        </div>
      </article>
    </div>
  );
};
