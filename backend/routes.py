from flask import Blueprint, jsonify
from db import driver
from quries import GET_CAREERS, GET_SKILLS, GET_ROADMAP, GET_PREREQUISITES, GET_COURSES

api = Blueprint("api", __name__)

@api.route("/careers", methods=["GET"])
def get_careers():
    with driver.session() as session:
        result = session.run(GET_CAREERS)

        careers = []

        for record in result:
            careers.append({
                "name": record["name"],
                "description": record["description"]
            })

        return jsonify(careers)


@api.route("/skills", methods=["GET"])
def get_skills():
    with driver.session() as session:
        result = session.run(GET_SKILLS)

        skills = []

        for record in result:
            skills.append({
                "name": record["name"],
                "difficulty": record["difficulty"]
            })

        return jsonify(skills)

@api.route("/roadmap/<career>", methods=["GET"])
def get_roadmap(career):
    with driver.session() as session:
        result = session.run(
            GET_ROADMAP,
            career=career
        )

        skills = []

        for record in result:
            skills.append(record["skill"])

        return jsonify({
        "career": career,
        "skills": skills
    })
        
@api.route("/prerequisites/<skill>", methods=["GET"])
def get_prerequisites(skill):

    with driver.session() as session:

        result = session.run(
            GET_PREREQUISITES,
            skill=skill
        )

        skills = []

        for record in result:
            skills.append(record["skill"])

        return jsonify({
        "skill": skill,
        "next_skills": skills
    })
        
@api.route("/courses/<skill>", methods=["GET"])
def get_courses(skill):

    with driver.session() as session:

        result = session.run(
            GET_COURSES,
            skill=skill
        )

        courses = []

        for record in result:
            courses.append({
                "name": record["name"],
                "platform": record["platform"],
                "url": record["url"]
            })

        return jsonify({
            "skill": skill,
            "courses": courses
        })