"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export default function MealPlanner() {
  const [recipes,setRecipes] = useState<any[]>([]);
  const [plan,setPlan] = useState<any>({});

  useEffect(() => {
    loadRecipes();
  }, []);

  async function loadRecipes() {
    const user = await supabase.auth.getUser();
    const { data } = await supabase
      .from("recipes")
      .select("*")
      .eq("user_id", user.data.user?.id);

    setRecipes(data || []);
  }

  function randomRecipe() {
    return recipes[Math.floor(Math.random()*recipes.length)];
  }

  return (
    <div>
      {days.map(day => (
        <div key={day} className="flex gap-3 mb-2">
          <div className="w-20">{day}</div>

          <select
            className="border p-1"
            value={plan[day]?.id || ""}
            onChange={(e)=>{
              const r = recipes.find(x=>x.id===e.target.value);
              setPlan({...plan,[day]:r});
            }}
          >
            <option value="">--</option>
            {recipes.map(r=>(
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>

          <button
            className="bg-gray-300 px-2"
            onClick={()=>setPlan({...plan,[day]:randomRecipe()})}
          >
            Random
          </button>
        </div>
      ))}
    </div>
  );
}