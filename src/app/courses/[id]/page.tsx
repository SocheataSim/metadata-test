import { courses, getCourse } from "@/lib/course";
import type { Metadata } from "next";
import { notFound } from "next/navigation";


type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) return { title: "Course not found" };
  return {
    title: course.name,
    description: course.description,
    openGraph: { title: course.name, description: course.description },
  };
}

// Used in Step 5: makes these pages static
export function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export default async function CoursePage({ params }: Props) {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) notFound();
  return <h1 className="p-8 text-2xl">{course.name}</h1>;
}