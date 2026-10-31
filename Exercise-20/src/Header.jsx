export default function Header() {
    return (
        <header className="dashboard-header">
            <div className="dashboard-welcome">
                <h1>Welcome back, Student!</h1>
                <p>Here's what's happening with your courses today.</p>
            </div>
            <div className="dashboard-header-actions">
                <button className="notification-button" type="button" aria-label="Notifications">🔔</button>
                <span className="profile-avatar" aria-label="Student profile">S</span>
            </div>
        </header>
    );
}