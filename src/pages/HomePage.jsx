import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import RecipeList from '../components/RecipeList'
import recipes from '../data/recipes'

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="main-content">
      <div className="hero">
        <h1>Find Your Next Favourite Recipe</h1>
        <p>Browse {recipes.length} delicious recipes across all categories</p>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>
      <RecipeList recipes={filtered} />
    </main>
  )
}
