import RecipeCard from './RecipeCard'

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p className="no-results">No recipes found. Try a different search.</p>
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
