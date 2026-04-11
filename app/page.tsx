import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <header style={styles.header}>
      <div style={styles.content}>
        <Image
          src="/images/icon-cold-hand-capper.png"
          alt="chc_logo"
          width={100}
          height={200}
          style={{ justifyContent: "center", objectFit: "fill" }}
        />
        <p>This is my homepage</p>
        <Link style={{ color: "red" }} href="/about">
          Go to About
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "purple",
    color: "white",
    width: "100%",
    height: "100%",
    padding: "20px 0",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    color: "blue",
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
