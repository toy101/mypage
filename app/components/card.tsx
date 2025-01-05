type CardProps = {
  title: string;
  tag: string;
  imageUrl: string;
};

export const Card: React.FC<CardProps> = ({ title, tag, imageUrl }) => {
  return (
    <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 hover:scale-105">
      <article className="relative border rounded-lg shadow-md bg-neutral-900 border-neutral-600 transform transition duration-500 ">
        <div className="p-3 flex justify-center">
          <img className="rounded-md" src={imageUrl} loading="lazy" />
        </div>
        <div className="p-2 md:p-4">
          <h6 className="z-20 text-xl duration-1000 text-zinc-300 group-hover:text-white font-display sm:line-clamp-1 md:line-clamp-2">
            {title}
          </h6>
          <p className="z-20 mt-4 mr-2 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200 text-right">
            {tag}
          </p>
        </div>
      </article>
    </div>
  );
};
