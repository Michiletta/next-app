import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <div>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </div>
    </ul>
  );
}
