import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div dir="rtl" className="relative">
      <Image
        src="/footer/footer.png"
        alt="footer"
        className="w-full h-[350px] md:h-[300px] object-cover opacity-40"
              width={1200}
              height={400}
      />

      {/* Overlay for the footer content */}
      <div className="absolute inset-0 -top-10 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row md:gap-2 text-lg">
          <p className="text-center">טלפון חירום בתאילנד</p>
          <p className="text-center">6654147845+</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 text-lg">
          <p className="text-center">וואטסאפ לקוחות בתאילנד</p>
          <p className="text-center">6651324874+</p>
        </div>

        <div className="text-lg">
          <p className="text-center">כתובתנו</p>
          <p dir="ltr" className="text-center px-2">
            1000 1st FL. 40 Thong Lo Khlong Tan Nuea, Watthana, Bangkok 10110
          </p>
        </div>
        <Link
          href="/"
          className="mt-4 text-xl font-semibold underline text-center hover:text-blue-600"
        >
          <p>לחצו כאן</p>
          <p>השארת פרטים</p>
        </Link>
      </div>

      {/* Copyright text at the bottom */}
      <div className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50 py-2">
        <p>&copy; Thailand-Sababa</p>
      </div>
    </div>
  );
};

export default Footer;
