import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>

      <p>
        <Link href="/meals/page-1">Page 1</Link>
      </p>
    </main>
  );
}
