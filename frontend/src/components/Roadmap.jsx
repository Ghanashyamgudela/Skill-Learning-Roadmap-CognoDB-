import { useEffect, useRef, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const roadmapIcons = ["⚡", "🎯", "🧠", "🚀", "📘", "✨"];

const topicResources = {
  python: [
    {
      type: "📺 YouTube Videos",
      title: "Python Basics Crash Course",
      description: "A fast primer for syntax, variables, and control flow.",
      url: "https://www.youtube.com/results?search_query=python+for+beginners",
    },
    {
      type: "📖 Documentation",
      title: "Python Official Docs",
      description: "Official guides and tutorials to deepen your understanding.",
      url: "https://docs.python.org/3/",
    },
    {
      type: "💻 Interactive",
      title: "Codecademy Python Course",
      description: "Hands-on lessons for Python fundamentals and practice exercises.",
      url: "https://www.codecademy.com/learn/learn-python-3",
    },
    {
      type: "📘 Tutorial",
      title: "Automate the Boring Stuff",
      description: "Build practical Python projects as you learn.",
      url: "https://automatetheboringstuff.com/",
    },
    {
      type: "🧩 Challenges",
      title: "HackerRank Python Practice",
      description: "Solve real coding problems with rising difficulty.",
      url: "https://www.hackerrank.com/domains/python",
    },
  ],
  sql: [
    {
      type: "📄 Notes",
      title: "SQL Query Essentials",
      description: "Learn joins, filters, and aggregations with short examples.",
      url: "https://www.w3schools.com/sql/",
    },
    {
      type: "💻 Practice Problems",
      title: "SQL Practice Playground",
      description: "Sharpen your skills with practical query challenges.",
      url: "https://www.sqlbolt.com/",
    },
    {
      type: "📚 Tutorial",
      title: "Mode Analytics SQL Tutorial",
      description: "Step-by-step SQL guides with interactive examples.",
      url: "https://mode.com/sql-tutorial/",
    },
    {
      type: "🧠 Challenges",
      title: "LeetCode SQL Problems",
      description: "Practice real interview-style database queries.",
      url: "https://leetcode.com/problemset/database/",
    },
    {
      type: "📖 Guide",
      title: "SQLZoo",
      description: "Interactive SQL lessons for hands-on query practice.",
      url: "https://sqlzoo.net/",
    },
  ],
  react: [
    {
      type: "📺 YouTube Videos",
      title: "React in 30 Minutes",
      description: "A clear walkthrough of components, props, and state.",
      url: "https://www.youtube.com/results?search_query=react+tutorial",
    },
    {
      type: "🧠 Quizzes",
      title: "React Quiz Challenge",
      description: "Test your understanding of modern React concepts.",
      url: "https://www.sanfoundry.com/react-questions-answers/",
    },
    {
      type: "📖 Documentation",
      title: "Official React Docs",
      description: "The authoritative source for hooks, components, and APIs.",
      url: "https://react.dev/",
    },
    {
      type: "💡 Projects",
      title: "Frontend Mentor React",
      description: "Build UI components and app layouts with real design briefs.",
      url: "https://www.frontendmentor.io/challenges?ref=react",
    },
    {
      type: "🎓 Guide",
      title: "React Developer Roadmap",
      description: "Learn the recommended path from basics through advanced React.",
      url: "https://roadmap.sh/frontend/react",
    },
  ],
  javascript: [
    {
      type: "📖 Documentation",
      title: "JavaScript MDN Guide",
      description: "A dependable reference for syntax and browser APIs.",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      type: "⚡ Coding Challenges",
      title: "JavaScript Challenges",
      description: "Practice logic, arrays, and async patterns daily.",
      url: "https://javascript30.com/",
    },
    {
      type: "📘 Tutorial",
      title: "JavaScript.info",
      description: "A modern, deep guide to core JavaScript concepts.",
      url: "https://javascript.info/",
    },
    {
      type: "🧑‍💻 Course",
      title: "freeCodeCamp JavaScript",
      description: "Full curriculum with exercises, projects, and certification.",
      url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    },
    {
      type: "💡 Reference",
      title: "ES6 Guide",
      description: "Master modern JavaScript features and syntactic improvements.",
      url: "https://www.freecodecamp.org/news/es6-guide/",
    },
  ],
  data: [
    {
      type: "🎯 Projects",
      title: "Data Project Ideas",
      description: "Explore beginner-friendly project workflows and datasets.",
      url: "https://www.kaggle.com/learn",
    },
    {
      type: "📘 Guide",
      title: "Pandas Data Analysis",
      description: "Learn data manipulation with the most popular Python library.",
      url: "https://pandas.pydata.org/docs/getting_started/index.html",
    },
    {
      type: "📊 Visualization",
      title: "Plotly Data Stories",
      description: "Build interactive charts and dashboards for analysis.",
      url: "https://plotly.com/python/",
    },
  ],
  ai: [
    {
      type: "📝 Assignments",
      title: "AI Foundations Workbook",
      description: "Work through guided tasks for core AI concepts.",
      url: "https://www.coursera.org/learn/ai-for-everyone",
    },
    {
      type: "📚 Course",
      title: "fast.ai Practical Deep Learning",
      description: "Project-focused AI training for real applications.",
      url: "https://www.fast.ai/",
    },
    {
      type: "📖 Reference",
      title: "OpenAI API Docs",
      description: "Learn how to build AI services with modern APIs.",
      url: "https://platform.openai.com/docs/",
    },
  ],
  cloud: [
    {
      type: "📖 Documentation",
      title: "Cloud Platform Guide",
      description: "Learn deployment patterns and service fundamentals.",
      url: "https://learn.microsoft.com/azure/",
    },
    {
      type: "🎓 Training",
      title: "AWS Cloud Practitioner",
      description: "Introductory cloud concepts and architecture on AWS.",
      url: "https://aws.amazon.com/training/path-cloud-practitioner/",
    },
    {
      type: "☁️ Hands-on",
      title: "Google Cloud Skills",
      description: "Practice deploying services on Google Cloud Platform.",
      url: "https://cloud.google.com/training",
    },
  ],
};

function getTopicResources(skill) {
  const normalized = skill.toLowerCase();

  for (const [keyword, resources] of Object.entries(topicResources)) {
    if (normalized.includes(keyword)) {
      return resources;
    }
  }

  return [];
}

function RoadmapMilestone({ skill, index, status, side, isSelected, onSelect }) {
  const durations = ["3 hrs", "5 hrs", "7 hrs", "9 hrs", "6 hrs", "8 hrs"];
  const descriptions = [
    "Lay the foundation with focused concepts and guided practice.",
    "Build confidence through practical exercises and feedback loops.",
    "Link knowledge to real-world scenarios and modern workflows.",
    "Strengthen your work with portfolio-ready techniques.",
    "Refine your execution and prepare for advanced challenges.",
    "Wrap up the journey with a polished, launch-ready outcome.",
  ];

  const statusMeta = {
    completed: { label: "Completed", icon: "✓" },
    current: { label: "Available", icon: "↗" },
    locked: { label: "Locked", icon: "◌" },
  };

  const currentStatus = statusMeta[status];

  return (
    <button
      type="button"
      className={`roadmap-step roadmap-step--${side} roadmap-step--${status} ${
        isSelected ? "roadmap-step--active" : ""
      }`}
      onClick={() => onSelect(skill, index)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <span className="roadmap-step__marker" />
      <span className="roadmap-step__icon">
        {roadmapIcons[index % roadmapIcons.length]}
      </span>

      <span className="roadmap-step__content">
        <span className="roadmap-step__meta">
          <span className="roadmap-step__number">Step {index + 1}</span>
          <span className={`roadmap-step__status roadmap-step__status--${status}`}>
            {currentStatus.label}
          </span>
        </span>

        <h3>{skill}</h3>
        <p>{descriptions[index % descriptions.length]}</p>

        <span className="roadmap-step__footer">
          <span>⏱ {durations[index % durations.length]}</span>
          <span>{currentStatus.icon}</span>
        </span>
      </span>
    </button>
  );
}

function Roadmap({ career, selectSkill }) {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [roadmapVisible, setRoadmapVisible] = useState(false);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [resourcesHighlighted, setResourcesHighlighted] = useState(false);
  const [sectionHighlighted, setSectionHighlighted] = useState(false);

  const resourcesRef = useRef(null);
  const roadmapRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setSkills([]);
    setActiveStep(0);
    setExpandedTopic(null);
    setShowScrollHint(false);

    fetch(`${API_URL}/roadmap/${encodeURIComponent(career)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch roadmap");
        }
        return res.json();
      })
      .then((data) => {
        setSkills(data.skills || []);
        setLoading(false);

        setTimeout(() => {
          roadmapRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          setSectionHighlighted(true);

          setTimeout(() => {
            setSectionHighlighted(false);
          }, 1400);
        }, 180);
      })
      .catch((err) => {
        console.error(err);
        setSkills([]);
        setLoading(false);
      });
  }, [career]);

  useEffect(() => {
    if (!skills.length) return;

    const steps = document.querySelectorAll(".roadmap-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRoadmapVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, [skills]);

  const handleSelect = (skill, index) => {
    setActiveStep(index);

    const expanded = expandedTopic === skill ? null : skill;

    setExpandedTopic(expanded);
    setShowScrollHint(Boolean(expanded));
    setResourcesHighlighted(Boolean(expanded));
    selectSkill(skill);

    if (expanded) {
      setTimeout(() => {
        resourcesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);

      setTimeout(() => {
        setResourcesHighlighted(false);
      }, 1400);
    }
  };

  const selectedResources = expandedTopic
    ? getTopicResources(expandedTopic)
    : [];

  return (
    <section
      ref={roadmapRef}
      className={`section roadmap-section ${
        sectionHighlighted ? "is-highlighted" : ""
      }`}
    >
      <div className="section-header">
        <h2>🗺️ Course Roadmap</h2>
        <p>Follow the steps below in order.</p>
      </div>

      <div className="roadmap-course-pill">
        Viewing Roadmap: {career}
      </div>

      {loading ? (
        <p>Loading roadmap...</p>
      ) : skills.length === 0 ? (
        <p>No roadmap found.</p>
      ) : (
        <>
          <div
            className={`roadmap-track ${
              roadmapVisible ? "is-visible" : ""
            }`}
          >
            {skills.map((skill, index) => (
              <RoadmapMilestone
                key={`${skill}-${index}`}
                skill={skill}
                index={index}
                status={
                  index < activeStep
                    ? "completed"
                    : index === activeStep
                    ? "current"
                    : "locked"
                }
                side={index % 2 === 0 ? "left" : "right"}
                isSelected={expandedTopic === skill}
                onSelect={handleSelect}
              />
            ))}
          </div>

          <div ref={resourcesRef} className="roadmap-resources">
            {expandedTopic && (
              <div className={`resource-panel ${resourcesHighlighted ? "is-highlighted" : ""}`}>
                <div className="resource-panel__header">
                  <h3>Learn more about {expandedTopic}</h3>
                  <p>Curated resources to help you study this topic with confidence.</p>
                </div>

                <div className="resource-list">
                  {selectedResources.length > 0 ? (
                    selectedResources.map((resource, idx) => (
                      <a
                        key={`${expandedTopic}-${idx}`}
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                        className="resource-card"
                      >
                        <span className="resource-card__type">{resource.type}</span>
                        <h4>{resource.title}</h4>
                        <p>{resource.description}</p>
                      </a>
                    ))
                  ) : (
                    <p>No additional resources found for this topic.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default Roadmap;
