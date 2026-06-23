import { useNavigate } from 'react-router-dom'

export default function RecipeDetail({ recipe }) {
  const navigate = useNavigate()

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Recipes
      </button>

      <div className="detail-header">
        <img src={recipe.image} alt={recipe.title} className="detail-image" />
        <div className="detail-info">
          <span className="card-category">{recipe.category}</span>
          <h1 className="detail-title">{recipe.title}</h1>
          <div className="detail-meta">
            <span>⏱ {recipe.time}</span>
            <span>👤 {recipe.servings} servings</span>
          </div>
        </div>
      </div>

      <div className="detail-body">
        <section className="detail-section">
          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Steps</h2>
          <ol className="steps-list">
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
