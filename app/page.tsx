import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Meal Planner</h1>

      <div className="flex flex-col gap-3">
        <Link href="/login" className="text-blue-600 underline">
          Login
        </Link>

        <Link href="/recipes" className="text-blue-600 underline">
          Manage Recipes
        </Link>

        <Link href="/planner" className="text-blue-600 underline">
          Weekly Planner
        </Link>
      </div>
    </div>
  );
}
