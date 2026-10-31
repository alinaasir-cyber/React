export default function CourseProgress() {
    const courses = [
        { name: 'React Fundamentals', progress: 75, next: 'Components & Props', instructor: 'Sarah Wilson' },
        { name: 'JavaScript Advanced', progress: 45, next: 'Async/Await', instructor: 'Mike Johnson' },
        { name: 'UI/UX Design', progress: 90, next: 'Color Theory', instructor: 'Emily Chen' },
    ];

    return (
        <section className="dashboard-card course-progress-card">
            <h2 className="card-title">Course Progress</h2>
            <div className="course-list">
                {courses.map((course) => (
                    <article className="course-item" key={course.name}>
                        <div className="course-heading">
                            <h3>{course.name}</h3>
                            <span>{course.progress}%</span>
                        </div>
                        <div
                            className="progress-track"
                            role="progressbar"
                            aria-label={`${course.name} progress`}
                            aria-valuenow={course.progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        >
                            <div className="progress-fill" style={{ width: `${course.progress}%` }} />
                        </div>
                        <div className="course-meta">
                            <span>Next: {course.next}</span>
                            <span>{course.instructor}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
