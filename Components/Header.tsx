import Image from "next/image";
import Link from "next/link";
import logo from "../public/sBloggerLogo.png";

function Header() {
  return (
    <div>
      <header className="flex justify-between px-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <Image
              className="w-40 object-contain cursor-pointer"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <nav className="hidden md:inline-flex items-center space-x-5">
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link
              href="#"
              className="text-white bg-green-600 px-4 py-1 rounded-full"
            >
              Subscribe
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
