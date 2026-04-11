import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <header style={styles.header}>
      <div style={styles.content}>
        <Image
          src="/images/icon-cold-hand-capper.png"
          alt="chc_logo"
          width={300}
          height={200}
          style={{ height: "50%", width: "auto",  objectFit: "fill" }}
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
    height: "175px",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    textAlign: "left" as const,
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