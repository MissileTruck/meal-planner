import RecipeForm from "@/components/RecipeForm";
import RecipeList from "@/components/RecipeList";

export default function Recipes() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Recipes</h1>
      <RecipeForm />
      <RecipeList />
    </div>
  );
}
