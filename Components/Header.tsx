import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

function Header() {
  return (
    // background color to match logo: #2c3032
    <header className="flex justify-between px-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <Image
            className="w-44 object-contain cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </Link>
        <nav className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </nav>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="hidden md:inline-flex">Sign In</h3>
        <h3 className="border border-green-600 px-4 py-1 rounded-full">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
