// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>My First Next App</h1>
      <p>This is my homepage</p>
      <Link href="/about">
        Go to About
      </Link>
    </main>
  );
}