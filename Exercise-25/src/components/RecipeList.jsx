import { Link } from 'react-router-dom';
import recipes from '../data/recipes.js';

export default function RecipeList() {
    return (
        <section className="page">
            <h2 className="page-title">All Recipes</h2>
            <div className="recipe-grid">
                {recipes.map(recipe => (
                    <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe-card">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <span className="category-badge">{recipe.category}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
