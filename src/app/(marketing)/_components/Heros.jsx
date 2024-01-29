import Image from "next/image";
const Heroes = () => {
  return (
    <div className="flex flex-cok items-center justify-center">
      <div className="relative w-[300px] h-[300px] sm:w-[305px] sm:h-[350px] md:w-[400px] md:h-[400px]">
        <Image
          src="/documents.png"
          fill
          className="object-contain dark:hidden"
          alt="Documents"
        />
        <Image
          src="/documents-dark.png"
          fill
          className="object-contain hidden dark:block"
          alt="Documents"
        />
      </div>
      <div className="relative h-[400px] w-[400px] hidden md:block">
        <Image
          src="/reading.png"
          fill
          className="object-contain dark:hidden"
          alt="Reading"
        />
        <Image
          src="/reading-dark.png"
          fill
          className="object-contain hidden dark:block"
          alt="Reading"
        />
      </div>
    </div>
  );
};

export default Heroes;