import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const NavbarLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/services",
      title: "Services",
    },
    {
      href: "/contact-us",
      title: "Contact Us",
    },
  ];
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1280px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/main-logo.png"
            alt="Naida Main Logo"
            width={206}
            height={70}
            className="object-contain"
          />
        </Link>
        {NavbarLinks.map((link) => {
          return (
            <Link href={link.href} key={link.title}>
              {link.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
