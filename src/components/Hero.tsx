import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <p className="my-6">Your Travel Expert</p>
        <h1 className="font-avenir hero__title">
          START YOUR NEXT ADVENTURE WITH NAIDA WANDERLAND INDONESIA
        </h1>

        <p className="my-6">Photo by Dimas Hardjo</p>
      </div>

      <div className="hero__image-container">
        <div className="hero__image rounded-xl">
          <Image
            src="/hero-background.JPG"
            alt="Hero Background"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
