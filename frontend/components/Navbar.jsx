import Logo from "../assets/logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="mx-auto">
      <Image src={Logo} alt="logo" />
    </nav>
  );
}
