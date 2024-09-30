from db import db_read, db_write
from hashlib import sha256

admins = [
    ['root', 'cssa_web_2024_root', '0']
]

sql_get_admin = '''SELECT * FROM Admin WHERE admin_username = %s'''
sql_add_admin = '''INSERT INTO Admin (admin_username, admin_password_hash, admin_dept) VALUES (%s, %s, %s)'''


for admin in admins:
    hash_hex = sha256(admin[1].encode('utf-8')).hexdigest()

    same_username = db_read(sql_get_admin, [admin[0]])

    if len(same_username):
        print(f'Admin {admin[0]} add failed: Username conflict with (admin_id: {
              same_username[0][0]}, admin_username: {same_username[0][1]}, admin_dept: {same_username[0][3]})')

    else:
        db_write(sql_add_admin, [admin[0], hash_hex, admin[2]])
        print(f'Admin {admin[0]} successfully added')
