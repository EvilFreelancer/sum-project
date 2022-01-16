import mysql.connector
import os


class Db:
    host = "localhost"
    port = 3306
    database = "database"
    user = "root"
    password = ""

    def __init__(self):
        self.host = os.getenv('DB_HOST')
        self.port = os.getenv('DB_PORT')
        self.database = os.getenv('DB_NAME')
        self.user = os.getenv('DB_USER')
        self.password = os.getenv('DB_PASS')

    def query(self, sql, val):
        mydb = mysql.connector.connect(
            host=self.host,
            port=self.port,
            database=self.database,
            user=self.user,
            password=self.password
        )

        mycursor = mydb.cursor()
        mycursor.execute(sql, val)
        mydb.commit()

        return mycursor.rowcount
