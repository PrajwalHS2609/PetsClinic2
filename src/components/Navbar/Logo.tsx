import Image from "next/image";
import logo from "@/Images/logo.png";
import Link from "next/link";
import "./Navbar.css";
export default function Logo() {
  return (
    <div className="logo-container">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
}
