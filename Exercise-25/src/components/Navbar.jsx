import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="site-header">
            <nav className="nav-inner" aria-label="Main navigation">
                <Link to="/" className="brand">Recipe Book</Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/recipes" className="nav-link">Recipes</Link>
                    <Link to="/categories" className="nav-link">Categories</Link>
                </div>
            </nav>
        </header>
    );
}
