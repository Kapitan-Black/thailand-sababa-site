import Image from "next/image";

const Hero = () => {
 
  return (
    <div dir="rtl" className="relative" id="hero">
      <Image
        src="/hero/hero.jpg"
        alt="תמונת רקע"
        className="w-full h-[500px] md:h-[600px] object-cover mt-24"
        width={1600}
        height={800}
   
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-2xl lg:text-4xl font-bold text-center">
        תאילנד בסבבה בלי כאבי ראש מיותרים
      </h1>
    </div>
  );
};

export default Hero;
