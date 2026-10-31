export default function StatsGrid() {
    const stats = [
        { icon: '📊', label: 'Average Grade', value: '77%' },
        { icon: '📚', label: 'Courses', value: '3' },
        { icon: '⏱️', label: 'Study Hours', value: '75h' },
        { icon: '📝', label: 'Assignments', value: '24' },
    ];

    return (
        <section className="stats-grid" aria-label="Learning statistics">
            {stats.map((stat) => (
                <article key={stat.label} className="stat-card">
                    <span className="stat-icon" aria-hidden="true">{stat.icon}</span>
                    <div className="stat-copy">
                        <p>{stat.label}</p>
                        <strong>{stat.value}</strong>
                    </div>
                </article>
            ))}
        </section>
    );
}