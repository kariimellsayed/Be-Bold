import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay*/}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content Of Hero */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center gap-6">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Be-Bold Marketing Agency"
          width={184}
          height={106}
          className="object-contain"
        />

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl text-white font-[300] uppercase font-heading max-w-11/12 leading-snug">
          Your Shortcut to Effective Digital Marketing & Functioning Web Design
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
          Helping businesses to grow since 2025
        </p>

        {/* Scroll Down Button */}
        <a
          href="#"
          className="mt-10 animate-bounce w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
