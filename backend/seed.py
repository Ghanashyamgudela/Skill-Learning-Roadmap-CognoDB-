from db import driver

categories = [
    "Frontend",
    "Backend",
    "AI",
    "Database",
    "DevOps"
]
skills = [
    {"name": "HTML", "difficulty": "Beginner"},
    {"name": "CSS", "difficulty": "Beginner"},
    {"name": "JavaScript", "difficulty": "Intermediate"},
    {"name": "React", "difficulty": "Intermediate"},
    {"name": "Next.js", "difficulty": "Advanced"},
    {"name": "Git", "difficulty": "Beginner"},
    {"name": "Python", "difficulty": "Intermediate"},
    {"name": "Flask", "difficulty": "Intermediate"},
    {"name": "SQL", "difficulty": "Intermediate"},
    {"name": "Docker", "difficulty": "Advanced"},
    {"name": "NumPy", "difficulty": "Intermediate"},
{"name": "Pandas", "difficulty": "Intermediate"},
{"name": "Machine Learning", "difficulty": "Advanced"},
{"name": "TensorFlow", "difficulty": "Advanced"},
]

skill_categories = {
    "HTML": "Frontend",
    "CSS": "Frontend",
    "JavaScript": "Frontend",
    "React": "Frontend",
    "Next.js": "Frontend",
    "Git": "Backend",
    "Python": "Backend",
    "Flask": "Backend",
    "SQL": "Database",
    "Docker": "DevOps"
}

careers = [
    {
        "name": "Frontend Developer",
        "description": "Builds modern web applications."
    },
    {
        "name": "Backend Developer",
        "description": "Develops server-side applications."
    },
    {
        "name": "Full Stack Developer",
        "description": "Works on both frontend and backend."
    },
    {
        "name": "AI Engineer",
        "description": "Builds AI and machine learning applications."
    },
    {
        "name": "Data Scientist",
        "description": "Analyzes data and builds predictive models."
    }
]

career_skills = {
    "Frontend Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Git"
    ],

    "Backend Developer": [
        "Python",
        "Flask",
        "SQL",
        "Git",
        "Docker"
    ],

    "Full Stack Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python",
        "Flask",
        "SQL",
        "Git"
    ],

    "AI Engineer": [
        "Python",
        "NumPy",
        "Pandas",
        "Machine Learning",
        "TensorFlow"
    ],

    "Data Scientist": [
        "Python",
        "SQL",
        "Pandas",
        "NumPy"
    ]
}

prerequisites = {
    "HTML": "CSS",
    "CSS": "JavaScript",
    "JavaScript": "React",
    "React": "Next.js",

    "Python": "NumPy",
    "NumPy": "Pandas",
    "Pandas": "Machine Learning",
    "Machine Learning": "TensorFlow"
}

courses = [
    {
        "title": "HTML Crash Course",
        "platform": "YouTube",
        "url": "https://www.youtube.com/results?search_query=html+crash+course"
    },
    {
        "title": "CSS Complete Guide",
        "platform": "YouTube",
        "url": "https://www.youtube.com/results?search_query=css+complete+guide"
    },
    {
        "title": "JavaScript.info",
        "platform": "JavaScript.info",
        "url": "https://javascript.info/"
    },
    {
        "title": "React Official Docs",
        "platform": "React",
        "url": "https://react.dev/"
    },
    {
        "title": "Next.js Learn",
        "platform": "Next.js",
        "url": "https://nextjs.org/learn"
    },
    {
        "title": "Python for Everybody",
        "platform": "Coursera",
        "url": "https://www.coursera.org/"
    },
    {
        "title": "Flask Mega Tutorial",
        "platform": "Miguel Grinberg",
        "url": "https://blog.miguelgrinberg.com/"
    },
    {
        "title": "SQLBolt",
        "platform": "SQLBolt",
        "url": "https://sqlbolt.com/"
    },
    {
        "title": "Docker Crash Course",
        "platform": "YouTube",
        "url": "https://www.youtube.com/results?search_query=docker+crash+course"
    },  
    {
        "title": "NumPy Tutorial",
        "platform": "YouTube",
        "url": "https://www.youtube.com/results?search_query=numpy+tutorial"
    },
    {
        "title": "Pandas Tutorial",
        "platform": "YouTube",
        "url": "https://www.youtube.com/results?search_query=pandas+tutorial"
    },
    {
        "title": "Machine Learning Crash Course",
        "platform": "Google",   
        "url": "https://developers.google.com/machine-learning/crash-course"
        
    },
    {
        "title": "TensorFlow Official Docs",
        "platform": "TensorFlow",   
        "url": "https://www.tensorflow.org/"
        
    },
    {
        "title": "Deep Learning Specialization",
        "platform": "Coursera",
        "url": "https://www.coursera.org/specializations/deep-learning"
    },
    {
        "title": "Data Science Specialization",
        "platform": "Coursera",
        "url": "https://www.coursera.org/specializations/jhu-data-science"
        
    },
    {
        "title": "Applied Data Science with Python Specialization",
        "platform": "Coursera",
        "url": "https://www.coursera.org/specializations/data-science-python"
    },
    {
        "title": "Data Science and Machine Learning Bootcamp with R",
        "platform": "Udemy",
        "url": "https://www.udemy.com/course/data-science-and-machine-learning-bootcamp-with-r/"
        
    },
    {
        "title": "Python for Data Science and Machine Learning Bootcamp",
        "platform": "Udemy",
        "url": "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"
    },
    {
        "title": "Machine Learning Engineer Nanodegree",
        "platform": "Udacity",
        "url": "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t"
        
    },
    {
        "title": "AI Programming with Python Nanodegree",
        "platform": "Udacity",
        "url": "https://www.udacity.com/course/ai-programming-python-nanodegree--nd089"
    },
    {
    "title": "Deep Learning Nanodegree",
    "platform": "Udacity",  
    "url": "https://www.udacity.com/course/deep-learning-nanodegree--nd101"
    }
]

