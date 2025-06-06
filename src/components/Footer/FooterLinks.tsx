import Link from "next/link";

export default function FooterLink() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Our Links</h4>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link href="/other-services" style={{color:"#443935"}}>OtherServices</Link>
        </li>
      </ul>
    </div>
  );
}
