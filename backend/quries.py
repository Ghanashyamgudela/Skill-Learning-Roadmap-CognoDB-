GET_CAREERS = """
MATCH (c:Career)
RETURN c.name AS name,
c.description AS description
ORDER BY c.name
"""

GET_SKILLS = """
MATCH (s:Skill)
RETURN s.name AS name,
s.difficulty AS difficulty
ORDER BY s.name
"""

GET_ROADMAP = """
MATCH (c:Career {name:$career})-[:REQUIRES]->(s:Skill)
RETURN s.name AS skill
ORDER BY s.name
"""
GET_PREREQUISITES = """
MATCH (s:Skill {name:$skill})
-[:PREREQUISITE_OF*]->(next:Skill)
RETURN next.name AS skill
"""

GET_COURSES = """
MATCH (s:Skill {name:$skill})<-[:TEACHES]-(c:Course)
RETURN c.title AS name,
c.platform AS platform,
c.url AS url
"""