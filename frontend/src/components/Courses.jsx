import { useEffect, useState } from "react";

function Courses({ skill }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!skill) return;

    setLoading(true);
    setError(null);
    setCourses([]);

    fetch(`${API_URL}/courses/${encodeURIComponent(skill)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load courses (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        setCourses(data.courses || []);
      })
      .catch((err) => {
        setError(err.message || "Unable to load courses.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [skill, API_URL]);

  return (
    <section className="section courses-section">
      <div className="section-header">
        <h2>Courses for {skill}</h2>
      </div>

      {loading ? (
        <p className="status-text">Loading courses...</p>
      ) : error ? (
        <p className="status-text error-text">{error}</p>
      ) : courses.length === 0 ? (
        <p className="status-text">
          No courses available for {skill} yet.
        </p>
      ) : (
        <div className="grid course-grid">
          {courses.map((course) => (
            <article className="card course-card" key={course.name}>
              <h3>{course.name}</h3>

              <p className="meta">Platform: {course.platform}</p>

              <a
                href={course.url}
                target="_blank"
                rel="noreferrer noopener"
                className="button link-button"
              >
                Visit Course
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Courses;
