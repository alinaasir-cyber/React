import { Link } from 'react-router-dom';

const categories = [
    { name: 'Breakfast', desc: 'Start your day right', slug: 'breakfast' },
    { name: 'Lunch', desc: 'Midday favorites', slug: 'lunch' },
    { name: 'Dinner', desc: 'Evening meals', slug: 'dinner' },
    { name: 'Desserts', desc: 'Sweet treats', slug: 'desserts' },
];

export default function Categories() {
    return (
        <section className="page categories-page">
            <div className="content-panel">
                <h2 className="page-title">Categories</h2>
                <div className="category-list">
                    {categories.map(category => (
                        <Link
                            key={category.slug}
                            to={`/categories/${category.slug}`}
                            className="category-link"
                        >
                            <h3>{category.name}</h3>
                            <p>{category.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
