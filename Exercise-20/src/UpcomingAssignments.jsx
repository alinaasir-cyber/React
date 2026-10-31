export default function UpcomingAssignments() {
    const assignments = [
        { title: 'Build a Todo App', subject: 'React Fundamentals', status: 'pending', due: '2024-03-20' },
        { title: 'API Integration', subject: 'JavaScript Advanced', status: 'completed', due: '2024-03-18' },
        { title: 'Design System', subject: 'UI/UX Design', status: 'in-progress', due: '2024-03-25' },
    ];

    return (
        <>
            <section className="dashboard-card assignments-card">
                <h2 className="card-title">Upcoming Assignments</h2>
                <div className="assignment-list">
                    {assignments.map((item) => (
                        <article className="assignment-item" key={item.title}>
                            <div className="assignment-heading">
                                <h3>{item.title}</h3>
                                <span className={`status-badge status-${item.status}`}>
                                    {item.status.replace('-', ' ')}
                                </span>
                            </div>
                            <div className="assignment-meta">
                                <span>{item.subject}</span>
                                <span>Due {item.due}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className="dashboard-card announcements-card">
                <h2 className="card-title">Announcements</h2>
                <div className="announcement-list">
                    <article className="announcement-item">
                        <h3>New Course Available</h3>
                        <p>Check out our new TypeScript course!</p>
                        <span>6 hours ago</span>
                    </article>
                    <article className="announcement-item">
                        <h3>Maintenance Notice</h3>
                        <p>Platform updates scheduled for tonight</p>
                        <span>5 hours ago</span>
                    </article>
                </div>
            </section>
        </>
    );
}