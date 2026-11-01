import { Link, useParams } from 'react-router-dom';
import recipes from '../data/recipes.js';

export default function CategoryDetail() {
    const { categoryName } = useParams();
    const filteredRecipes = recipes.filter(
        recipe => recipe.category.toLowerCase() === categoryName.toLowerCase()
    );

    return (
        <section className="page category-detail-page">
            <div className="content-panel">
                <Link to="/categories" className="back-link">&larr; Back to Categories</Link>
                <h2 className="page-title">{categoryName} Recipes</h2>
                <div className="category-recipe-list">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map(recipe => (
                            <Link
                                key={recipe.id}
                                to={`/recipes/${recipe.id}`}
                                className="category-recipe-card"
                            >
                                <h3>{recipe.title}</h3>
                                <p>{recipe.description}</p>
                            </Link>
                        ))
                    ) : (
                        <p className="empty-message">No recipes found in this category.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
