import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About our team",
};

export default function AboutPage() {
  return <h1 className="p-8 text-2xl">About Us</h1>;
}
