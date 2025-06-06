import Link from "next/link";

export default function FooterService() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Our Service</h4>
        <li>
          <Link href="/pets-boarding-in-bangalore">Boarding</Link>
        </li>
        <li>
          <Link href="/pets-training-in-bangalore">Training</Link>
        </li>
        <li>
          <Link href="/pets-clinic-in-bangalore">Care</Link>
        </li>
        <li>
          <Link href="/dog-walkers-in-bangalore">Dog Walker</Link>
        </li>
        <li>
          <Link href="/pets-grooming-in-bangalore">Grooming</Link>
        </li>
        <li>
          <Link href="/pets-food-in-bangalore">Heath Food</Link>
        </li>
      </ul>
    </div>
  );
}
