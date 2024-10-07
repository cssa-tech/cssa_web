import pymysql


def db_read(sql, para=[]):
    with pymysql.connect(host='127.0.0.1', port=3306, user='cssa_web', password='cssa_2024_web', db='cssa_web') as connection:
        with connection.cursor() as cursor:
            cursor.execute(sql, para)
            result = cursor.fetchall()
    return result


def db_write(sql, para=[]):
    with pymysql.connect(host='127.0.0.1', port=3306, user='cssa_web', password='cssa_2024_web', db='cssa_web') as connection:
        with connection.cursor() as cursor:
            cursor.execute(sql, para)
            connection.commit()
