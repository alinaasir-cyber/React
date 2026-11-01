import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="page home-page">
            <h1>Welcome to Recipe Book</h1>
            <p className="home-description">Discover delicious recipes and start cooking today!</p>
            <div className="home-actions">
                <Link to="/recipes" className="button button-primary">
                    Browse Recipes
                </Link>
                <Link to="/categories" className="button button-secondary">
                    Recipe Categories
                </Link>
            </div>
        </section>
    );
}
