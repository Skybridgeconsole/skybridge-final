import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🚀 Skybridge Console is Live</h1>
      <p>Welcome to your platform. Click below to enter your dashboard.</p>
      <Link href="/dashboard">Enter Dashboard</Link>
    </main>
  );
}