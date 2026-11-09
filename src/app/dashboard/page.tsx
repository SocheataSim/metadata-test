import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dashboard", robots: { index: false, follow: false } };
export default function Dashboard() {
  return <h1 className="p-8 text-2xl">Private dashboard</h1>;
}