course_skill = {
    "HTML Crash Course": "HTML",
    "CSS Complete Guide": "CSS",
    "JavaScript.info": "JavaScript",
    "React Official Docs": "React",
    "Next.js Learn": "Next.js",
    "Python for Everybody": "Python",
    "Flask Mega Tutorial": "Flask",
    "SQLBolt": "SQL",
    "Docker Crash Course": "Docker",
    "NumPy Tutorial": "NumPy",
    "Pandas Tutorial": "Pandas",
    "Machine Learning Crash Course": "Machine Learning",
    "TensorFlow Official Docs": "TensorFlow",
    "Deep Learning Nanodegree": "Machine Learning"
}

with driver.session() as session:
    for category in categories:
        session.run(
            """
            MERGE (c:Category {name: $name})
            """,
            name=category
        )

        print("Categories created successfully!")




with driver.session() as session:
    for skill in skills:
        session.run(
            """
            MERGE (s:Skill {name: $name})
            SET s.difficulty = $difficulty
            """,
            name=skill["name"],
            difficulty=skill["difficulty"]
        )

        print("Skills created successfully!")

with driver.session() as session:
    for skill, category in skill_categories.items():
        session.run(
            """
            MATCH (s:Skill {name: $skill})
            MATCH (c:Category {name: $category})
            MERGE (s)-[:BELONGS_TO]->(c)
            """,
            skill=skill,
            category=category
        )

        print("Skill-Category relationships created!")
with driver.session() as session:
    for career in careers:
        session.run(
            """
            MERGE (c:Career {name: $name})
            SET c.description = $description
            """,
            name=career["name"],
            description=career["description"]
        )

        print("Career nodes created!")
        
with driver.session() as session:
    for career, skills in career_skills.items():
        for skill in skills:
            session.run(
                """
                MATCH (c:Career {name:$career})
                MATCH (s:Skill {name:$skill})
                MERGE (c)-[:REQUIRES]->(s)
                """,
                career=career,
                skill=skill
            )

            print("Career-Skill relationships created!")
with driver.session() as session:
    for prerequisite, skill in prerequisites.items():
        session.run(
            """
            MATCH (pre:Skill {name:$pre})
            MATCH (s:Skill {name:$skill})
            MERGE (pre)-[:PREREQUISITE_OF]->(s)
            """,
            pre=prerequisite,
            skill=skill
        )

        print("Prerequisite relationships created!")
with driver.session() as session:
    for course in courses:
        session.run(
            """
            MERGE (c:Course {title:$title})
            SET c.platform=$platform,
            c.url=$url
            """,
            title=course["title"],
            platform=course["platform"],
            url=course["url"]
        )

        print("Course nodes created!")
with driver.session() as session:
    for course, skill in course_skill.items():
        session.run(
            """
            MATCH (c:Course {title:$course})
            MATCH (s:Skill {name:$skill})
            MERGE (c)-[:TEACHES]->(s)
            """,
            course=course,
            skill=skill
        )

        print("Course-Skill relationships created!")
        