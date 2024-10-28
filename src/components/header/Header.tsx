import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  showBackLink?: boolean; // Accept the prop
  showContactLink?: boolean;
};

const Header = ({ showBackLink, showContactLink = true }: HeaderProps) => {
  return (
    <div className="py-2 fixed top-0 left-0 w-full bg-white z-20 shadow-lg">
      <div
        className={`mx-4 lg:mx-56 flex  ${
          showContactLink ? "justify-between" : "justify-end"
        }`}
      >
        <Link href="/#hero">
          <Image
            className="w-36 md:w-64"
            src="/logo/logo-thailand-sababa1.png"
            alt="logo"
            layout="fill"
            // width={258}
            // height={100}
          />
        </Link>
        {showContactLink && (
          <Link
            href="/"
            className="flex flex-col justify-center text-sm md:text-lg text-gray-700  hover:text-black px-4 -my-2 rounded-lg hover:scale-105"
          >
            <div className="font-semibold">
              <p className="text-center">לחצו כאן</p>
              <p className="text-center">להשארת פרטים</p>
            </div>
          </Link>
        )}

        {showBackLink && (
          <Link href="/#hero" className="mt-10 text-xl">
            חזרה לעמוד הבית
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
