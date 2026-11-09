import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/lib/course";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse all available courses",
};

export default function CoursesPage() {
  return (
    <main className="p-8">
      <h1 className="mb-4 text-2xl">All Courses</h1>
      {courses.map((c) => (
        <p key={c.id}>
          <Link href={`/courses/${c.id}`} className="underline">
            {c.name}
          </Link>
        </p>
      ))}
    </main>
  );
}