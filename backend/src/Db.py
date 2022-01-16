import mysql.connector


class Db:
    host = "localhost"
    port = 3306
    database = "database"
    user = "root"
    password = ""

    def __init__(self, host, port, database, user, password):
        self.host = host
        self.port = port
        self.database = database
        self.user = user
        self.password = password

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
