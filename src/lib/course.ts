export const courses = [
  { id: "1", name: "Next.js Basics", description: "Learn Next.js from zero." },
  { id: "2", name: "Frontend Development", description: "HTML, CSS, JS and React." },
  { id: "3", name: "Redux Toolkit", description: "State management with RTK Query." },
];

export async function getCourse(id: string) {
  return courses.find((c) => c.id === id) ?? null;
}