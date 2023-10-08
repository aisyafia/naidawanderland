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
    <header>
      <nav>
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
