"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const user = await supabase.auth.getUser();
    const { data } = await supabase
      .from("recipes")
      .select("*")
      .eq("user_id", user.data.user?.id);

    setRecipes(data || []);
  }

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id} className="border p-3 mb-2">
          <b>{r.name}</b>
          <div>{r.ingredients.join(", ")}</div>
        </div>
      ))}
    </div>
  );
}