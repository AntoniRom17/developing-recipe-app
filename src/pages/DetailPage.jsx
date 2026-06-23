import { useParams, useNavigate } from 'react-router-dom'
import RecipeDetail from '../components/RecipeDetail'
import recipes from '../data/recipes'

export default function DetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = recipes.find((r) => r.id === Number(id))

  if (!recipe) {
    return (
      <main className="main-content">
        <p>Recipe not found.</p>
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Recipes
        </button>
      </main>
    )
  }

  return (
    <main className="main-content">
      <RecipeDetail recipe={recipe} />
    </main>
  )
}
