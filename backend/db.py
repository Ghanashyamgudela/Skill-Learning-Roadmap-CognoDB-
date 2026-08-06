from neo4j import GraphDatabase
from dotenv import load_dotenv
import os

load_dotenv()

URI = os.getenv("DB_URI")
USER = os.getenv("DB_USER")
PASSWORD = os.getenv("DB_PASSWORD")

driver = GraphDatabase.driver(
    URI,
    auth=(USER, PASSWORD)
)

def test_connection():
    with driver.session() as session:
        result = session.run(
            "RETURN 'Connected Successfully' AS message"
        )
        record = result.single()
        print(record["message"])

if __name__ == "__main__":
    test_connection()