import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-10">
      <img
        className="m-auto mb-4 w-7/12 rounded-full sm:w-3/12 xl:w-1/5"
        src="/assets/imgs/hero-image.png"
        alt="@lurryputri Profile Picture | picture of lurryputri | picture of lurryputri | picture of Lurry Putri"
      />

      <h1 className="text-4xl">Lurry Putri</h1>
      <h2 className="text-xl">Software Engineer | UI/UX Designer</h2>
    </div>
  );
};

export default Hero;
