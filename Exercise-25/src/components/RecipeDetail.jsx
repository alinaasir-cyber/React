import { useNavigate, useParams } from 'react-router-dom';
import recipes from '../data/recipes.js';

export default function RecipeDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = recipes.find(item => item.id === Number(id));

    if (!recipe) {
        return <p className="page not-found">Recipe not found!</p>;
    }

    return (
        <section className="page detail-page">
            <button onClick={() => navigate(-1)} className="back-link">
                &larr; Back to Recipes
            </button>
            <h2 className="page-title">{recipe.title}</h2>
            <p className="detail-description">{recipe.description}</p>

            <div className="detail-columns">
                <div>
                    <h3>Ingredients</h3>
                    <ul className="ingredient-list">
                        {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Instructions</h3>
                    <ol className="instruction-list">
                        {recipe.instructions.map(instruction => <li key={instruction}>{instruction}</li>)}
                    </ol>
                </div>
            </div>
        </section>
    );
}
