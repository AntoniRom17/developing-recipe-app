import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="card-link">
      <div className="card">
        <img src={recipe.image} alt={recipe.title} className="card-image" />
        <div className="card-body">
          <span className="card-category">{recipe.category}</span>
          <h3 className="card-title">{recipe.title}</h3>
          <div className="card-meta">
            <span>⏱ {recipe.time}</span>
            <span>👤 {recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
