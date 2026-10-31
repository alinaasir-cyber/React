import './App.css';
import Header from './Header';
import StatsGrid from './StatsGrid';
import CourseProgress from './CourseProgress';
import UpcomingAssignments from './UpcomingAssignments';

export default function App() {
    return (
        <main className="dashboard-page">
            <div className="dashboard-container">
                <Header />
                <StatsGrid />
                <div className="dashboard-content-grid">
                    <div className="dashboard-main-column">
                        <CourseProgress />
                    </div>
                    <aside className="dashboard-sidebar">
                        <UpcomingAssignments />
                    </aside>
                </div>
            </div>
        </main>
    );
}