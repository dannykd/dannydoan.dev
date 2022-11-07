import Image from "next/image";

interface ExperienceProps {
  img: string;
  role: string;
  timespan: string;
  description: string;
}

const Experience = ({ img, role, timespan, description }: ExperienceProps) => {
  return (
    <div className="rounded-lg border border-black/20 bg-white p-4 px-2 dark:border-white/20 dark:bg-[#0b0b0b]">
      <div className="flex space-x-4 border-b border-black/20 px-2 dark:border-white/20">
        <Image
          className="mb-2 rounded-lg"
          src={img}
          height="48"
          width="48"
          layout="fixed"
        ></Image>
        <div className="mb-2 flex flex-col space-y-2">
          <h1 className="">{role}</h1>
          <p className="text-sm">{timespan}</p>
        </div>
      </div>
      <p className="p-4 text-neutral-700 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};

export default Experience;
