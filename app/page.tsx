import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <header style={styles.header}>
      <div style={styles.content}>
        <Image
          src="/images/icon-cold-hand-capper.png"
          alt="My First Next App"
          width={200}
          height={80}
        />
        <p>This is my homepage</p>
        <Link href="/about">Go to About</Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "blue",
    color: "white",
    width: "100%",
    padding: "20px 0",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    textAlign: "center",
  },
};
/*
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
*/