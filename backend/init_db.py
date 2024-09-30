from .db import db_write


def init_db():
    db_write('''
    CREATE TABLE IF NOT EXISTS Admin(
        admin_id INT AUTO_INCREMENT,
        admin_username VARCHAR(30),
        admin_password_hash VARCHAR(64),
        admin_dept INT,
        PRIMARY KEY (admin_id)
    )
    ''')

    db_write('''      
    CREATE TABLE IF NOT EXISTS Event(
        event_id INT AUTO_INCREMENT,
        event_title VARCHAR(100),
        event_start_time DATETIME,
        event_end_time DATETIME,
        event_url VARCHAR(100),
        event_dept INT,
        event_creator INT,
        has_cover INT,
        FOREIGN KEY (event_creator) REFERENCES Admin(admin_id),
        PRIMARY KEY (event_id)
    )
    ''')
