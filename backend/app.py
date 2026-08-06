from flask import Flask
from flask_cors import CORS
from routes import api

app = Flask(__name__)

CORS(app)

app.register_blueprint(api)


@app.route("/")
def home():
    return "SkillPath AI Backend Running"


if __name__ == "__main__":
    app.run(debug=True)