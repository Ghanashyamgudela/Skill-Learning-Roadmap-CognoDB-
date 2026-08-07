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
  ],
  data: [
    {
      type: "🎯 Projects",
      title: "Data Project Ideas",
      description: "Explore beginner-friendly project workflows and datasets.",
      url: "https://www.kaggle.com/learn",
    },
  ],
  ai: [
    {
      type: "📝 Assignments",
      title: "AI Foundations Workbook",
      description: "Work through guided tasks for core AI concepts.",
      url: "https://www.coursera.org/learn/ai-for-everyone",
    },
  ],
  cloud: [
    {
      type: "📖 Documentation",
      title: "Cloud Platform Guide",
      description: "Learn deployment patterns and service fundamentals.",
      url: "https://learn.microsoft.com/azure/",
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
      className={`roadmap-step roadmap-step--${side} roadmap-step--${status} ${isSelected ? "roadmap-step--active" : ""}`}
      onClick={() => onSelect(skill, index)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <span className="roadmap-step__marker" aria-hidden="true" />
      <span className="roadmap-step__icon" aria-hidden="true">
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
          <span className="roadmap-step__duration">
            ⏱ {durations[index % durations.length]}
          </span>
          <span className={`roadmap-step__status-icon roadmap-step__status-icon--${status}`}>
            {currentStatus.icon}
          </span>
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
    setActiveStep(0);
    setRoadmapVisible(false);
    setExpandedTopic(null);
    setShowScrollHint(false);
    setResourcesHighlighted(false);
    setSectionHighlighted(false);

    fetch(`${API_URL}/roadmap/${encodeURIComponent(career)}`)
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills || []);
        setLoading(false);

        window.setTimeout(() => {
          roadmapRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          setSectionHighlighted(true);

          window.setTimeout(() => {
            setSectionHighlighted(false);
          }, 1400);
        }, 180);
      })
      .catch(() => {
        setSkills([]);
        setLoading(false);
      });
  }, [career]);

  useEffect(() => {
    if (!skills.length) return;

    const steps = Array.from(document.querySelectorAll(".roadmap-step"));

    if (!steps.length) return;

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
  }, [skills.length]);

  const handleSelect = (skill, index) => {
    setActiveStep(index);

    const nextExpanded = expandedTopic === skill ? null : skill;

    setExpandedTopic(nextExpanded);
    setShowScrollHint(Boolean(nextExpanded));
    setResourcesHighlighted(false);

    selectSkill(skill);

    if (nextExpanded) {
      window.setTimeout(() => {
        resourcesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setResourcesHighlighted(true);

        window.setTimeout(() => {
          setResourcesHighlighted(false);
        }, 1400);
      }, 120);
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
      {/* Rest of your JSX remains exactly the same */}
    </section>
  );
}

export default Roadmap;
