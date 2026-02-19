"use client";

export default function GroceryList({ plan }: any) {
  const items = new Set<string>();

  Object.values(plan).forEach((r: any) => {
    r?.ingredients?.forEach((i: string) => items.add(i));
  });

  return (
    <div>
      <h2 className="text-xl mt-4">Grocery List</h2>
      {[...items].map(i => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
}
