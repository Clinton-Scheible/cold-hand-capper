import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <header style={styles.header}>
      <div style={styles.content}>
        <Image
          src="/images/icon-cold-hand-capper.png"
          alt="chc_logo"
          width={60}
          height={60}
          style={{
            maxHeight: "80px",
            height: "100%",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      <div>
        <Link style={{ color: "red" }} href="/about">
          Go to About
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "blue",
    color: "white",
    display: "flex",
    width: "100%",
    height: "15vh",
    position: "relative",
    padding: "20px 20px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    textAlign: "left" as const,
  },
} as const;
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
