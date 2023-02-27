import Image from "next/image";
import sLogo from "../public/sLogo.png";

const Banner = () => {
  return (
    <div className="flex">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-4">sBlogger</span> is a place to
          write, read, and connect
        </h1>
        <h3>It is easy and free.</h3>
      </div>
      <Image
        className="hidden md:inline-flex w-20 h-32 lg:h-48 lg:w-44"
        src={sLogo}
        alt="Image of letter S"
      />
    </div>
  );
};

export default Banner;
