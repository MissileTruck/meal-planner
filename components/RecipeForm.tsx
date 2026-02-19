"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function RecipeForm() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  async function saveRecipe() {
    const user = await supabase.auth.getUser();

    await supabase.from("recipes").insert({
      user_id: user.data.user?.id,
      name,
      ingredients: ingredients.split("\n"),
    });

    setName("");
    setIngredients("");
    alert("Saved");
  }

  return (
    <div>
      <input
        className="border p-2 block mb-2"
        placeholder="Recipe name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="border p-2 block mb-2"
        placeholder="Ingredients (one per line)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2" onClick={saveRecipe}>
        Save Recipe
      </button>
    </div>
  );
}